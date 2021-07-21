#!/bin/bash

rm -rf deployment
sudo docker build -t wild-bill-every-matrix .
sudo docker run --name wb-container-every-matrix -p 9966:8080 -d wild-bill-every-matrix 
mkdir deployment
sudo docker export wb-container-every-matrix | gzip > deployment/wb-container.gz
sudo docker stop wb-container-every-matrix
sudo docker rm wb-container-every-matrix
sudo docker rmi wild-bill-every-matrix

