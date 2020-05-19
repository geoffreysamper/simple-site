echo "tag is $DOCKER_TAG_VERSION"

docker build -t simple-site:$DOCKER_TAG_VERSION .
docker tag  simple-site:$DOCKER_TAG_VERSION  geoffreysamper/simple-site:$DOCKER_TAG_VERSION
docker push geoffreysamper/simple-site:$DOCKER_TAG_VERSION