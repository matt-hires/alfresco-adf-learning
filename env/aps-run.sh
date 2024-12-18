#!/bin/bash

DOCKER="podman"
APS_VERSION="24.1.0"
APS_PORT="9090"

"$DOCKER" pull "alfresco/process-services:$APS_VERSION"

"$DOCKER" run -dp "$APS_PORT:8080" --name aps alfresco/process-services

echo "Container running on http://localhost:$APS_PORT/activiti-app/"
