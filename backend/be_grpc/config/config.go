package config

import (
	"log"

	"github.com/joho/godotenv"
	"github.com/jphacks/fk_2405/backend/be_grpc/pkg"
)

var ConfigData *ConfigType

// ReadConfig setting/config.jsonを読む
func ReadConfig() *ConfigType {
	log.Println("ReadConfig")

	path := "setting"
	pkg.ReadJson(path, &ConfigData)

	return ConfigData
}

func ReadEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file")
	}
}
