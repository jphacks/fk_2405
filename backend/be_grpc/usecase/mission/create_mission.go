package mission

import (
	"time"

	missionDomain "github.com/jphacks/fk_2405/backend/be_grpc/domain/mission"
	"github.com/jphacks/fk_2405/backend/be_grpc/helper"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type CreateMissionUseCase struct {
	MissionRepo missionDomain.MissionRepository
}

type CreateMissionInputDto struct {
	VenueID  int64
	Capacity int32
	Title    string
}

type CreateMissionOutputDto struct {
	MissionID int64
	ItemIDs   []int64
	VenueID   int64
	Capacity  int32
	Count     int32
	Title     string
	CreatedAt time.Time
	UpdatedAt time.Time
}

func (uc *CreateMissionUseCase) Run(userId string, input *CreateMissionInputDto) (*CreateMissionOutputDto, error) {
	if isAdmin := helper.CheckIsAdmin(userId); !isAdmin {
		return nil, status.Error(codes.PermissionDenied, "user is not admin")
	}

	mission, err := uc.MissionRepo.Save(input.VenueID, input.Capacity, input.Title)
	if err != nil {
		return nil, err
	}

	return &CreateMissionOutputDto{
		MissionID: mission.MissionID,
		ItemIDs:   mission.ItemIDs,
		VenueID:   mission.VenueID,
		Capacity:  mission.Capacity,
		Count:     mission.Count,
		Title:     mission.Title,
		CreatedAt: mission.CreatedAt,
		UpdatedAt: mission.UpdatedAt,
	}, nil
}
