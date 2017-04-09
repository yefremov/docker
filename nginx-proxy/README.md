# nginx-node

## Installation

Build both node and nginx images.

```bash
$ docker-compose build
```

Run containers in detached mode.

```bash
$ docker-compose up -d
```

Make a `curl` request to test that proxy is serving node application.

```bash
$ curl http://localhost:8000
$ Hello, World!
```

Check access logs on nginx container, but first, get its name by process.

```bash
$ docker-compose ps

--------------------------------------------------------------------------------
nginxproxy_nginx_1   nginx -g daemon off;   Up     443/tcp, 0.0.0.0:8000->80/tcp
nginxproxy_node_1    node index             Up     3000/tcp                      
```

Now you have name of nginx proxy, use it to read logs.

```bash
$ docker logs nginxproxy_nginx_1

172.19.0.1 - - [09/Apr/2017:11:51:39 +0000] "GET / HTTP/1.1" 200 24 "-" "curl/7.51.0" "-"
172.19.0.1 - - [09/Apr/2017:11:59:39 +0000] "GET / HTTP/1.1" 200 24 "-" "curl/7.51.0" "-"
```
