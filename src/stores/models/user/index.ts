import { defineStore } from 'pinia';
import { UserInfo } from '@/api/user/type';

import { getUserInfo } from '@/api/user';

export interface UserStore {
  token: string | null;
  info: UserInfo | null;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserStore => {
    const info = localStorage.getItem('info');

    return {
      token: localStorage.getItem('token'),
      info: info ? JSON.parse(info) : null,
    };
  },
  actions: {
    setUserInfo(userInfo: UserInfo): void {
      this.info = userInfo;
      localStorage.setItem('user_info', JSON.stringify(userInfo));
    },
    setToken(token: string): void {
      this.token = token;
      localStorage.setItem('token', token);
    },
    async getUserInfo() {
      const info = await getUserInfo();
      if (info) {
        this.setUserInfo(info);
      }
    },
  },
});
