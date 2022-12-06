<script lang="ts" setup></script>

<template>
  <form class="w-[45%] ml-[175px] mt-[16px] max-w-[453px] relative">
    <input
      type="search"
      data-search-input="true"
      class="pl-5 pr-10 h-[46px] rounded-[53px] block outline-none bg-[#44474F] w-full"
      placeholder="搜尋一些酷東西"
      required
    />
    <button class="search-icon" aria-label="Clear">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>
    </button>
  </form>
  <div class="mt-[-29px] text-right">
    <button id="bell">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z"
        />
      </svg>
    </button>
    <button id="account" class="ml-[48px] mr-[48px]">
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"
        />
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.search-icon {
  position: absolute;
  right: 13px;
  bottom: 10px;
  display: block;
}

.nav {
  background: linear-gradient(
      0deg,
      rgba(173, 198, 255, 0.11),
      rgba(173, 198, 255, 0.11)
    ),
    rgba(27, 27, 31, 0.2);
}
</style>
