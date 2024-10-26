package api

import "github.com/jphacks/fk_2405/backend/be_grpc/proto/gen"

type MissionService struct {
	gen.UnimplementedMissionServiceServer
}

func NewMissionService() MissionService {
	return MissionService{}
}
