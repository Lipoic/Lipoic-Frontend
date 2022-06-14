import httpClient, { useToken } from '@/http';
import { UserInfo, UserMode } from './type';
import { Code } from '@/api/code';
import { AuthToken } from '@/api/authentication/type';

/** get user info
 * @url https://api-docs.lipoic.org/router/apis/user/api/fn.user_info.html
 */
export const getUserInfo = async () =>
  (await httpClient.get<UserInfo>('/user/info', void 0, useToken)).data;

/** sign up for an account
 * @url https://api-docs.lipoic.org/router/apis/user/api/fn.sign_up.html
 */
export const signUp = async (
  username: string,
  email: string,
  password: string,
  modes: UserMode[]
) => {
  const data = {
    username,
    email,
    password,
    modes: JSON.stringify(modes),
  };

  return (await httpClient.postForm<Code.OK>('/user/sign-up', data)).data;
};

/** login account with username and password
 * @url https://api-docs.lipoic.org/router/apis/user/api/fn.login.html
 */
export const login = async (email: string, password: string) =>
  (await httpClient.postForm<AuthToken>('/user/login', { email, password }))
    .data?.token;
