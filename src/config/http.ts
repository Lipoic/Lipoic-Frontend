import { AxiosRequestConfig } from 'axios';

export interface HttpConfig extends AxiosRequestConfig {
  headers: { [key: string]: string };
  relink: boolean;
  retry: number;
  /** notify on error */
  notifyError: boolean;
  /** message duration of errors or warnings */
  messageDuration: number;
  token?: string;

  __retryCount?: number;
}

export default HttpConfig;
