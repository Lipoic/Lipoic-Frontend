export const httpConfig = {
  /** request headers | 請求標頭 */
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
  /** retry delay | 重試延遲 (ms) */
  retryDelay: 6e3,
  /** max retry | 最大重試數 */
  retry: 2,
  /** base api url | API 基本網址 */
  baseUrl: 'https://api.lipoic.org',
  /** allow add token url | 允許加入 Token 的 URL
   * @type {(string|RegExp)[]}
   */
  allowTokenUrl: [/^\//],
  /** message duration such as errors or warnings | 消息持續時間，例如錯誤或警告 (ms) */
  messageDuration: 4e3,
};

export default httpConfig;
