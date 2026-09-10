# `@sebastienrousseau/docker-config` Features & Capabilities

An exhaustive overview covering **100% of the features, rules, and capabilities** provided by `@sebastienrousseau/docker-config`.

---

## Feature Matrix

| Feature | Scope | Status | Guarantee |
| :--- | :--- | :--- | :--- |
| **Multi-Stage Build Pipeline** | Core | Active | Separate builder and minimal alpine runtime stages |
| **Least-Privilege Security** | Core | Active | Drops root privileges to dedicated unprivileged node user |
| **Layer Caching Optimization** | Core | Active | Separates dependency manifests from application source |
| **Healthcheck Integration** | Core | Active | Built-in container healthcheck probe |
| **Production Node Environment** | Core | Active | Explicit NODE_ENV=production injection |
| **Zero Dependencies** | Packaging | Active | 0 external npm runtime dependencies |
| **Dual Packaging** | Distribution | Active | Full CommonJS and ESM interoperability |
| **TypeScript Types** | Typings | Active | Bundled `index.d.ts` declarations |

---

## Feature Deep Dive

### 1. Multi-Stage Build Pipeline

Separate builder and minimal alpine runtime stages. Designed to guarantee deterministic behavior across all development and continuous integration environments.

### 2. Least-Privilege Security

Drops root privileges to dedicated unprivileged node user. Designed to guarantee deterministic behavior across all development and continuous integration environments.

### 3. Layer Caching Optimization

Separates dependency manifests from application source. Designed to guarantee deterministic behavior across all development and continuous integration environments.

### 4. Healthcheck Integration

Built-in container healthcheck probe. Designed to guarantee deterministic behavior across all development and continuous integration environments.

### 5. Production Node Environment

Explicit NODE_ENV=production injection. Designed to guarantee deterministic behavior across all development and continuous integration environments.

