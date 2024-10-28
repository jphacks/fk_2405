package helper

import (
	"context"
	"fmt"

	"google.golang.org/grpc/metadata"
)

func GetUserIdFromMetadata(ctx context.Context) (*string, error) {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, fmt.Errorf("failed to retrieve metadata")
	}

	userIDs := md.Get("user_id")
	if len(userIDs) == 0 {
		return nil, fmt.Errorf("user_id not found in metadata")
	}
	userID := userIDs[0]

	return &userID, nil
}

func CheckIsAdmin(userId string) bool {
	return true
}
