import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { delay } from '@/utils';
import HttpConfig from '@/configs/http';

export interface resultErrorData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  message: string;
  config: AxiosRequestConfig;
}

export type PathType = `/${string}`;

export const defaultHttpConfig: HttpConfig = {
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
  relink: true,
  retry: 2,
  timeout: 5000,
  notify: false,
  notifyError: false,
  baseURL: 'https://api.lipoic.org',
  messageDuration: 4000,
};

export default class HttpClient {
  private axios: AxiosInstance;

  constructor(config: Partial<HttpConfig> = defaultHttpConfig) {
    this.axios = axios.create(config);

    this.axios.interceptors.request.use((_config) => {
      _config.headers = {
        ..._config.headers,
        ...config.headers,
      };

      if (_config.retry === undefined) _config.retry = config.retry;
      if (_config.retryDelay === undefined) _config.retryDelay = config.timeout;

      if (config.token) {
        // TODO add token from stores.user.token & stores.user.type
        _config.headers.Authorization = `Bearer ${config.token}`;
      }

      return config;
    });

    this.axios.interceptors.response.use(
      (response) => {
        const { config } = response;
        // TODO add type
        const { message, code } = response.data;
        // TODO add notify vue component
        if (code === 200 && config.notify) {
          // TODO add success store message
        } else if (config.notifyError) {
          // TODO add error store message
          const result: resultErrorData = {
            data: response.data,
            message,
            config,
          };
          return Promise.reject(result);
        }
      },
      async (err: { response: resultErrorData & { status: number } }) => {
        const error = err.response;

        const { config: _config, status, data } = error;
        _config.__retryCount ||= 0;

        const msg =
          (_config.__retryCount === 0
            ? 'error occurred:'
            : `Reconnecting  ${_config.__retryCount} times:`) +
          JSON.stringify({
            baseUrl: _config.baseURL,
            path: _config.url,
            error: data ? data.message : error.message,
          });

        const rejectData: resultErrorData = {
          message: msg,
          config: _config,
          error,
        };

        if (
          status === 404 ||
          !_config.relink ||
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          _config.__retryCount >= (config.retry || defaultHttpConfig.retry!)
        )
          return Promise.reject(rejectData);

        _config.__retryCount += 1;

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return delay(config.timeout || defaultHttpConfig.timeout!).then(() =>
          this.axios(_config)
        );
      }
    );
  }

  async post(path: PathType, data?: unknown, config?: AxiosRequestConfig) {
    return await this.axios.post(path, data, config).catch(Promise.reject);
  }

  async get(path: PathType, params?: unknown, config?: AxiosRequestConfig) {
    return await this.axios
      .get(path, { params, ...config })
      .catch(Promise.reject);
  }

  async uploadFile(path: PathType, file: File, config?: AxiosRequestConfig) {
    const param = new FormData();
    param.append('file', file, file.name);
    return await this.axios
      .post(path, param, {
        ...config,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .catch(Promise.reject);
  }
}

declare module 'axios' {
  interface AxiosRequestConfig {
    relink?: boolean;
    retry?: number;
    retryDelay?: number;
    notify?: boolean;
    notifyError?: boolean;
    __retryCount?: number;
  }
}
