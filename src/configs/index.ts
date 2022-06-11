import HttpConfig from './http';

export interface Config {
  /** Request and http configuration */
  http: typeof HttpConfig;
}

export const config: Config = {
  http: HttpConfig,
};

export default config;
