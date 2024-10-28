package handler

import (
	"context"

	"github.com/jphacks/fk_2405/backend/be_grpc/helper"
	v1 "github.com/jphacks/fk_2405/backend/be_grpc/proto/gen/go/v1"
	missionUsecase "github.com/jphacks/fk_2405/backend/be_grpc/usecase/mission"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type MissionUseCase struct {
	createMission missionUsecase.CreateMissionUseCase
	getMissions   missionUsecase.GetMissionsUseCase
}

type MissionService struct {
	v1.UnimplementedMissionServiceServer
	uc MissionUseCase
}

func NewMissionService() *MissionService {
	return &MissionService{}
}

func (ms *MissionService) CreateMission(ctx context.Context, req *v1.CreateMissionRequest) (*v1.Mission, error) {
	userId, err := helper.GetUserIdFromMetadata(ctx)
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}
	iDto := &missionUsecase.CreateMissionInputDto{
		VenueID:  req.GetVenueId(),
		Capacity: req.GetCapacity(),
		Title:    req.GetTitle(),
	}
	oDto, err := ms.uc.createMission.Run(*userId, iDto)
	if err != nil {
		return nil, err
	}

	return &v1.Mission{
		MissionId: oDto.MissionID,
		ItemIds:   oDto.ItemIDs,
		VenueId:   oDto.VenueID,
		Capacity:  oDto.Capacity,
		Count:     oDto.Count,
		Title:     oDto.Title,
		CreatedAt: timestamppb.New(oDto.CreatedAt),
		UpdatedAt: timestamppb.New(oDto.UpdatedAt),
	}, nil
}

func (ms *MissionService) GetMissions(ctx context.Context, req *v1.GetMissionsRequest) (*v1.MissionsList, error) {
	iDto := &missionUsecase.GetMissionsInputDto{
		VenueID:   req.GetVenueId(),
		Available: req.Available,
	}
	oDto, err := ms.uc.getMissions.Run(iDto)
	if err != nil {
		return nil, err
	}

	var res *v1.MissionsList
	for _, v := range oDto.Missions {
		res.Missions = append(res.Missions, &v1.Mission{
			MissionId: v.MissionID,
			ItemIds:   v.ItemIDs,
			VenueId:   v.VenueID,
			Capacity:  v.Capacity,
			Count:     v.Count,
			Title:     v.Title,
			CreatedAt: timestamppb.New(v.CreatedAt),
			UpdatedAt: timestamppb.New(v.UpdatedAt),
		})
	}
	return res, nil
}
