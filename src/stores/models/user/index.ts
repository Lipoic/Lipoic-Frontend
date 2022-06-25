import { defineStore } from 'pinia';
import { UserInfo } from '@/api/user/type';

import { getUserInfo } from '@/api/user';

export interface UserStore {
  token?: string | null;
  info: UserInfo | null;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserStore => ({
    token: null,
    info: null,
  }),
  actions: {
    isLoggedIn(): boolean {
      return !!(this.info && this.token);
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
    userInit() {
      const info = localStorage.getItem('user_info');

      this.token = localStorage.getItem('token');
      this.info = info ? <UserInfo>JSON.parse(info) : null;
    },
  },
});
