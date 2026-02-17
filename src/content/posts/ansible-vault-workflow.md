---
title: "Ansible Vault Workflow for Secrets"
description: "Managing encrypted secrets in Ansible playbooks without losing your mind."
pubDate: 2024-01-28T11:15:00Z
category: "notes"
tags: ["ansible", "automation", "security"]
draft: false
---

## The Problem

Storing secrets in Git is bad. Remembering to encrypt/decrypt files manually is annoying.

## Solution: Vault Password File

Create `~/.ansible/vault_pass.sh`:

```bash
#!/bin/bash
security find-generic-password -a "$USER" -s ansible-vault -w
```

Add to `ansible.cfg`:

```ini
[defaults]
vault_password_file = ~/.ansible/vault_pass.sh
```

## Encrypting Variables

Encrypt specific strings inline:

```bash
ansible-vault encrypt_string 'secret_value' --name 'api_key'
```

Output in your vars file:

```yaml
api_key: !vault |
          $ANSIBLE_VAULT;1.1;AES256
          ...
```

## Best Practice

Keep encrypted vars in separate files like `group_vars/prod/vault.yml`. Makes rotation and auditing easier.

## Quick Commands

```bash
# Encrypt file
ansible-vault encrypt secrets.yml

# Edit encrypted file
ansible-vault edit secrets.yml

# View without editing
ansible-vault view secrets.yml
```

This workflow keeps secrets safe while maintaining productivity.
