import axios, { AxiosRequestConfig } from 'axios';

import configs, { statusCodes } from '@/configs/http';
import { delay } from '@/utils';

export type urlType = `/${string}`;
export interface resultErrorData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  message: string;
  /** result config | 請求設定 */
  config: AxiosRequestConfig;
}

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
  (rss) => {
    const { config } = rss;
    // TODO add type
    const { message, code } = rss.data;
    // TODO add notify vue component
    if (Object.values(configs.SuccessCodes).includes(code) && config.notify) {
      // TODO add success store message
    } else if (config.notifyError) {
      // TODO add error store message
      const rejectData: resultErrorData = { data: rss.data, message, config };
      return Promise.reject(rejectData);
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

export const getUrl = (url: urlType) => `${configs.baseUrl}${url}`;

export const post = async (
  path: urlType,
  params?: unknown,
  config?: AxiosRequestConfig
) => {
  return await http.post(getUrl(path), params, config).catch(Promise.reject);
};

export const get = async (
  path: urlType,
  params?: unknown,
  config?: AxiosRequestConfig
) => {
  return await http
    .get(getUrl(path), { params, ...config })
    .catch(Promise.reject);
};

export const uploadFile = async (
  path: urlType,
  file: File,
  config?: AxiosRequestConfig
) => {
  const param = new FormData();
  param.append('file', file, file.name);
  return await http
    .post(getUrl(path), param, {
      ...config,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .catch(Promise.reject);
};

declare module 'axios' {
  interface AxiosRequestConfig {
    /** relink | 是否開啟重連 */
    relink?: boolean;
    /** retry | 重試次數 */
    retry?: number;
    /** retry delay | 重試延遲 */
    retryDelay?: number;
    /** notify on success | 成功通知 */
    notify?: boolean;
    /** notify on error | 錯誤通知 */
    notifyError?: boolean;
    /** retry count | 重試次數 */
    __retryCount?: number;
  }
}
