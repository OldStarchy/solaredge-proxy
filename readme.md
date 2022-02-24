# README

Redirects all requests to <https://monitoringapi.solaredge.com>.

## Usage

Build the docker image

```bash
docker build --tag solaredge-proxy .
```

run the image

```bash
docker run -p 80:80 --restart unless-stopped -d solaredge-proxy
```
