const { describe, it } = require("node:test");
const assert = require("assert");
const fs = require("fs");
const path = require("path");

describe("@sebastienrousseau/docker-config Integration Tests", () => {
  it("should provide consistent exports across entrypoints", async () => {
    const cjs = require("../index.cjs");
    const root = require("../index.js");
    const esm = await import("../index.mjs");

    assert.deepStrictEqual(cjs, root);
    assert.deepStrictEqual(cjs, esm.default);
  });

  it("should comply with the repository layout standard", () => {
    const root = path.join(__dirname, "..");
    const requiredFiles = [
      "AGENTS.md", "CHANGELOG.md", "CITATION.cff", "DEVELOPMENT.md",
      "GOVERNANCE.md", "KEYS.asc", "LICENSE", "LICENSE-APACHE", "LICENSE-MIT",
      "Makefile", "README.md", "SECURITY.md", "SUPPORT.md", "docs/ARCHITECTURE.md"
    ];
    for (const file of requiredFiles) {
      assert(fs.existsSync(path.join(root, file)), `Missing required file: ${file}`);
    }
  });

  it("should support JSON serialization and cloning", () => {
    const cjs = require("../index.cjs");
    const serialized = JSON.stringify(cjs);
    assert(serialized.length > 0);
    const parsed = JSON.parse(serialized);
    assert.deepStrictEqual(parsed, cjs);
  });
});
