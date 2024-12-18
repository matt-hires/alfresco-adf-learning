#!/bin/bash

DOCKER="podman"
APS_VERSION="24.1.0"
APS_PORT="8091"

"$DOCKER" pull "alfresco/process-services-admin:$APS_VERSION"

"$DOCKER" run -dp "$APS_PORT:8080" --name aps-admin alfresco/process-services-admin

echo "Container running on http://localhost:$APS_PORT/activiti-admin/"
