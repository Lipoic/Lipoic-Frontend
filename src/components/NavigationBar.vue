<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  getNavBarIndex,
  NAVBAR_ITEMS,
} from '@/components/data/NavigationBarData';

const router = useRouter();

const activeIndex = ref(getNavBarIndex(router.currentRoute.value.path));

const handleChangeActive = (index: number) => {
  activeIndex.value = index;
  const item = NAVBAR_ITEMS[index];
  router.push(`/dashboard/${item.link}`);
};
</script>

<template>
  <div class="navbar">
    <div class="mt-[50px] w-[100%] phone:hidden">
      <svg
        width="34"
        height="57"
        viewBox="0 0 34 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="m-auto block"
      >
        <path
          d="M17.0094 1V1.02335C36.2564 29.4031 40.308 54.3821 17.0094 55.9958V56C17.0074 55.9995 17.0055 55.9989 17.0035 55.9983V55.9996L17 55.9985L16.9965 55.9996V55.9983C16.9945 55.9988 16.9926 55.9994 16.9906 56V55.9958C-6.30797 54.3821 -2.25643 29.4031 16.9906 1.02335V1C16.9927 1.00332 16.9945 1.00644 16.9965 1.00968V1.0021C16.9975 1.00407 16.9988 1.00604 17 1.00799C17.0012 1.00604 17.0024 1.00407 17.0035 1.0021V1.00968C17.0055 1.00644 17.0074 1.00332 17.0094 1ZM17.0424 10.3408C17.0424 10.3408 17.0233 10.3754 17.0094 10.4005V10.4258C17.0094 10.4258 17.0058 10.4195 17.0035 10.4154V10.4234C17.0035 10.4234 17.0013 10.4195 17 10.4171C16.9987 10.4195 16.9965 10.4234 16.9965 10.4234V10.4154C16.9942 10.4194 16.9906 10.4258 16.9906 10.4258V10.4005C16.9767 10.3754 16.9576 10.3408 16.9576 10.3408C16.9576 10.3408 14.2123 14.9912 11.4949 20.6659C12.9124 21.9584 15.1806 23.4545 17 23.4525C18.8194 23.4545 21.0876 21.9584 22.5051 20.6659C19.7877 14.9912 17.0424 10.3408 17.0424 10.3408ZM23.7874 24.6523C23.7874 24.6523 18.9864 28.0722 17.0023 28.0722L17 28.0719L16.9977 28.0722C15.0136 28.0722 10.2126 24.6523 10.2126 24.6523C10.2126 24.6523 6.74142 31.6015 6.28493 35.5007C5.36371 43.3694 10.1204 50.3514 16.9965 50.3574H17L17.0035 50.3572C23.8796 50.3511 28.6363 43.3694 27.7151 35.5007C27.2586 31.6015 23.7874 24.6523 23.7874 24.6523Z"
          fill="url(#paint0_linear_485_1488)"
          stroke="#4D4D4D"
          stroke-width="0.5"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_485_1488"
            x1="0.704457"
            y1="0.700756"
            x2="12.742"
            y2="60.4408"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5EFFF2" />
            <stop offset="1" stop-color="#B54CFF" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="59"
        height="5"
        viewBox="0 0 59 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="m-auto mt-[50px] block"
      >
        <rect width="59" height="5" rx="2.5" fill="#7B89B8" />
      </svg>
    </div>

    <div
      v-for="(item, index) in NAVBAR_ITEMS"
      :key="index"
      :class="[
        'phone:flex-1',
        'max-phone:mt-[45px]',
        'navbar-item',
        activeIndex === index && 'active',
      ]"
    >
      <a
        class="text-[#3F4759] hover:cursor-pointer dark:text-white"
        @click="handleChangeActive(index)"
      >
        <div class="icon-layout">
          <div :class="['overlay', activeIndex === index && 'active']"></div>
          <!-- eslint-disable vue/no-v-html -->
          <svg
            width="64"
            height="32"
            viewBox="0 0 64 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            :class="['m-auto', 'icon', activeIndex === index && 'active']"
            v-html="item.icon"
          ></svg>
        </div>
        <p class="mt-[10px] text-center text-sm">
          {{ item.name }}
        </p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.navbar {
  background: linear-gradient(
      0deg,
      rgba(0, 90, 193, 0.08),
      rgba(0, 90, 193, 0.08)
    ),
    #fefbff;
  border-top: 1px solid #f1f3f9;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: auto;
  transition: 300ms ease background;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 104px;
  border-top-right-radius: 50px;

  @include phone {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 85px;
    align-items: center;
    border-top-right-radius: 0;
  }

  .dark & {
    box-sizing: border-box;
    border-top: 1px solid #353556;

    background: linear-gradient(
        0deg,
        rgba(173, 198, 255, 0.08),
        rgba(173, 198, 255, 0.08)
      ),
      #1b1b1f;
  }
}

// navbar style and animation
.navbar-item {
  transition: ease 300ms all;

  &:hover {
    .icon-layout {
      background-color: rgba(81, 92, 152, 0.1);
    }
  }

  &:active {
    font-weight: bold;

    .icon-layout {
      background-color: rgba(81, 92, 152, 0.3);
    }
  }

  &.active {
    font-weight: bold;

    &:active {
      font-weight: normal;
    }
  }

  .icon-layout {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99rem;
    transition: ease 300ms all;
    margin-left: 1.2rem;
    margin-right: 1.2rem;

    @include phone {
      margin-left: 1.5vw;
      margin-right: 1.5vw;
    }

    .overlay {
      position: absolute;
      margin: 0 auto;
      width: 2rem;
      height: 2rem;
      border-radius: 99rem;
      transition: ease 200ms all;

      &.active {
        width: 100%;
        background-color: #515c98;
      }
    }

    .icon {
      position: relative;
      height: 2rem;
      border-radius: 99rem;
      transition: ease 200ms all;

      &.active {
        color: #dbe2f9;
      }
    }
  }
}
</style>
