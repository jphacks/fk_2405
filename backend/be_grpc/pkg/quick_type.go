package pkg

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"
)

type JSON struct{}

func ReadJson(path string, data interface{}) *interface{} {
	currentDir, _ := os.Getwd()
	tsDir := strings.Split(currentDir, "be_grpc")

	jsonDir := filepath.Join(tsDir[0], "be_grpc/", path)
	files, err := os.ReadDir(jsonDir)
	if err != nil {
		fmt.Println("Error reading directory:", err)
		return nil
	}

	jsonFiles := []string{}

	for _, file := range files {
		if strings.HasSuffix(file.Name(), ".json") {
			jsonFiles = append(jsonFiles, file.Name())
		}
	}

	for _, file := range jsonFiles {
		contents, err := os.ReadFile(jsonDir + "/" + file)

		if err == nil {
			res, err := UnmarshalJSON(&data, contents)
			if err == nil {
				data = &res
				return &data

			} else {
				msg := fmt.Sprintf("%s/*.json read error=%v", path, err)
				log.Print(msg)
				fmt.Print(msg)
			}

		} else {
			msg := fmt.Sprintf("%s/*.json open error=%v", path, err)
			log.Print(msg)
			fmt.Print(msg)
		}

	}
	os.Exit(0)
	return nil
}

func UnmarshalJSON(data *interface{}, bytes []byte) (*interface{}, error) {
	// var r *readType
	err := json.Unmarshal(bytes, data)
	return data, err
}
