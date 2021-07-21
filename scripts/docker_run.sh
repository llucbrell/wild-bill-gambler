#!/bin/bash

RED='\033[0;31m'
NC='\033[0m' # No Color

sudo docker build -t wild-bill-every-matrix .
sudo docker run --name wb-container-every-matrix -p 9966:8080 -d wild-bill-every-matrix 

printf "\n\n Docker Container listening on Port ${RED}9966${NC} \n"