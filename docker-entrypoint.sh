#!/bin/sh
# Substitute PORT environment variable (default 80) into nginx config
PORT=${PORT:-80}
sed "s|\${PORT}|$PORT|g" /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf
exec nginx -g "daemon off;"
