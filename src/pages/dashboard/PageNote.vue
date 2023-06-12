<script lang="ts" setup></script>

<template>
  <div
    class="absolute right-0 top-[77px] h-[calc(100svh-77px)] w-[calc(100svw-104px)] phone:hidden"
  >
    <p>此功能正在製作中</p>
  </div>
  <div class="max-phone:hidden">
    <p>此功能正在製作中</p>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

p {
  font-size: 24px;
  font-weight: 500;
  color: black;
  text-align: center;

  .dark & {
    color: white;
  }
}
</style>
