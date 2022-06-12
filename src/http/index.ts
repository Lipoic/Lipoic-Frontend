import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { delay } from '@/utils';
import HttpConfig from '@/config/http';
import globalConfig from '@/config';

export interface resultErrorData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  message: string;
  config: AxiosRequestConfig;
}

export type PathType = `/${string}`;

export default class HttpClient {
  public axios: AxiosInstance;
  private config: Partial<HttpConfig>;

  constructor(config: Partial<HttpConfig> = globalConfig.http) {
    this.axios = axios.create(config);
    this.config = config;

    this.axios.interceptors.request.use(this.requestHandler.bind(this));

    this.axios.interceptors.response.use(
      this.responseHandler.bind(this),
      this.responseErrorHandler.bind(this)
    );
  }

  async post(
    path: PathType,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return await this.axios.post(path, data, config).catch(Promise.reject);
  }

  async get(
    path: PathType,
    params?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return await this.axios
      .get(path, { params, ...config })
      .catch(Promise.reject);
  }

  async uploadFile(
    path: PathType,
    file: File,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const param = new FormData();
    param.append('file', file, file.name);
    return await this.axios
      .post(path, param, {
        ...config,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .catch(Promise.reject);
  }

  private requestHandler(_config: AxiosRequestConfig<unknown>) {
    _config.headers = {
      ..._config.headers,
      ...this.config.headers,
    };

    _config.retry ??= this.config.retry;
    _config.retryDelay ??= this.config.timeout;

    if (this.config.token) {
      // TODO add token from stores.user.token & stores.user.type
      _config.headers.Authorization = `Bearer ${this.config.token}`;
    }

    return this.config;
  }

  private responseHandler(response: AxiosResponse) {
    // TODO: success and error callback
  }

  private async responseErrorHandler(err: {
    response: resultErrorData & { status: number };
  }) {
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
      _config.__retryCount >= (this.config.retry || globalConfig.http.retry)
    )
      return Promise.reject(rejectData);

    _config.__retryCount += 1;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return delay(this.config.timeout || globalConfig.http.timeout!).then(() =>
      this.axios(_config)
    );
  }
}

declare module 'axios' {
  interface AxiosRequestConfig {
    relink?: boolean;
    retry?: number;
    retryDelay?: number;
    __retryCount?: number;
  }
}
