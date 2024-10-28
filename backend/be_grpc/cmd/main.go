package main

import (
	"fmt"
	"log"
	"time"

	"github.com/jphacks/fk_2405/backend/be_grpc/config"
	"github.com/jphacks/fk_2405/backend/be_grpc/infrastructure/database"
	"github.com/jphacks/fk_2405/backend/be_grpc/server"

	rotatelogs "github.com/lestrrat-go/file-rotatelogs"
)

func main() {
	config.InitConfig()

	if err := database.NewSQLDB(); err != nil {
		log.Println(err.Error())
	}

	switch data := config.ConfigData; data.DeploymentType {
	case "local":
	case "develop", "production":
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

	log.Printf("server is running...")
	if err := server.StartgRPCServer(); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}
