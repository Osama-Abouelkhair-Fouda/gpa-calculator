# Homework 2 - Written Answers

### 1. Your app calls the second service by name. How does that work, and why does the same name not work between two containers on the default docker run network?
Docker Compose automatically creates a dedicated user-defined bridge network for the project, embedding an internal DNS server that resolves service names (like `redis`) directly to their container IP addresses. On the default `bridge` network created by standard `docker run` commands, automatic container-name resolution is disabled by default unless legacy link flags are used, meaning containers cannot discover each other by simple service names without manual IP configuration.

### 2. Which of your services is stateless and which is not? Show the evidence: what did you do, and what happened to your data?
The Nginx web application container is completely stateless, whereas the Redis service is stateful because it persists data to a mounted Docker volume (`redis_data`). When running `docker compose rm -sf app`, the app container is destroyed and recreated instantly without losing any data since application state resides externally. Executing `docker compose down` stops and removes the containers while preserving the volume data, whereas running `docker compose down -v` completely purges the named volume, deleting all stored state permanently.

### 3. Where should a database password come from, and why is it a problem to commit it to Git, even in a private repository?
Database passwords and sensitive secrets should come from secure external environment files (`.env`) or secret management tools rather than being hardcoded into configuration files. Committing secrets to Git—even in a private repository—poses a severe security risk because repository history is permanent, contributors or automated tools might leak them, and unauthorized third parties gaining access to the repo could compromise the entire database infrastructure.

---
### AI Assistant Usage Note
I used an AI assistant to help structure the Docker Compose configuration, review healthcheck syntax, and draft concise written answers in my own words.
