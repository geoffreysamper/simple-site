DOCKER_TAG = "$VERSION"

docker build -t simple-site:$DOCKER_TAG .
docker push simple-site:$DOCKER_TAG