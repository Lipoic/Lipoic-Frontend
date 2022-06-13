import httpClient from '@/http';
import { UserInfo, UserMode, UserToken } from './type';
import { Code } from '@/api/code';

/** get user info
 * @url https://api-docs.lipoic.org/router/apis/user/api/fn.user_info.html
 */
export const getUserInfo = async () =>
  (await httpClient.get<UserInfo>('/user/info')).data;

/** user sign up
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

/** login user
 * @url https://api-docs.lipoic.org/router/apis/user/api/fn.login.html
 */
export const login = async (email: string, password: string) => {
  const data = {
    email,
    password,
  };

  return (await httpClient.postForm<UserToken>('/user/login', data)).data
    ?.token;
};
