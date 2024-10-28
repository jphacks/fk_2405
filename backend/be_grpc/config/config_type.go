// This file was generated from JSON Schema using quicktype, do not modify it directly.
// To parse and unparse this JSON data, add this code to your project and do:
//
//    configType, err := UnmarshalConfigType(bytes)
//    bytes, err = configType.Marshal()

package config

import "encoding/json"

func UnmarshalConfigType(data []byte) (ConfigType, error) {
	var r ConfigType
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *ConfigType) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type ConfigType struct {
	DeploymentType string     `json:"DeploymentType"`
	DeployComment  string     `json:"//deploy_comment"`
	Port           string     `json:"Port"`
	PostgreSQL     PostgreSQL `json:"PostgreSQL"`
}

type PostgreSQL struct {
	Local   Develop `json:"Local"`
	Develop Develop `json:"Develop"`
}

type Develop struct {
	Host string `json:"Host"`
	Port int64  `json:"Port"`
	EXT  string `json:"Ext"`
}
