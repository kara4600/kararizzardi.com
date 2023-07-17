# Base on offical NGINX Alpine image
FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./nginx.dev.conf /etc/nginx/conf.d/
COPY /etc/letsencrypt/live/kararizzardi.com/fullchain.pem /etc/nginx/ssl/fullchain.pem
COPY /etc/letsencrypt/live/kararizzardi.com/privkey.pem /etc/nginx/ssl/privkey.pem

# Expose the listening port
EXPOSE 80
EXPOSE 443

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]