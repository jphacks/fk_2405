package mission

import (
	"time"

	missionDomain "github.com/jphacks/fk_2405/backend/be_grpc/domain/mission"
)

type GetMissionsUseCase struct {
	missionRepo missionDomain.MissionRepository
}

type GetMissionsInputDto struct {
	VenueID   int64
	Available *bool
}

type GetMissionsOutputDto struct {
	Missions []struct {
		MissionID int64
		ItemIDs   []int64
		VenueID   int64
		Capacity  int32
		Count     int32
		Title     string
		CreatedAt time.Time
		UpdatedAt time.Time
	}
}

func (uc *GetMissionsUseCase) Run(input *GetMissionsInputDto) (*GetMissionsOutputDto, error) {
	missions, err := uc.missionRepo.GetMany(input.VenueID, input.Available)
	if err != nil {
		return nil, err
	}

	var oDto GetMissionsOutputDto
	for _, v := range missions {
		oDto.Missions = append(oDto.Missions, struct {
			MissionID int64
			ItemIDs   []int64
			VenueID   int64
			Capacity  int32
			Count     int32
			Title     string
			CreatedAt time.Time
			UpdatedAt time.Time
		}{
			MissionID: v.MissionID,
			ItemIDs:   v.ItemIDs,
			VenueID:   v.VenueID,
			Capacity:  v.Capacity,
			Count:     v.Count,
			Title:     v.Title,
			CreatedAt: v.CreatedAt,
			UpdatedAt: v.UpdatedAt,
		})
	}
	return &oDto, nil
}
