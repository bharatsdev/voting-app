# Voting-App-Kubernetes

## Voting Service



    VOTE UI    : http://loclhost:4200   - Angular
    RESULT UI  : http://localhost:4201 - Angular 
    RESULT APP : http://localhost:3001 - Node JS
    VOTING APP :  http://loclhost:5001                     - Python
    WORKER APP :                       - Java
    POSTGRES   :                       - Docker with K8
    REDIS      :

### DockerCommands

    docker-compose up --force-recreate --build
    docker run  -p 5001:5001 flask-sample
    docker build -t flask-sample:latest .
    docker-compose up --force-recreate --build --remove-orphan

    
    
# TODO

    1- Setup docker for all the app - Done
    2- Setup docker compose for all apps  - Done
    3- setup pods  for all services
    4- setup deployments and Service for apss
    5- build  java jar app with docker 


## References

    https://github.com/mmumshad/example-voting-app-kubernetes-v2
    https://github.com/dockersamples
