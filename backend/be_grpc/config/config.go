package config

import (
	"log"

	"github.com/joho/godotenv"
	"github.com/jphacks/fk_2405/backend/be_grpc/pkg"
)

var ConfigData *ConfigType

func InitConfig() {
	ReadSetting()
	ReadEnv()
}

func ReadSetting() *ConfigType {
	log.Println("ReadSetting")

	path := "setting"
	pkg.ReadJson(path, &ConfigData)

	return ConfigData
}

func ReadEnv() {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatalf("Error loading .env file")
	}
}
