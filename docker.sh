docker build -t personal-portfolio:latest .
docker tag personal-portfolio:latest sdeashirvad/personal-portfolio:stable_v1
docker push sdeashirvad/personal-portfolio:stable_v1