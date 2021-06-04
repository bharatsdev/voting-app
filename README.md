# Voting-App-Kubernetes

## Voting Service



    VOTE UI    : http://0.0.0.0:5001   - Angular
    RESULT UI  : http://localhost:4200 - Angular 
    RESULT APP : http://localhost:3001 - Node JS
    VOTING APP :                       - Python
    WORKER APP :                       - Java
    POSTGRES   :                       - Docker with K8
    REDIS      :

### DockerCommands

    docker-compose up --force-recreate --build
    docker run  -p 5001:5001 flask-sample
    docker build -t flask-sample:latest .
    
    
# TODO

1- Setu docker for all the app
2- Setup docker compose for all apps 
3- setup pods  for all services
4- setup deployments and Service for apss

