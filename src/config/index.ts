import HttpConfig from '@/config/http';

export interface Config {
  /** Request and http configuration */
  http: HttpConfig;
}

const defaultHttpConfig: HttpConfig = {
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
  relink: true,
  retry: 2,
  timeout: 3000,
  baseURL: 'https://api.lipoic.org',
};

export const globalConfig: Config = {
  http: defaultHttpConfig,
};

export default globalConfig;
