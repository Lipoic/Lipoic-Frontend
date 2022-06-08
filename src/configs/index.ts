import httpConfig from './http';

export interface configsType {
  /** There are settings for requests */
  http: typeof httpConfig;
  /** send debug to server */
  debugServer: boolean;
}

export const configs: configsType = {
  http: httpConfig,
  debugServer: !import.meta.env.DEV,
};

export default configs;
