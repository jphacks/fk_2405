#!/bin/sh

APP_NAME=${APP_NAME:-"trjx-ts"}
ENV=${ENV:-local}

start () {
    export ENV=$ENV
    export APP_NAME=$APP_NAME
    go build -v -o ./bin/$APP_NAME ./main.go && ./bin/$APP_NAME
}

build_linux () {
    export ENV=$ENV
    export APP_NAME=$APP_NAME
    GOOS=linux GOARCH=amd64 go build -v -o ./bin/$APP_NAME ./main.go
}


# jsonファイルをgoの型ファイルに変更する時
json () {
    if [ "$1" = "config" ]; then
        quicktype -l go --package config ../setting/config.json -o ../config/config_type.go
    elif [ "$1" = "example" ]; then
        quicktype -l go --package example examples/json/*.json -o example/json.go
    fi
}

proto () {
    protoc --go_out=./proto/gen/go/v1 --go_opt=paths=source_relative --go-grpc_out=./proto/gen/go/v1 --go-grpc_opt=paths=source_relative -I=./proto ./proto/*.proto
}

$*
