FROM nginx:1.27-alpine

# Environment variable configuration
ENV APP_PORT=80

# Copy application assets
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js

# Create health endpoint
RUN echo '{"status":"UP"}' > /usr/share/nginx/html/health

# Configure Nginx permissions to run as non-root user
RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid /var/cache/nginx /var/log/nginx /usr/share/nginx/html

USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
