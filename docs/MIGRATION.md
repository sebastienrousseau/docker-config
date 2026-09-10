# Migration Guide for `@sebastienrousseau/docker-config`

How to migrate from ad-hoc or legacy tooling configurations to `@sebastienrousseau/docker-config`.

## Upgrading from Previous Versions

1. Update package version:

   ```bash
   npm install --save-dev @sebastienrousseau/docker-config@latest
   ```

1. Verify module resolution with `npm test`.

## Migrating from Bespoke Configurations

Remove fragmented configuration files from the project root and reference `@sebastienrousseau/docker-config` in your `package.json` or config entrypoint.
