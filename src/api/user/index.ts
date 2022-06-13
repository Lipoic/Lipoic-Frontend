import httpClient from '@/http';
import { UserInfo, UserToken } from './type';
import { Code } from '../code';

/** get user info
 * @url https://api-docs.lipoic.org/router/apis/user/api/fn.user_info.html
 */
export const getUserInfo = async () =>
  (await httpClient.get<UserInfo>('/user/info')).data;

/** user sign up
 * @url https://api-docs.lipoic.org/router/apis/user/api/fn.sign_up.html
 */
export const signUpUser = async () =>
  (await httpClient.post<Code.OK>('/user/sign-up')).data;

/** login user
 * @url https://api-docs.lipoic.org/router/apis/user/api/fn.login.html
 */
export const loginUser = async () =>
  (await httpClient.post<UserToken>('/user/login')).data;
