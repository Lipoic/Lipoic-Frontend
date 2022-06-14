import { defineStore } from 'pinia';

import type { ConnectAccount, UserMode } from '@/api/user/type';
import { getUserInfo } from '@/api/user';

export interface UserStoreType {
  token?: string;

  username?: string;
  email?: string;
  modes?: UserMode[];
  connects?: ConnectAccount[];
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserStoreType => ({}),
  getters: {
    getToken(): string | undefined {
      return this.token;
    },
  },
  actions: {
    setUserInfo(userInfo: UserStoreType): void {
      this.username = userInfo.username;
      this.email = userInfo.email;
      this.modes = userInfo.modes;
      this.connects = userInfo.connects;
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
