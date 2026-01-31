#!/usr/bin/env sh
# Runs the built image and maps container port 80 -> host 8080.
# Usage: ./run.sh
docker run --rm -p 8080:80 personal-portfolio:latest
