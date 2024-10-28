package mission

import (
	"time"
)

type Mission struct {
	MissionID int64
	ItemIDs   []int64
	VenueID   int64
	Capacity  int32
	Count     int32
	Title     string
	CreatedAt time.Time
	UpdatedAt time.Time
}
