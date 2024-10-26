package repository

import (
	"log"

	"github.com/jphacks/fk_2405/backend/be_grpc/domain/mission"
	"github.com/jphacks/fk_2405/backend/be_grpc/infrastructure/database"
	"github.com/jphacks/fk_2405/backend/be_grpc/infrastructure/database/model"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type missionRepository struct {
}

func NewProductRepository() mission.MissionRepository {
	return &missionRepository{}
}

func (r *missionRepository) Save(venueID int64, capacity int32, title string) (*mission.Mission, error) {
	newMission := model.Mission{
		VenueID:  venueID,
		Capacity: capacity,
		Count:    capacity,
		Title:    title,
	}
	db := database.DB
	if err := db.Save(&newMission).Error; err != nil {
		log.Printf("Error: %d, %v", venueID, err.Error())
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &mission.Mission{
		MissionID: newMission.ID,
		ItemIDs:   newMission.ItemIDs,
		VenueID:   newMission.VenueID,
		Capacity:  newMission.Capacity,
		Count:     newMission.Count,
		Title:     newMission.Title,
		CreatedAt: newMission.CreatedAt,
		UpdatedAt: newMission.UpdatedAt,
	}, nil
}
