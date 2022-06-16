import { defineStore } from 'pinia';
import { UserInfo } from '@/api/user/type';

import { getUserInfo } from '@/api/user';

export interface UserStore {
  token?: string;

  info?: UserInfo;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserStore => ({}),
  actions: {
    setUserInfo(userInfo: UserStore): void {
      this.info = userInfo.info;
      this.token = userInfo.token;
    },
    setToken(token: string): void {
      this.token = token;
    },
    async getUserInfo() {
      const userInfo = await getUserInfo();
      // this.setUserInfo();
    },
  },
});
