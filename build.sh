#!/bin/bash
TAG=v1
DOCKER_HUB=first022/counter:$TAG

docker login
docker build -t $DOCKER_HUB .
docker push $DOCKER_HUB