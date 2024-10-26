package database

import (
	"fmt"
	"log"

	"github.com/jphacks/fk_2405/backend/be_grpc/config"
	"github.com/jphacks/fk_2405/backend/be_grpc/database/model"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func NewSQLDB() error {
	var err error
	dsn := ""
	switch config.ConfigData.DeploymentType {
	case "local":
		dsn = fmt.Sprintf("host=%s port=%d %s", config.ConfigData.PostgreSQL.Local.Host, config.ConfigData.PostgreSQL.Local.Port, config.ConfigData.PostgreSQL.Local.EXT)
	case "develop":
		dsn = fmt.Sprintf("host=%s port=%d %s", config.ConfigData.PostgreSQL.Develop.Host, config.ConfigData.PostgreSQL.Develop.Port, config.ConfigData.PostgreSQL.Develop.EXT)
	default:
		dsn = ""
	}

	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return fmt.Errorf("gorm.Open(): %v", err.Error())
	}

	err = DB.AutoMigrate(&model.Mission{})
	if err != nil {
		return fmt.Errorf("DB.AutoMigrate(): %v", err.Error())
	}

	log.Println("SQLDB AutoMigrate completed!")
	return nil
}
