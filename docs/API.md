# `@sebastienrousseau/docker-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/docker-config`.

---

## Description

Hardened multi-stage Docker build templates for production Node.js microservices.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/docker-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Multi-Stage Build Pipeline

- **Description**: Separate builder and minimal alpine runtime stages
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Least-Privilege Security

- **Description**: Drops root privileges to dedicated unprivileged node user
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Layer Caching Optimization

- **Description**: Separates dependency manifests from application source
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Healthcheck Integration

- **Description**: Built-in container healthcheck probe
- **Scope**: Production & Development
- **Status**: Stable & Active

### 5. Production Node Environment

- **Description**: Explicit NODE_ENV=production injection
- **Scope**: Production & Development
- **Status**: Stable & Active

