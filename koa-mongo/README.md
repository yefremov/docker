# koa-mongo

Koa API writes access data to MongoDB storage.

## Usage

Build Dockerfile and run container.

```bash
$ docker-compose up --build
```

Curl or visit root page to write access log.

```sh
$ curl http://localhost:3000 -v

* Rebuilt URL to: http://localhost:3000/
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 3000 (#0)
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.51.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/plain; charset=utf-8
< Content-Length: 13
< X-Response-Time: 1.3388120000017807
< Server-Timing:  db=0.1; "Total MongoDB", cpu=0; "Total CPU"
< Date: Sun, 16 Apr 2017 20:14:44 GMT
< Connection: keep-alive
<
* Curl_http_done: called premature == 0
* Connection #0 to host localhost left intact
Hello, World!⏎
```
