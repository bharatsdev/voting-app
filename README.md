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

    
    
## TODO

    1- Setup docker for all the app - Done
    2- Setup docker compose for all apps  - Done
    3- setup pods  for all services
    4- setup deployments and Service for apss
    5- build  java jar app with docker 


## References

    https://github.com/mmumshad/example-voting-app-kubernetes-v2
    https://github.com/dockersamples
    https://medium.com/swlh/how-to-run-locally-built-docker-images-in-kubernetes-b28fbc32cc1d


### Commands for pulling the local docker image into kubernetes repository.

        Check minikube Env details 
            > minkube demon-evn
        setup localrepo to minikube repo
            > eval $(minikube docker-env)
        build docker images again
            > docker build . -t test:latest
        delete pod
            kubectl delete -f pod.yaml
        recreate pod
            kubectl create -f pod.yaml
        kubectl apply  -f k8s/
        minikube ssh
        docke images 

        
VoteUI=>VOTEAPP=>REDIS=>WORKER=>POSTGRES=>RESULTAPP=>RESULTUI
