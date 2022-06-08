import httpConfig from './http';

export interface configsType {
  /** There are settings for requests */
  http: typeof httpConfig;
}

export const configs: configsType = {
  http: httpConfig,
};

export default configs;
