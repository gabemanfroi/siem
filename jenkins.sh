#!/bin/bash
su - jenkins <<!
jenkins
docker build -t front --build-arg REACT_APP_ENVIRONMENT='production' --build-arg REACT_APP_HTTP_API_URL='https://apigw.seclab.inf.br' --build-arg REACT_APP_TOKEN_KEY_NAME='@seclab_token' --build-arg REACT_APP_WIDGETS_CONFIG_NAME='@seclab_widgets_config ' .
docker tag front gabemanfroi/siem_frontend:production
docker push gabemanfroi/siem_frontend:production
microk8s kubectl delete -f /home/gabriel/yggdrasil/kubectl/production/front/deployment.yml
microk8s kubectl apply -f /home/gabriel/yggdrasil/kubectl/production/front/deployment.yml

