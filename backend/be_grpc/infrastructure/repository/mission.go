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
	if err := db.Table("missions").Save(&newMission).Error; err != nil {
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

func (r *missionRepository) GetMany(venueID int64, available *bool) ([]*mission.Mission, error) {
	db := database.DB
	missions := []*model.Mission{}
	query := db.Table("missions").Where("venue_id = ?", venueID)

	// availableの値に応じてクエリを追加
	if available != nil {
		if *available {
			query = query.Where("capacity > count")
		} else {
			query = query.Where("capacity <= count")
		}
	}

	// データ取得
	if err := query.Find(&missions).Error; err != nil {
		log.Printf("Error: %d, %v", venueID, err.Error())
		return nil, status.Error(codes.Internal, err.Error())
	}

	var result []*mission.Mission
	for _, v := range missions {
		result = append(result, &mission.Mission{
			MissionID: v.ID,
			ItemIDs:   v.ItemIDs,
			VenueID:   v.VenueID,
			Capacity:  v.Capacity,
			Count:     v.Count,
			Title:     v.Title,
			CreatedAt: v.CreatedAt,
			UpdatedAt: v.UpdatedAt,
		})
	}
	return result, nil
}
