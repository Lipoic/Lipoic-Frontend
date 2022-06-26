import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import { useUserStore } from '@/stores/models/user';
import globalConfig from '@/utils/config';
import { deepAssign } from '@/utils/Object';
import { Code } from '@/api/code';

export class HttpClient {
  public readonly axios: AxiosInstance;
  private readonly config: Partial<AxiosRequestConfig>;

  constructor(config: Partial<AxiosRequestConfig> = globalConfig.http) {
    this.config = <AxiosRequestConfig>deepAssign(globalConfig.http, config);
    this.axios = axios.create(this.config);

    this.axios.interceptors.request.use(this.requestHandler.bind(this));
    this.axios.interceptors.response.use(
      this.responseHandler.bind(this),
      this.responseErrorHandler.bind(this)
    );
  }

  public async post<T, G = Response<T>>(
    path: PathType,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<G> {
    return this.getRequestData(this.axios.post(path, data, config));
  }

  public async postForm<T, G = Response<T>>(
    path: PathType,
    data?: PostFormType,
    config?: AxiosRequestConfig
  ): Promise<G> {
    const formBody = new FormData();

    for (const [key, value] of Object.entries(data || {})) {
      if (value instanceof Blob || typeof value === 'string') {
        formBody.append(key, value);
      } else formBody.append(key, value.value, value.fileName);
    }

    return this.post(
      path,
      formBody,
      <AxiosRequestConfig>deepAssign({
        headers: { 'Content-Type': 'multipart/form-data' },
        config,
      })
    );
  }

  public async get<T, G = Response<T>>(
    path: PathType,
    params?: unknown,
    config?: AxiosRequestConfig
  ): Promise<G> {
    return this.getRequestData(this.axios.get(path, { params, ...config }));
  }

  public async patch<T, G = Response<T>>(
    path: PathType,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<G> {
    return this.getRequestData(this.axios.patch(path, data, config));
  }

  public async delete<T, G = Response<T>>(
    path: PathType,
    config?: AxiosRequestConfig
  ): Promise<G> {
    return this.getRequestData(this.axios.delete(path, config));
  }

  private async getRequestData<T>(
    response: Promise<AxiosResponse>
  ): Promise<T> {
    return (await response).data;
  }

  private requestHandler(config: AxiosRequestConfig) {
    config.headers = {
      ...config.headers,
      ...this.config.headers,
    };

    const store = useUserStore();
    const token = store.token || config.token || this.config.token;
    if (config.authentication && token) {
      config.token = token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }

  private responseHandler(response: AxiosResponse<unknown, unknown>) {
    // TODO: success callback

    return response;
  }

  private async responseErrorHandler(error: AxiosError<Response, unknown>) {
    const { config } = error;

    if (error.response) {
      const store = useUserStore();
      // if the token is invalid, logout
      if (error.response.status === 401 && store.isLoggedIn()) {
        store.logout();
        return;
      }

      const errorData: ResponseErrorData = {
        ...error.response.data,
        config,
      };

      return Promise.reject(errorData);
    }

    config.__retryCount ||= 0;

    if (
      config.reconnect === false ||
      config.__retryCount >= (config.retry ?? (globalConfig.http.retry || 0))
    ) {
      // TODO: error callback

      return Promise.reject(error);
    }
    config.__retryCount += 1;

    return await this.axios(config);
  }
}

declare module 'axios' {
  interface AxiosRequestConfig {
    /** retry count don'ts touch
     * @private
     */
    __retryCount?: number;

    reconnect?: boolean;
    retry?: number;
    authentication?: boolean;

    token?: string;
  }
}

/** API Response
 * @url https://github.com/Lipoic/Lipoic-Server/blob/7b678356a6079a7255cd42cd708780e9093d056c/src/router/src/data/response.rs#L8
 */
export interface Response<D = unknown> {
  code: Code;
  message: string;
  data?: D;
}

export interface ResponseErrorData<T = unknown> extends Response<T> {
  config: AxiosRequestConfig;
}

export type PathType = `/${string}`;
export type PostFormType = Record<
  string,
  string | Blob | { value: string | Blob; fileName?: string }
>;

const httpClient = new HttpClient();
export default httpClient;
