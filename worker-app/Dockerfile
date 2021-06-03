# Use JRE11 slim
FROM openjdk:11.0-jre-slim

# Add the app jar
ADD target/*.jar worker-app-1.0.jar

ENTRYPOINT java -jar worker-app-1.0.jar