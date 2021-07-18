FROM openjdk:8-jre-alpine
ARG  JAR_FILE=target/*.jar

# Add the app jar
COPY  ${JAR_FILE}   worker-app.jar

# Run Command
ENTRYPOINT ["java","-jar","/worker-app.jar"]