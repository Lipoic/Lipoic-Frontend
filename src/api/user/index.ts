import http from '@/http';
import { UserInfo } from './type';
import { TokenType, Code } from '../type';

/** get user info
 * @url https://api-docs.lipoic.org/router/apis/user/api/fn.user_info.html
 */
export const getUserInfo = async () =>
  (await http.get<UserInfo>('/user/info')).data;

/** user sign up
 * @url https://api-docs.lipoic.org/router/apis/user/api/fn.sign_up.html
 */
export const signUpUser = async () =>
  (await http.post<Code.OK>('/user/sign-up')).data;

/** login user
 * @url https://api-docs.lipoic.org/router/apis/user/api/fn.login.html
 */
export const loginUser = async () =>
  (await http.post<TokenType>('/user/login')).data;
