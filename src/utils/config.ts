import { AxiosRequestConfig } from 'axios';

export interface Config {
  /**
   * Request and http configuration.
   */
  http: AxiosRequestConfig;
}

const defaultHttpConfig: AxiosRequestConfig = {
  headers: {
    'content-type': 'application/json;charset=utf-8',
  },
  reconnect: true,
  retry: 2,
  baseURL: 'https://api.lipoic.org',
};

export const globalConfig: Config = {
  http: defaultHttpConfig,
};

export default globalConfig;
