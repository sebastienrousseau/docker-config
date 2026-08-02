export interface DockerConfig {
  [key: string]: unknown;
}

declare const config: DockerConfig;
export default config;
