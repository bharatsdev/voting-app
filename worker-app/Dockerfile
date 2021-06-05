FROM openjdk:8-jdk-alpine
ARG  JAR_FILE=target/*.jar

# Add the app jar
COPY  ${JAR_FILE}   worker-app.jar

ENTRYPOINT ["java","-jar","/worker-app.jar"]
