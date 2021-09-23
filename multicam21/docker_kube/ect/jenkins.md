## jenkins

docker-compose.yml

```yml
version: "3"
services:
  master:
    container_name: master
    image: jenkins:2.60.3-alpine
    ports:
      - 9090:8080
    volumes:
      - ./jenkins_home:/var/jenkins_home
```

