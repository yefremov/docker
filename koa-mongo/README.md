# koa-mongo

Koa API writes access data to MongoDB storage.

## Usage

Build Dockerfile and run container.

```bash
$ docker-compose up --build
```

Visit page to write access data.

```sh
$ curl http://localhost:3000

[{"_id":"58f32c61b9220700015bfb35","request":{"headers":{"host":"localhost:3000","user-agent":"curl/7.51.0","accept":"*/*"},"method":"GET","length":null,"url":"/","originalUrl":"/","origin":"http://localhost:3000","path":"/","type":"","charset":"","query":{},"ip":"::ffff:172.19.0.1"},"response":{"headers":{},"status":404,"length":null,"type":""},"time":2}]
```
