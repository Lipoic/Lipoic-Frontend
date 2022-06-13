/** UserInfo
 * @url https://api-docs.lipoic.org/router/data/user/struct.UserInfo.html
 */
export interface UserInfo {
  username: string;
  email: string;
  modes: UserMode[];
  connects: ConnectAccount[];
}

/** ConnectAccount
 * @url https://github.com/Lipoic/Lipoic-Server/blob/main/src/database/src/model/auth/user.rs#L24-L28
 */
export interface ConnectAccount {
  account_type: ConnectType;
  name: string;
  email: string;
}

/** ConnectType
 * @url https://github.com/Lipoic/Lipoic-Server/blob/main/src/database/src/model/auth/user.rs#L16-L21
 */
export enum ConnectType {
  Google,
  Facebook,
  // TaiwanCloudEducation,
}

/** UserMode
 * @url https://github.com/Lipoic/Lipoic-Server/blob/main/src/database/src/model/auth/user.rs#L30-L35
 */
export enum UserMode {
  Student,
  Teacher,
  Parents,
}

/** User Token
 * @url https://api-docs.lipoic.org/router/data/auth_data/struct.Token.html
 */
export interface UserToken {
  token: string;
}
