<script lang="ts" setup>
import RecentCard from '@/components/overview/desktop/RecentCard.vue';
</script>

<template>
  <div class="recent-activities ml-[172px] mr-[70px] mt-[64px]">
    <div class="block">
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
</style>
