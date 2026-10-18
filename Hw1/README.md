# GPA Calculator Docker App

## Build and Run Instructions
1. Build image: `docker build -t osamafouda/gpa-calculator:v1 .`
2. Run container: `docker run -d -p 8080:80 osamafouda/gpa-calculator:v1`
3. Access App: Open `http://localhost:8080` (`http://localhost:8080/health` for health check).
