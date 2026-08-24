---
name: Abhinav
header:

  - text: <span class="iconify" data-icon="tabler:mail"></span> 1899abhinav@gmail.com
    link: mailto:1899abhinav@gmail.com
  - text: <span class="iconify" data-icon="tabler:brand-github"></span> schallten
    link: https://github.com/schallten
  - text: <span class="iconify" data-icon="charm:person"></span> website
    link: https://schallten.github.io
---

## Education

**Kalinga Institute Of Industrial Technology**
  ~ Bhubaneshwar, OD  , IN

BTech in Computer Science and System Engineering
  ~ 08/2024 - 06/2028


## Projects

**[Mail Server](https://github.com/schallten/tinyMail)**
  ~ Go
  ~ 08/2026

- Implemented SMTP (RFC 5321) and POP3 (RFC 1939) servers from the specifications, interoperable with standard clients like Thunderbird, with zero dependencies
- Persisted messages as RFC 822 `.eml` files using atomic writes (tmp → fsync → rename), preventing partial commits on crash
- Built per-user mailbox isolation with credential-backed authentication and graceful shutdown

**[Container Orchestration Platform](https://github.com/schallten/container-provider)**
  ~ Go, Docker, WebSockets, Cloudflared
  ~ 04/2026 - 05/2026

- Engineered a multi-tenant container platform in Go provisioning isolated Linux environments in ~400ms via WebSocket terminal sessions with in-container Cloudflare tunnels
- Architected a lock-free concurrent scheduler launching 20 simultaneous containers in ~1.6s with goroutine-based cleanup and billing
- Hardened with defense-in-depth: cgroup resource limits, no-new-privileges, non-root sessions, and iptables metadata endpoint blocking

**[Distributed Version Control System](https://github.com/schallten/pmg)**
  ~ Go, FastAPI, React
  ~ 10/2025 - 12/2025

- Built a Version Control System CLI from scratch in Go, with SHA256 content-addressed storage tracking delta changes similar to Git's object database
- Added a React + FastAPI dashboard visualizing commit histories and branch topologies


## Skills

**Programming Languages:** <span class="iconify" data-icon="vscode-icons:file-type-go"></span> Go, <span class="iconify" data-icon="vscode-icons:file-type-python"></span> Python, <span class="iconify" data-icon="vscode-icons:file-type-cpp2"></span> C++, <span class="iconify" data-icon="vscode-icons:file-type-js-official"></span> JavaScript , <span class="iconify" data-icon="vscode-icons:file-type-c"></span> C , <span class="iconify" data-icon="devicon:odin"></span> Odin

**Tools and Frameworks:** Docker, FastAPI, React, WebSockets, Linux (PTY, cgroups), Cloudflared, Git

**Languages:** English (Proficient) , Hindi (Native)