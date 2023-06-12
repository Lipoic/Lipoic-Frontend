<script lang="ts" setup></script>

<template>
  <div class="nav-overlay"></div>
  <div class="nav flex h-[64px] w-[100svw] flex-row justify-between px-4">
    <div class="flex items-center gap-7">
      <button id="menu" class="">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
          />
        </svg>
      </button>
      <h1 class="text-xl leading-6">總覽</h1>
    </div>
    <div class="flex gap-6">
      <button id="search">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
          />
        </svg>
      </button>
      <button id="account">
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
.nav-overlay {
  min-height: 4rem;
}

.nav {
  position: fixed;
  z-index: auto;
  top: 0;

  color: #444b89;
  background: linear-gradient(
      0deg,
      rgba(0, 90, 193, 0.11),
      rgba(0, 90, 193, 0.11)
    ),
    #f1f3f9;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  transition: 300ms ease background;

  .dark & {
    color: #c4c6d0;
    background: linear-gradient(
        0deg,
        rgba(173, 198, 255, 0.08),
        rgba(173, 198, 255, 0.08)
      ),
      #1b1b1f;
  }
}
</style>
