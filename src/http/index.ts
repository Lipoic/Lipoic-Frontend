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

/**
 * The http client for api requests.
 */
export class HttpClient {
  private readonly axios: AxiosInstance;
  private readonly config: Partial<AxiosRequestConfig>;

  constructor(config: Partial<AxiosRequestConfig> = globalConfig.http) {
    this.config = <AxiosRequestConfig>deepAssign(globalConfig.http, config);
    this.axios = axios.create(this.config);

    this.axios.interceptors.request.use(this.requestHandler.bind(this));
    this.axios.interceptors.response.use(
      HttpClient.responseHandler.bind(this),
      this.responseErrorHandler.bind(this)
    );
  }

  /**
   * Send a POST request with data
   * @param path the request path
   * @param data the request data
   * @param config the request config
   * @returns the response body
   */
  public async post<T, R = APIResponseBody<T>>(
    path: PathType,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return HttpClient.getRequestData(this.axios.post(path, data, config));
  }

  public async get<T, R = APIResponseBody<T>>(
    path: PathType,
    params?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return HttpClient.getRequestData(
      this.axios.get(path, { params, ...config })
    );
  }

  public async patch<T, R = APIResponseBody<T>>(
    path: PathType,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return HttpClient.getRequestData(this.axios.patch(path, data, config));
  }

  public async delete<T, R = APIResponseBody<T>>(
    path: PathType,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return HttpClient.getRequestData(this.axios.delete(path, config));
  }

  private static async getRequestData<T>(
    response: Promise<AxiosResponse>
  ): Promise<T> {
    return (await response).data;
  }

  private requestHandler(
    _config: AxiosRequestConfig
  ): AxiosRequestConfig<unknown> {
    const config = _config;

    config.headers = {
      ...config.headers,
      ...this.config.headers,
    };

    const store = useUserStore();
    const token = store.token || config.token || this.config.token;
    if (config.authentication && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }

  private static responseHandler(response: AxiosResponse<unknown, unknown>) {
    // TODO: success callback

    return response;
  }

  private async responseErrorHandler(
    error: AxiosError<APIResponseBody, unknown>
  ): Promise<AxiosResponse<APIResponseBody, unknown> | null> {
    const { config } = error;

    if (error.response) {
      const store = useUserStore();
      // if the token is invalid, logout
      if (error.response.status === 401 && store.isLoggedIn()) {
        store.logout();
        return null;
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

    return this.axios(config);
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

/**
 * The response body of the API response.
 * @see https://github.com/Lipoic/Lipoic-Backend/blob/develop/src/router/util/response.ts
 */
export interface APIResponseBody<T = unknown> {
  code: Code;
  data?: T;
}

export interface ResponseErrorData<T = unknown> extends APIResponseBody<T> {
  config: AxiosRequestConfig;
}

type PathType = `/${string}`;

const httpClient = new HttpClient();
export default httpClient;
