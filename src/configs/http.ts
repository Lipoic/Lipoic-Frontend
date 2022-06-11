export const HttpConfig = {
  /** request headers | 請求標頭 */
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
  /** relink | 是否開啟重連 */
  relink: true,
  /** max retry | 最大重試數 */
  retry: 2,
  /** retry delay | 重試延遲 */
  retryDelay: 5e3,
  /** notify on success | 成功通知 */
  notify: false,
  /** notify on error | 錯誤通知 */
  notifyError: false,
  /** base api url | API 基本網址 */
  baseUrl: 'https://api.lipoic.org',
  /** allow add token url | 允許加入 Token 的 URL
   * @type {(string|RegExp)[]}
   */
  allowTokenUrl: [/^\//],
  /** message duration such as errors or warnings | 消息持續時間，例如錯誤或警告 (ms) */
  messageDuration: 4e3,
};

export default HttpConfig;
