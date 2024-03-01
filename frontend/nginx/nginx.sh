#!/bin/sh

# Define environment variable values
VUE_APP_API_HOST="my_api_host"
VUE_APP_API_PORT="my_api_port"

# Read NGINX configuration template file
template_file="nginx-app.conf.template"
config=$(<"$template_file")

# Replace placeholders with actual values
config=$(echo "$config" | sed "s/{{ VUE_APP_API_HOST }}/$VUE_APP_API_HOST/g")
config=$(echo "$config" | sed "s/{{ VUE_APP_API_PORT }}/$VUE_APP_API_PORT/g")

# Write the final NGINX configuration file
nginx_config_file="nginx.conf"
echo "$config" > "$nginx_config_file"

# Start NGINX with the generated configuration file
nginx -c "$nginx_config_file" -g "daemon off;"