package mission

type MissionRepository interface {
	Save(venueID int64, capacity int32, title string) (*Mission, error)
	GetMany(venueID int64, available *bool) ([]*Mission, error)
}
