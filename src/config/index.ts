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
  timeout: 5000,
  notifyError: false,
  baseURL: 'https://api.lipoic.org',
  messageDuration: 4000,
};

export const globalConfig: Config = {
  http: defaultHttpConfig,
};

export default globalConfig;
