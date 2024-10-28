package model

import (
	"time"
)

type Mission struct {
	ID        int64     `gorm:"column:id;primaryKey;autoIncrement"`
	ItemIDs   []int64   `gorm:"column:item_ids;type:json"` // JSON形式で保存
	VenueID   int64     `gorm:"column:venue_id;not null"`
	Capacity  int32     `gorm:"column:capacity;not null"`
	Count     int32     `gorm:"column:count;not null"`
	Title     string    `gorm:"column:title;not null"`
	CreatedAt time.Time `gorm:"column:created_at;autoCreateTime"`
	UpdatedAt time.Time `gorm:"column:updated_at;autoUpdateTime"`
}
