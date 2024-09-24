#!/bin/bash
TAG=v1
DOCKER_HUB=first022/counter:$TAG

cp .env .env.docker

docker login
docker build --env-file .env.docker -t $DOCKER_HUB .
docker push $DOCKER_HUB

rm .env.docker