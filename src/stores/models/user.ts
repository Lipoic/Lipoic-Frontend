import { defineStore } from 'pinia';
import { AuthUser } from '@/api/user/type';

import { getCurrentUserInfo } from '@/api/user';

export interface UserStore {
  token?: string | null;
  info: AuthUser | null;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserStore => ({
    token: null,
    info: null,
  }),
  actions: {
    init() {
      const info = localStorage.getItem('user_info');

      this.token = localStorage.getItem('token');
      try {
        this.info = info ? <AuthUser>JSON.parse(info) : null;
      } catch (error) {
        this.info = null;
      }
    },
    isLoggedIn(): boolean {
      return !!(this.info && this.token);
    },
    async setUserInfo(): Promise<void> {
      const info = await getCurrentUserInfo();
      if (info) {
        this.info = info;
        localStorage.setItem('user_info', JSON.stringify(info));
      }
    },
    setToken(token: string): void {
      this.token = token;
      localStorage.setItem('token', token);
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user_info');
      this.init();
      // TODO use useRouter().push('/');
      location.href = '/';
    },
  },
});
