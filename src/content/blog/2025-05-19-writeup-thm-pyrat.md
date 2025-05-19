---
title: "Write-Up: THM - Pyrat"
pubDate: "2025-05-19"
description: "Solving the 'Pyrat' challenge from TryHackMe using LFI, log poisoning, and privilege escalation."
tags: ["tryhackme", "writeup", "lfi", "log-poisoning", "reverse-shell", "linux", "ctf"]
author: "MrDurden"
---

> 💀 **Difficulty:** Medium  
> 🧠 **Category:** CTF / Linux  
> 🛠️ **Tools:** `curl`, `nc`, `python3`, `bash`, `gobuster`, `Burp`, `linpeas`

---

## 🧭 1. Enumeration

Ran a quick directory brute-force with gobuster:

```bash
gobuster dir -u http://10.10.x.x:8000 -w /usr/share/wordlists/dirb/common.txt
