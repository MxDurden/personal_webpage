---
title: "Understanding Linux File Permissions"
description: "A quick primer on Linux file permissions and how to manage them effectively for secure system administration."
pubDate: 2024-03-15T10:00:00Z
category: "tech"
tags: ["linux", "security", "fundamentals"]
draft: false
---

## The Basics

Linux file permissions are the foundation of system security. Every file and directory has three permission sets: owner, group, and others.

When you run `ls -l`, you see something like this:

```bash
-rw-r--r-- 1 user group 1234 Mar 15 10:00 file.txt
drwxr-xr-x 2 user group 4096 Mar 15 10:00 directory
```

## Permission Types

The permission string breaks down into:

- **r** (read) - View file contents or list directory
- **w** (write) - Modify file or add/remove files in directory
- **x** (execute) - Run file as program or enter directory

## Numeric Notation

Permissions can be set numerically:

- Read = 4
- Write = 2
- Execute = 1

So `chmod 755 script.sh` sets:
- Owner: rwx (7 = 4+2+1)
- Group: r-x (5 = 4+1)
- Others: r-x (5 = 4+1)

## Common Patterns

```bash
# Make script executable
chmod +x script.sh

# Secure private key
chmod 600 ~/.ssh/id_rsa

# Web directory permissions
chmod 755 /var/www/html
```

## Best Practices

Always follow the principle of least privilege. Files should have the minimum permissions necessary for their function. Never use `777` unless you absolutely understand why you need it.
