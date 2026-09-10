// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced usage: retarget the base image.
 *
 * The package exports the Dockerfile as a string, so pinning a different base
 * is a string substitution. Note that the shipped image is digest-pinned, so
 * replacing the tag alone would leave a stale digest behind — the digest has to
 * go with it, which is why this example strips it explicitly.
 */

"use strict";

const dockerfile = require("../index.cjs");

const CURRENT = /node:20-alpine@sha256:[a-f0-9]+/g;
const retargeted = dockerfile.replace(CURRENT, "node:22-alpine");

console.log("=== Advanced example: @sebastienrousseau/docker-config ===");
console.log(
  "  Original base images:",
  (dockerfile.match(CURRENT) || []).length,
);
console.log(
  "  Retargeted to node:22-alpine:",
  (retargeted.match(/node:22-alpine/g) || []).length,
);
console.log(
  "  Digest pins remaining:",
  (retargeted.match(/@sha256:/g) || []).length,
);
console.log("");
console.log("Retargeted Dockerfile:");
console.log(retargeted);
console.log("Re-pin the new base by digest before using this in anger:");
console.log("  docker buildx imagetools inspect node:22-alpine");
