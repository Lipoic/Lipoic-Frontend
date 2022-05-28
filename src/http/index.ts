import axios, { AxiosRequestConfig } from 'axios';

import configs from '../configs/http';

export type urlType = `/${string}`;

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

  config.retry = configs.retry;
  config.retryDelay = configs.retryDelay;

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
    // TODO add notify vue component
    config.notify;
  },
  async (error) => {
    error;
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
