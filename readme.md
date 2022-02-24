# README

Redirects all requests to <https://monitoringapi.solaredge.com>.

Eg. a request to `https://monitoringapi.solaredge.com/site/SITE_ID/currentPowerFlow.json?api_key=MY_API_KEY` can be replaced with `http://localhost:8080/site/SITE_ID/currentPowerFlow.json?api_key=MY_API_KEY`.

This is useful when the device making the request cannot make requests via SSL for whatever reason.

## Config

Environment variables

-   `PORT` controls what port internally the process will bind to
-   `LOGLEVEL` accepts only one value `debug` which when set will log the url of every incoming request

## Usage

### In Docker

Build the docker image

```bash
docker build --tag solaredge-proxy .
```

run the container

```bash
docker run --name solaredge-proxy -e "PORT=8080" -p 8080:8080 --restart unless-stopped -d solaredge-proxy
```

stop the container

```bash
docker stop solaredge-proxy
```
