# Build stage
FROM maven:3.9.3-eclipse-temurin-17 AS build

# Set working directory inside container
WORKDIR /app

# Copy project files to container
COPY . .

# Build the project, skip tests for faster deploy
RUN mvn clean package -DskipTests

# Run stage
FROM openjdk:17-jdk-slim

# Set working directory inside container
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose Render-provided port (via env variable PORT)
EXPOSE 8080

# Start the Spring Boot app
CMD ["java", "-jar", "app.jar"]
