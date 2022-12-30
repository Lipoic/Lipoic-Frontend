<script lang="ts" setup>
import RecentCard from '@/components/overview/mobile/RecentCard.vue';
import { useUserStore } from '@/stores/models/user';

const user = useUserStore().info;
</script>

<template>
  <div class="mx-[30px] text-center dark:text-white">
    <div class="mt-[30px]">
      <svg
        class="m-auto block"
        style="width: 80px; height: 80px"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"
        />
      </svg>
      <p class="mt-[30px] text-3xl">時間, {{ user?.username }}</p>
    </div>
    <div class="mt-[40px]">
      <p class="text-left text-lg">即將開始</p>
      <recent-card image="math" class="mt-[10px]" />
      <recent-card image="none" class="mt-[10px]" />
    </div>
    <div class="mt-[30px]">
      <svg
        class="m-auto block text-center"
        width="103"
        height="4"
        viewBox="0 0 103 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="103" height="4" rx="2" fill="#A6A6A6" />
      </svg>
    </div>
    <div class="mt-[30px]">
      <p class="text-left text-lg">近期活動</p>
      <recent-card image="math" class="mt-[10px]" />
      <recent-card image="none" class="mt-[10px]" />
      <recent-card image="none" class="mt-[10px]" />
    </div>
    <div
      class="m-auto my-[30px] block w-[105px] rounded-full border border-[#63616d] px-4 py-2 text-center"
    >
      <button class="text-[#ADC6FF]">查看更多</button>
    </div>
  </div>
</template>
