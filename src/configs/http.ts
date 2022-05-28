export enum SuccessCodes {
  /** success | 成功 */
  Success = 1,
}

export enum statusCodes {
  /** request succeeded | 請求成功 */
  OK = 200,
  /** Entity created successfully| 實體創建成功 */
  CREATED = 201,
  /** The request was successful but nothing was returned | 請求成功但沒有任何返回 */
  NO_CONTENT = 204,
  /** The entity was not modified (no action was taken) | 實體未修改（未採取任何操作） */
  NOT_MODIFIED = 304,
  /** The request is malformed, or the server does not understand it | 請求格式不正確，或者服務器不理解 */
  BAD_REQUEST = 400,
  /** Authorization header is missing or invalid | 授權標頭丟失或無效 */
  UNAUTHORIZED = 401,
  /** The passed authorization token does not have permission to use the resource | 傳遞的授權令牌沒有使用該資源的權限 */
  FORBIDDEN = 403,
  /** The resource at the specified location does not exist | 指定位置的資源不存在 */
  NOT_FOUND = 404,
  /** The HTTP method used is not valid for the specified location | 使用的 HTTP 方法對指定的位置無效 */
  METHOD_NOT_ALLOWED = 405,
  /** Rate limited | 受到速率限制 */
  TOO_MANY_REQUESTS = 429,
  /** Server error | 伺服器錯誤 */
  SERVER_ERROR = 500,
}

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
  /** return success codes | 操作成功 code 碼 */
  SuccessCodes,
};

export default httpConfig;
