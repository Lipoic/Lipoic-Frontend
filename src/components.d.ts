import 'vue';
import 'axios';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SvgIcon: typeof import('./components/SvgIcon.vue')['default'];
  }
}

declare module 'axios' {
  interface AxiosRequestConfig {
    /** relink | 是否開啟重連 */
    relink?: boolean;
    /** retry | 重試次數 */
    retry?: number;
    /** retry delay | 重試延遲 */
    retryDelay?: number;
    /** notify on success | 成功通知 */
    notify?: boolean;
    /** notify on error | 錯誤通知 */
    notifyError?: boolean;
    /** retry count | 重試次數 */
    __retryCount?: number;
  }
}

export {};
