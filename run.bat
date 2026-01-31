@echo off
REM Runs the built image and maps container port 80 -> host 8080.
REM Usage: run.bat
docker run --rm -p 8080:80 personal-portfolio:latest
