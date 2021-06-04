FROM openjdk:8-jdk-alpine

# Add the app jar
ADD target/*.jar worker-app-1.0.jar

ENTRYPOINT ["java","-jar","/worker-app-1.0.jar"]