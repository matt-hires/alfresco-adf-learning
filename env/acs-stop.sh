#!/bin/bash

DOCKER="/mnt/c/Program Files/RedHat/Podman/podman.exe"
ACS_COMPOSE="../acs-deployment/docker-compose/community-compose.yaml"

"$DOCKER" compose -f "$ACS_COMPOSE"down 
