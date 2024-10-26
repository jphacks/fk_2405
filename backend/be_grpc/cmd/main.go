package main

import (
	"fmt"
	"log"
	"net"
	"time"

	"github.com/jphacks/fk_2405/backend/be_grpc/config"
	"github.com/jphacks/fk_2405/backend/be_grpc/database"

	rotatelogs "github.com/lestrrat-go/file-rotatelogs"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	config.ReadConfig()

	if err := database.NewSQLDB(); err != nil {
		log.Println(err.Error())
	}

	var address string
	switch data := config.ConfigData; data.DeploymentType {
	case "local":
		address = fmt.Sprintf(":%s", data.Port)
	case "develop", "production":
		address = fmt.Sprintf(":%s", data.Port)
		rl, err := rotatelogs.New(
			"./log/server_%Y%m%d_%H.log",
			rotatelogs.WithRotationTime(time.Hour*time.Duration(24)), //rotation time
			rotatelogs.WithRotationCount(7),                          //max backup count
		)
		if err != nil {
			fmt.Println("error: rotatelog.New()")
			return
		}
		log.SetFlags(log.Ldate | log.Ltime)
		log.SetOutput(rl)
	}
	lis, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}
	defer lis.Close()

	s := grpc.NewServer()
	reflection.Register(s)

	log.Printf("server is running...")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
