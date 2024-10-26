package mission

type MissionRepository interface {
	Save(venueID int64, capacity int32, title string) (*Mission, error)
}
