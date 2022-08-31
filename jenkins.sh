#!/bin/bash
su - jenkins <<!
jenkins
docker build --tag front .
docker tag front gabemanfroi/siem_frontend:production
docker push gabemanfroi/siem_frontend:production
microk8s kubectl delete -f /home/gabriel/yggdrasil/kubectl/production/front/deployment.yml
microk8s kubectl apply -f /home/gabriel/yggdrasil/kubectl/production/front/deployment.yml

