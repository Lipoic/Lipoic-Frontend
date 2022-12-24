<script lang="ts" setup>
import { useSettingsStore } from '@/stores/models/settings';

const settingsStore = useSettingsStore();

const handleChangeTheme = () => {
  settingsStore.toggleTheme();
};
</script>

<template>
  <div class="nav flex h-[77px]">
    <form class="w-[45%]">
      <div class="relative w-full">
        <button
          class="absolute inset-y-0 left-0 ml-[175px] flex items-center"
          type="submit"
        >
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </button>
        <input
          id="simple-search"
          type="text"
          class="mt-[16px] ml-[165px] block h-[46px] w-full max-w-[453px] rounded-[53px] border-[#BDC4E8] bg-[##F2F4FA] pl-10 pr-[25px] outline-none dark:bg-[#44474F]"
          placeholder="搜尋一些酷東西"
          required
        />
      </div>
    </form>
    <div class="mt-7 flex-1 text-right">
      <button class="mx-[48px]" @click="handleChangeTheme">
        <!-- auto icon -->
        <svg
          v-if="settingsStore.themeMode === 'auto'"
          style="width: 24px; height: 24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14.3,16L13.6,14H10.4L9.7,16H7.8L11,7H13L16.2,16H14.3M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69M10.85,12.65H13.15L12,9L10.85,12.65Z"
          />
        </svg>
        <!-- dark icon -->
        <svg
          v-if="settingsStore.themeMode === 'dark'"
          style="width: 24px; height: 24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
          />
        </svg>
        <!-- light icon -->
        <svg
          v-if="settingsStore.themeMode === 'light'"
          style="width: 24px; height: 24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
          />
        </svg>
      </button>
      <button id="bell">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z"
          />
        </svg>
      </button>
      <button id="account" class="mx-[48px]">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.nav {
  color: #444b89;
  background: linear-gradient(
      0deg,
      rgba(0, 90, 193, 0.11),
      rgba(0, 90, 193, 0.11)
    ),
    #f1f3f9;
  border-bottom: 1px solid #ccc1ec;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: 300ms ease background;
}

.dark .nav {
  color: #c4c6d0;
  border: none;
  background: linear-gradient(
      0deg,
      rgba(173, 198, 255, 0.11),
      rgba(173, 198, 255, 0.11)
    ),
    rgba(27, 27, 31, 0.2);
}
.search-icon {
  position: absolute;
  right: 13px;
  bottom: 10px;
  display: block;
}
</style>
