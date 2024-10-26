package server

import (
	"fmt"
	"log"
	"net"
	"os"
	"strconv"

	grpc_recovery "github.com/grpc-ecosystem/go-grpc-middleware/recovery"
	"github.com/jphacks/fk_2405/backend/be_grpc/api"
	"github.com/jphacks/fk_2405/backend/be_grpc/proto/gen"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/reflection"
	"google.golang.org/grpc/status"
)

func StartgRPCServer() error {
	var err error

	port := os.Getenv("PORT")
	port_int, err := strconv.Atoi(port)
	if err != nil {
		port_int = 8031
	}

	listenPort, err := net.Listen("tcp", ":"+strconv.Itoa(port_int))
	if err != nil {
		return fmt.Errorf("failed to listen: %v", err)
	}

	opts := []grpc_recovery.Option{
		grpc_recovery.WithRecoveryHandler(recoveryFunc),
	}
	server := grpc.NewServer(
		grpc.ChainUnaryInterceptor(
			grpc_recovery.UnaryServerInterceptor(opts...),
		),
		grpc.ChainStreamInterceptor(
			grpc_recovery.StreamServerInterceptor(opts...),
		),
	)

	// serviceが追加されるたびに同じ形で追加していく
	gen.RegisterMissionServiceServer(server, api.NewMissionService())

	go server.Serve(listenPort)

	reflection.Register(server)

	return nil
}

func recoveryFunc(p interface{}) error {
	log.Printf("Recovered from panic: %v", p)
	return status.Errorf(codes.Internal, "unexpected error occurred")
}
