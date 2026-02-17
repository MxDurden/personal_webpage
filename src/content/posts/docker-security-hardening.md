---
title: "Docker Container Security Hardening"
description: "Essential security practices for running containers in production environments."
pubDate: 2024-02-20T14:30:00Z
category: "tech"
tags: ["docker", "security", "containers", "devops"]
draft: false
featured: true
---

## Why Container Security Matters

Containers share the host kernel, making security critical. A compromised container can potentially affect the entire host system.

## Run as Non-Root User

Always specify a non-root user in your Dockerfile:

```dockerfile
FROM alpine:3.19
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
```

## Limit Container Capabilities

Drop unnecessary capabilities:

```bash
docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE myapp
```

## Use Read-Only Filesystems

```bash
docker run --read-only --tmpfs /tmp myapp
```

## Scan Images Regularly

Use tools like Trivy or Snyk to scan for vulnerabilities:

```bash
trivy image myapp:latest
```

## Network Isolation

Create dedicated networks for different application tiers:

```bash
docker network create --driver bridge app-tier
docker network create --driver bridge db-tier
```

## Resource Limits

Always set memory and CPU limits:

```bash
docker run -m 512m --cpus=".5" myapp
```

## Conclusion

Container security is not optional. These basic hardening steps significantly reduce your attack surface.
