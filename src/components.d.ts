import 'vue';
import 'axios';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SvgIcon: typeof import('./components/SvgIcon.vue')['default'];
  }
}

declare module 'axios' {
  interface AxiosRequestConfig {
    /** retry | 重試次數 */
    retry?: number;
    /** retry | 重試延遲 */
    retryDelay?: number;
    /** notify on success | 成功通知 */
    notify?: boolean;
    /** notify on error | 錯誤通知 */
    notifyError?: boolean;
  }
}

export {};
