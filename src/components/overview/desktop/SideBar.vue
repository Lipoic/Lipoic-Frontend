<script lang="ts" setup>
const navbarItems = [
  {
    icon: `
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
      </svg>
    `,
    name: '總覽',
    active: true,
  },
  {
    icon: `
        <path
          d="M32 7L21 13L25 15.18V21.18L32 25L39 21.18V15.18L41 14.09V21H43V13L32 7ZM38.82 13L32 16.72L25.18 13L32 9.28L38.82 13ZM37 19.99L32 22.72L27 19.99V16.27L32 19L37 16.27V19.99Z"
          fill="currentColor"
        />
    `,
    name: '我的班級',
    active: false,
  },
  {
    icon: `
        <path
          d="M40 6L24 6C22.9 6 22.01 6.9 22.01 8L22 26L26 22H40C41.1 22 42 21.1 42 20V8C42 6.9 41.1 6 40 6ZM40 20H25.17L24 21.17V8H40V20ZM34 14.6L37 17V11L34 13.4V11H27V17H34V14.6Z"
          fill="currentColor"
        />
    `,
    name: '我的課堂',
    active: false,
  },
  {
    icon: `
      <path
        d="M39 8H34.82C34.4 6.84 33.3 6 32 6C30.7 6 29.6 6.84 29.18 8H25C23.9 8 23 8.9 23 10V24C23 25.1 23.9 26 25 26H39C40.1 26 41 25.1 41 24V10C41 8.9 40.1 8 39 8ZM32 7.75C32.41 7.75 32.75 8.09 32.75 8.5C32.75 8.91 32.41 9.25 32 9.25C31.59 9.25 31.25 8.91 31.25 8.5C31.25 8.09 31.59 7.75 32 7.75ZM39 24H25V10H39V24Z"
        fill="currentColor"
      />
      <path
        d="M35.08 16.03L32.96 13.91L27 19.86V22H29.1L35.08 16.03Z"
        fill="currentColor"
      />
      <path
        d="M36.85 14.27C37.05 14.07 37.05 13.76 36.85 13.56L35.44 12.15C35.24 11.95 34.93 11.95 34.73 12.15L33.67 13.21L35.79 15.33L36.85 14.27Z"
        fill="currentColor"
      />
    `,
    name: '我的筆記',
    active: false,
  },
  {
    icon: `
      <path
        d="M24 10H22V24C22 25.1 22.9 26 24 26H38V24H24V10ZM40 6L28 6C26.9 6 26 6.9 26 8V20C26 21.1 26.9 22 28 22H40C41.1 22 42 21.1 42 20V8C42 6.9 41.1 6 40 6ZM40 20H28V8H40V20ZM33.51 14.16C33.92 13.43 34.69 13 35.14 12.36C35.62 11.68 35.35 10.42 34 10.42C33.12 10.42 32.68 11.09 32.5 11.65L31.13 11.08C31.51 9.96 32.52 9 33.99 9C35.22 9 36.07 9.56 36.5 10.26C36.87 10.86 37.08 11.99 36.51 12.83C35.88 13.76 35.28 14.04 34.95 14.64C34.82 14.88 34.77 15.04 34.77 15.82H33.25C33.26 15.41 33.19 14.74 33.51 14.16ZM32.95 17.95C32.95 17.36 33.42 16.91 34 16.91C34.59 16.91 35.04 17.36 35.04 17.95C35.04 18.53 34.6 19 34 19C33.42 19 32.95 18.53 32.95 17.95Z"
        fill="currentColor"
      />
    `,
    name: '試題庫',
    active: false,
  },
]
</script>

<template>
  <div class="sidebar w-[104px] h-full rounded-tr-[50px] flex-none">
    <div class="w-[100%] mt-[50px]">
      <svg width="34" height="57" viewBox="0 0 34 57" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="block m-auto">
        <path
          d="M17.0094 1V1.02335C36.2564 29.4031 40.308 54.3821 17.0094 55.9958V56C17.0074 55.9995 17.0055 55.9989 17.0035 55.9983V55.9996L17 55.9985L16.9965 55.9996V55.9983C16.9945 55.9988 16.9926 55.9994 16.9906 56V55.9958C-6.30797 54.3821 -2.25643 29.4031 16.9906 1.02335V1C16.9927 1.00332 16.9945 1.00644 16.9965 1.00968V1.0021C16.9975 1.00407 16.9988 1.00604 17 1.00799C17.0012 1.00604 17.0024 1.00407 17.0035 1.0021V1.00968C17.0055 1.00644 17.0074 1.00332 17.0094 1ZM17.0424 10.3408C17.0424 10.3408 17.0233 10.3754 17.0094 10.4005V10.4258C17.0094 10.4258 17.0058 10.4195 17.0035 10.4154V10.4234C17.0035 10.4234 17.0013 10.4195 17 10.4171C16.9987 10.4195 16.9965 10.4234 16.9965 10.4234V10.4154C16.9942 10.4194 16.9906 10.4258 16.9906 10.4258V10.4005C16.9767 10.3754 16.9576 10.3408 16.9576 10.3408C16.9576 10.3408 14.2123 14.9912 11.4949 20.6659C12.9124 21.9584 15.1806 23.4545 17 23.4525C18.8194 23.4545 21.0876 21.9584 22.5051 20.6659C19.7877 14.9912 17.0424 10.3408 17.0424 10.3408ZM23.7874 24.6523C23.7874 24.6523 18.9864 28.0722 17.0023 28.0722L17 28.0719L16.9977 28.0722C15.0136 28.0722 10.2126 24.6523 10.2126 24.6523C10.2126 24.6523 6.74142 31.6015 6.28493 35.5007C5.36371 43.3694 10.1204 50.3514 16.9965 50.3574H17L17.0035 50.3572C23.8796 50.3511 28.6363 43.3694 27.7151 35.5007C27.2586 31.6015 23.7874 24.6523 23.7874 24.6523Z"
          fill="url(#paint0_linear_485_1488)" stroke="#4D4D4D" stroke-width="0.5" stroke-linejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_485_1488" x1="0.704457" y1="0.700756" x2="12.742" y2="60.4408"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#5EFFF2" />
            <stop offset="1" stop-color="#B54CFF" />
          </linearGradient>
        </defs>
      </svg>
      <svg width="59" height="5" viewBox="0 0 59 5" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="block m-auto mt-[50px]">
        <rect width="59" height="5" rx="2.5" fill="#7B89B8" />
      </svg>
    </div>

    <div class="mt-5" v-for="(item, index) in navbarItems" :key="index">
      <a class="hover:cursor-pointer text-[#3F4759] dark:text-white">
        <!-- <div class="" v-html="item.icon"></div> -->
        <svg
          width="64"
          height="32"
          viewBox="0 0 64 32"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
          class="block m-auto mt-[40px]"
          v-html="item.icon"
        ></svg>
        <p class="text-center text-sm mt-[10px]">{{ item.name }}</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.sidebar {
  box-sizing: border-box;
  position: absolute;

  background: linear-gradient(0deg, rgba(0, 90, 193, 0.08), rgba(0, 90, 193, 0.08)), #FEFBFF;
  border-top: 1px solid #F1F3F9;
  border-right: 1px solid #F1F3F9;
  border-radius: 0px 50px 0px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: 300ms ease background;
}

.dark .sidebar {
  box-sizing: border-box;
  position: absolute;

  border-top: 1px solid #353556;
  border-right: 1px solid #353556;
  border-radius: 0px 50px 0px 0px;

  background: linear-gradient(
      0deg,
      rgba(173, 198, 255, 0.08),
      rgba(173, 198, 255, 0.08)),
    #1b1b1f;
}
</style>
