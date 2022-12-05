<script lang="ts" setup>
import RecentCard from '@/components/overview/desktop/RecentCard.vue';
</script>

<template>
  <div class="recent-activities ml-[172px] mr-[70px] mt-[64px]">
    <div class="block mb-[64px]">
      <a class="ml-[50px] mt-[40px] text-[30px] font-light inline-block">
        近期活動
      </a>
      <div class="recent-bar">
        <div class="flex">
          <div class="ml-[50px] mt-[42px] flex-1">
            <RecentCard image="math" />
            <RecentCard image="history" class="mt-[40px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.recent-activities {
  background: linear-gradient(
      0deg,
      rgba(173, 198, 255, 0.05),
      rgba(173, 198, 255, 0.05)
    ),
    #1b1b1f;

  /* M3/Elevation Dark/1 */
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 24px 24px 24px 24px;
  height: fit-content;
  min-height: 80%;
  user-select: text;
}
</style>
