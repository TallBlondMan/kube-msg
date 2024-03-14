#!/bin/sh

set -e
# envsub does not overwrite the data in default and just adding it is not enough
rm /etc/nginx/conf.d/default.conf
# substitute the backend info 
envsubst '$VUE_APP_API_HOST $VUE_APP_API_PORT' < /app/nginx/nginx-app.conf > /etc/nginx/conf.d/default.conf
nginx -g "daemon off;"