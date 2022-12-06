#!/bin/bash

docker build -f Dockerfile -t learning-loss-frontend:latest .
docker stack deploy --compose-file ./docker-compose.yml --with-registry-auth learning_loss_frontend
docker service update --force learning_loss_frontend_frontend
