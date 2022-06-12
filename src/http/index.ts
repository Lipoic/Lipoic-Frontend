import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { delay } from '@/utils';
import HttpConfig from '@/config/http';
import globalConfig from '@/config';

/// https://github.com/Lipoic/Lipoic-Server/blob/7b678356a6079a7255cd42cd708780e9093d056c/src/router/src/data/response.rs#L8
export interface Response<T> {
  code: number;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: T;
}

export interface ResponseErrorData<T> extends Response<T> {
  config: AxiosRequestConfig;
}

export type PathType = `/${string}`;

export class HttpClient {
  public readonly axios: AxiosInstance;
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

  async post<T, G = Response<T>>(
    path: PathType,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<G> {
    return this.getRequestData(this.axios.post(path, data, config));
  }

  async get<T, G = Response<T>>(
    path: PathType,
    params?: unknown,
    config?: AxiosRequestConfig
  ): Promise<G> {
    return this.getRequestData(this.axios.get(path, { params, ...config }));
  }

  async getRequestData(request: Promise<AxiosResponse>) {
    return await request.catch(() => ({ data: void 0 })).then((_) => _.data);
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

  private responseHandler<T>(response: AxiosResponse<Response<T>, unknown>) {
    this.responseErrorHandler(response);
    // TODO: success and error callback
  }

  private async responseErrorHandler<T>(
    response: AxiosResponse<Response<T>, unknown>
  ) {
    const { config, data, status } = response;
    config.__retryCount ||= 0;

    const errorData: ResponseErrorData<T> = {
      ...data,
      config,
    };

    if (
      status === 404 ||
      !config.relink ||
      config.__retryCount >= (this.config.retry || globalConfig.http.retry)
    )
      return Promise.reject(errorData);

    config.__retryCount += 1;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return delay(this.config.timeout || globalConfig.http.timeout!).then(() =>
      this.axios(config)
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

const client = new HttpClient();
export const http = client.axios;
export default client;
