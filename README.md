<!-- SPDX-License-Identifier: Apache-2.0 OR MIT>

<p align="center">
  <img src="./docker-config.svg" alt="docker-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/docker-config</h1>

<p align="center">
  Shareable Docker container configuration providing multi-stage build and security rules.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/docker-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/docker-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/docker-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Fdocker-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/docker-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/docker-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/docker-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [Hardened Multi-Stage Container Rules](#hardened-multi-stage-container-rules) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/docker-config

# pnpm
pnpm add -D @sebastienrousseau/docker-config

# yarn
yarn add -D @sebastienrousseau/docker-config

# bun
bun add -d @sebastienrousseau/docker-config
```

---

## Quick Start

### In `package.json`

```json
{
  "docker": "@sebastienrousseau/docker-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/docker-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/docker-config";
export default config;
```

---

## Hardened Multi-Stage Container Rules

Configures non-root user execution, Alpine Node base, slim build layers, and `.dockerignore`.

### Before (Unstandardized)

```javascript
FROM node:latest
COPY . .
CMD node index.js
```

### After (@sebastienrousseau/docker-config Enforced)

```javascript
// Multi-stage hardened build via @sebastienrousseau/docker-config templates
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/docker-config.git
cd docker-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
