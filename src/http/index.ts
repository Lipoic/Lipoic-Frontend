import axios, { AxiosRequestConfig } from 'axios';

import configs from '@/configs/http';
import { delay } from '@/utils';

export interface resultErrorData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  message: string;
  config: AxiosRequestConfig;
}
export type PathType = `/${string}`;

const { CancelToken } = axios;
const source = CancelToken.source();

const http = axios.create({
  baseURL: configs.baseUrl,
  withCredentials: true,
  cancelToken: source.token,
  timeout: configs.retryDelay,
});

http.interceptors.request.use((config) => {
  const { url } = config;

  config.headers = {
    ...configs.headers,
    ...config.headers,
  };

  if (config.retry === void 0) config.retry = configs.retry;
  if (config.retryDelay === void 0) config.retryDelay = configs.retryDelay;
  if (config.retryDelay === void 0) config.retryDelay = configs.retryDelay;
  if (config.retryDelay === void 0) config.retryDelay = configs.retryDelay;
  if (config.retryDelay === void 0) config.retryDelay = configs.retryDelay;

  if (
    url &&
    configs.allowTokenUrl.some((item) => {
      return item instanceof RegExp ? item.test(url) : url.includes(item);
    })
  ) {
    // TODO add token from stores.user.token & stores.user.type
    config.headers.Authorization = `Bearer `;
  }

  return config;
});

http.interceptors.response.use(
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

    const { config, status, data } = error;
    config.__retryCount ||= 0;

    const msg =
      (config.__retryCount === 0
        ? 'error occurred:'
        : `Reconnecting  ${config.__retryCount} times:`) +
      JSON.stringify({
        baseUrl: config.baseURL,
        path: config.url,
        error: data ? data.message : error.message,
      });

    const rejectData: resultErrorData = { message: msg, config, error };

    if (
      status === 404 ||
      !config?.relink ||
      config.__retryCount >= configs.retry
    )
      return Promise.reject(rejectData);

    config.__retryCount += 1;

    return delay(configs.retryDelay).then(() => http(config));
  }
);

export const post = async (
  path: PathType,
  params?: unknown,
  config?: AxiosRequestConfig
) => {
  return await http.post(path, params, config).catch(Promise.reject);
};

export const get = async (
  path: PathType,
  params?: unknown,
  config?: AxiosRequestConfig
) => {
  return await http.get(path, { params, ...config }).catch(Promise.reject);
};

export const uploadFile = async (
  path: PathType,
  file: File,
  config?: AxiosRequestConfig
) => {
  const param = new FormData();
  param.append('file', file, file.name);
  return await http
    .post(path, param, {
      ...config,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .catch(Promise.reject);
};

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
