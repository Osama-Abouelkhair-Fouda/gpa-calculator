# Homework 1 - Written Answers

### 1. Explain the order of the instructions in your Dockerfile. What would happen to build time if you changed the order of two of them?
The Dockerfile instructions are ordered from least-frequently changed to most-frequently changed to maximize layer caching. Base image declaration (`FROM`) and environment variables (`ENV`) are placed at the top, followed by asset copying and permission configurations. If we moved `COPY index.html ...` before setting up system permissions or directory configurations, Docker would invalidate the build cache for all subsequent steps every time HTML content changes. Reordering these steps would significantly increase build times by forcing Docker to rebuild unchanged configuration layers repeatedly.

### 2. What happens to data written inside a container when the container is removed? How would you keep the data, and where should an application keep important state?
When a container is deleted, any data written to its writable container layer is permanently lost because container storage is ephemeral by nature. To persist data across container lifecycles, Docker volumes or bind mounts must be attached to the container. Important state and database records should never be stored directly inside the container filesystem; instead, applications should store persistent state in managed external databases or mounted persistent storage volumes.

### 3. Why is the `latest` tag a risk for reproducibility? What did you use instead?
Using the `latest` tag creates build instability and unpredictability because it always pulls the most recent image version, which might introduce breaking changes, updated dependencies, or altered defaults between builds. This violates the core DevOps principle of immutable and reproducible deployments. Instead of `latest`, I explicitly pinned the base image version to `nginx:1.27-alpine` and tagged my produced application image as `v1` (`osamafouda/gpa-calculator:v1`).

---
### AI Assistant Usage Note
I used an AI assistant to help review Dockerfile best practices (such as configuring Nginx permissions for a non-root user) and to structure clear responses for the written questions in my own words.
