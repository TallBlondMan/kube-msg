#!/bin/sh

set -e

envsubst '$VUE_APP_API_HOST $VUE_APP_API_PORT' < /app/nginx/nginx-app.conf > /etc/nginx/conf.d/nginx-app.conf
# nginx -g "daemon off;"