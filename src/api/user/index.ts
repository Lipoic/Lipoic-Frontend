import http from '@/http';
import { UserInfo } from './type';

/** get user info
 * @url https://api-docs.lipoic.org/router/apis/user/api/fn.user_info.html
 */
export const getUserInfo = async () => await http.get<UserInfo>('/user/info');
