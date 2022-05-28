import httpConfig from './http';

export interface configsType {
  /** There are settings for requests | 有關於請求的設定 */
  http: typeof httpConfig;
  /** send debug to server | 發送錯誤報告至伺服器 */
  debugServer: boolean;
}

export const configs: configsType = {
  http: httpConfig,
  debugServer: !import.meta.env.DEV,
};

export default configs;
