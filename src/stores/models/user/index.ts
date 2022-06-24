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
    const info = localStorage.getItem('user_info');

    return {
      token: localStorage.getItem('token'),
      info: info ? JSON.parse(info) : null,
    };
  },
  actions: {
    isLoggedIn(): boolean {
      return this.info !== null && this.token !== null;
    },
    async setUserInfo(): Promise<void> {
      const info = await getUserInfo();
      if (info) {
        this.info = info;
        localStorage.setItem('user_info', JSON.stringify(info));
      }
    },
    setToken(token: string): void {
      this.token = token;
      localStorage.setItem('token', token);
    },
  },
});
