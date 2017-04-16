# go-redis

Develop and run Go application inside a container.

## Usage

Build Dockerfile and run container.

```bash
$ docker-compose up --build
```

Run container showing only app logs suppressing others.

```bash
$ docker-compose up app

goapp_redis_1 is up-to-date
Starting goapp_app_1
Attaching to goapp_app_1
app_1    | PONG <nil>
goapp_app_1 exited with code 0
```
