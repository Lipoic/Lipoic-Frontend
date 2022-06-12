import { AxiosRequestConfig } from 'axios';

export interface HttpConfig extends AxiosRequestConfig {
  relink: boolean;
  retry: number;

  token?: string;
}

export default HttpConfig;
