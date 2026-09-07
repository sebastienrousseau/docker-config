/**
 * Advanced docker template interpolation example
 */
const template = require("../index.cjs");
const customDockerfile = template.replace("node:20-alpine", "node:22-alpine");
console.log("Interpolated Node.js version in Dockerfile template.");
