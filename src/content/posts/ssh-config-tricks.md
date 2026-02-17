---
title: "SSH Config Tricks for Daily Operations"
description: "Quick SSH configuration tips that save time and improve security in day-to-day work."
pubDate: 2024-03-10T09:00:00Z
category: "notes"
tags: ["ssh", "productivity", "linux"]
draft: false
---

## Host Aliases

Stop typing full hostnames. Add this to `~/.ssh/config`:

```
Host prod
    HostName production.example.com
    User deploy
    Port 2222
    IdentityFile ~/.ssh/prod_key
```

Now just: `ssh prod`

## Jump Hosts

Access servers behind bastion:

```
Host internal
    HostName 10.0.1.50
    ProxyJump bastion.example.com
```

## Control Master for Speed

Reuse connections to avoid authentication overhead:

```
Host *
    ControlMaster auto
    ControlPath ~/.ssh/sockets/%r@%h:%p
    ControlPersist 10m
```

## Keep Connections Alive

Prevent timeouts:

```
Host *
    ServerAliveInterval 60
    ServerAliveCountMax 3
```

These small tweaks make SSH operations much smoother.
