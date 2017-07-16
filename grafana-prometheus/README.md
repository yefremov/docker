# grafana-prometheus

Grafana with Prometheus DB as data source.

## Instalation

Start containers in the background and leave them running.

```bash
$ docker-compose up -d
```

Send ping to Grafana using HTTP API.

```
$ curl -v http://localhost:3000/api/login/ping
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 3000 (#0)
> GET /api/login/ping HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.51.0
> Accept: */*
>
< HTTP/1.1 401 Unauthorized
< Cache-Control: no-cache
< Content-Type: application/json; charset=UTF-8
< Set-Cookie: grafana_sess=9360cf0ef6b79064; Path=/; HttpOnly
< Date: Sun, 16 Jul 2017 17:58:06 GMT
< Content-Length: 26
<
* Curl_http_done: called premature == 0
* Connection #0 to host localhost left intact
{"message":"Unauthorized"}
```

Retrieve Prometheus monitor targets using HTTP API.

```
$ curl -v http://localhost:9090/api/v1/targets
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 9090 (#0)
> GET /api/v1/targets HTTP/1.1
> Host: localhost:9090
> User-Agent: curl/7.51.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Access-Control-Allow-Headers: Accept, Authorization, Content-Type, Origin
< Access-Control-Allow-Methods: GET, OPTIONS
< Access-Control-Allow-Origin: *
< Access-Control-Expose-Headers: Date
< Content-Type: application/json
< Date: Sun, 16 Jul 2017 17:57:35 GMT
< Content-Length: 739
<
* Curl_http_done: called premature == 0
* Connection #0 to host localhost left intact
{"status":"success","data":{"activeTargets":[{"discoveredLabels":{"__address__":"localhost:9090","__metrics_path__":"/metrics","__scheme__":"http","job":"prometheus"},"labels":{"instance":"localhost:9090","job":"prometheus"},"scrapeUrl":"http://localhost:9090/metrics","lastError":"","lastScrape":"2017-07-16T17:57:27.403980456Z","health":"up"},{"discoveredLabels":{"__address__":"localhost:9100","__metrics_path__":"/metrics","__scheme__":"http","job":"prometheus"},"labels":{"instance":"localhost:9100","job":"prometheus"},"scrapeUrl":"http://localhost:9100/metrics","lastError":"Get http://localhost:9100/metrics: dial tcp 127.0.0.1:9100: getsockopt: connection refused","lastScrape":"2017-07-16T17:57:30.787748403Z","health":"down"}]}}
```
