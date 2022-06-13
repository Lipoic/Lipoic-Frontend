/** JWT token
 * @url https://api-docs.lipoic.org/router/data/auth_data/struct.Token.html
 */
export type TokenType = `${string}.${string}.${string}`;

/** code data
 * @url https://api-docs.lipoic.org/router/data/code/struct.Code.html#
 * @url https://github.com/Lipoic/Lipoic-Server/blob/main/src/router/src/data/code.rs#L27-L39
 */
export enum Code {
  /** Ok. */
  OK = 200,
  /** Resource not found. */
  NOT_FOUND = 404,
  /** OAuth auth code error. */
  OAUTH_CODE_ERROR = 1,
  /** OAuth get user info error. */
  OAUTH_GET_USER_INFO_ERROR = 2,
  /** User not found error. */
  LOGIN_USER_NOT_FOUND_ERROR = 3,
  /** Input password error. */
  LOGIN_PASSWORD_ERROR = 4,
  /** This email is already registered */
  SIGN_UP_EMAIL_ALREADY_REGISTERED = 5,
  /** This code is invalid. */
  VERIFY_EMAIL_ERROR = 6,
  /** This token is invalid. */
  AUTH_ERROR = 7,
}
