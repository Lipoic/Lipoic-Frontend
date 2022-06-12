import { AxiosRequestConfig } from 'axios';

export interface HttpConfig extends AxiosRequestConfig {
  reconnect: boolean;
  retry: number;

  token?: string;
}

export default HttpConfig;
