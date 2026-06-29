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

**[Custom Programming Language & Virtual Machine](https://github.com/schallten/elin)**
  ~ Python, C++, Virtual Machine
  ~ 01/2026 - Present

- Architected a complete compiler toolchain (3,190 LOC) featuring a lexer, recursive-descent parser, static type system with inference, and code generator with constant folding and peephole optimization
- Engineered a stack-based virtual machine in C++ (1,258 LOC) executing 43+ opcodes with call stack frames and a multi-segment bump allocator with handle-based indirection
- Implemented region-based memory management for automatic resource cleanup without garbage collection, including runtime detection of use-after-free and out-of-bounds access violations

**[AI-Powered Code Editor & IDE](https://rta-three.vercel.app)**
  ~ Python, Go, C/Lua, JavaScript, React Native
  ~ 04/2026 - Present

- Developed a 22-tool AI coding agent with custom semantic search engine, LSP integration for real-time diagnostics, and AST-aware code refactoring capabilities
- Built a multi-provider AI proxy with automatic failover across 6 providers, streaming responses, and tier-based rate limiting with per-user locks preventing race conditions
- Pioneered context compaction enabling unlimited session length beyond context window limits with tree-structured session persistence
- Shipped cross-platform ecosystem: CLI agent, desktop IDE (C/Lua), mobile app (React Native), and web dashboard (Preact)

**[Container Orchestration Platform](https://github.com/schallten/container-provider)**
  ~ Go, Docker, WebSockets, Cloudflared
  ~ 04/2026 - 05/2026

- Engineered a multi-tenant container platform in Go provisioning isolated Linux environments in ~400ms via WebSocket-based terminal sessions with dynamic resize
- Integrated Cloudflare tunnel provisioning inside containers using HTTP2 protocol with real-time URL streaming to connected clients
- Architected a lock-free concurrent scheduler achieving 20 simultaneous containers in ~1.6s with background goroutine-based cleanup and billing
- Implemented defense-in-depth security: cgroup resource limits, no-new-privileges, non-root sessions, and iptables-based metadata endpoint blocking

**[Embedded Shell for Microcontrollers](https://github.com/schallten/system_operating)**
  ~ C++, ESP8266, LittleFS
  ~ 09/2025 - Present

- Developed a complete embedded OS runtime on ESP8266 (80KB RAM) with interactive shell, 12 UNIX-like filesystem commands, and first-boot auto-provisioning
- Designed a custom declarative configuration system with full parser, in-memory storage, and persistent write-back — inspired by NixOS's `configuration.nix`
- Implemented a dual-output abstraction layer routing all output to Serial or OLED display with paginated text viewer and console-like scrolling

**[Distributed Version Control System](https://github.com/schallten/pmg)**
  ~ Go, FastAPI, React
  ~ 10/2025 - 12/2025

- Built a custom Version Control System CLI from scratch in Go to track and version local repository directories
- Developed an indexing engine utilizing SHA256 mapping to track delta changes, similar to Git's object database
- Created a React web dashboard connected via FastAPI to visually map commit histories and branch topologies


## Skills

**Programming Languages:** <span class="iconify" data-icon="vscode-icons:file-type-go"></span> Go, <span class="iconify" data-icon="vscode-icons:file-type-python"></span> Python, <span class="iconify" data-icon="vscode-icons:file-type-cpp2"></span> C++, <span class="iconify" data-icon="vscode-icons:file-type-js-official"></span> JavaScript , <span class="iconify" data-icon="vscode-icons:file-type-c"></span> C , <span class="iconify" data-icon="devicon:odin"></span> Odin

**Tools and Frameworks:** Docker, FastAPI, React, Electron, WebSockets, Linux (PTY, cgroups), Cloudflared, LittleFS, Git

**Languages:** English (Proficient) , Hindi (Native)