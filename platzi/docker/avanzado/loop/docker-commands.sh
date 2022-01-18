docker build -t loop .
docker run -d --name looper loop
docker stop looper
docker ps -l
