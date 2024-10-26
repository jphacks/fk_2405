package model

import (
	"time"
)

type Mission struct {
	ID        uint64    `gorm:"column:id;primaryKey;autoIncrement"`
	ItemIDs   []int64   `gorm:"column:item_ids;type:json"` // JSON形式で保存
	Capacity  int       `gorm:"column:capacity;not null"`
	Title     string    `gorm:"column:title;not null"`
	VenueID   int64     `gorm:"column:venue_id;not null"`
	Count     int       `gorm:"column:count;not null"`
	CreatedAt time.Time `gorm:"column:created_at;autoCreateTime"`
	UpdatedAt time.Time `gorm:"column:updated_at;autoUpdateTime"`
}
