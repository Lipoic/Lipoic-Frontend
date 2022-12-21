<script lang="ts" setup></script>

<template>
  <div class="main bg-[#FCFBFF] dark:bg-[#1B1B1F]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
.main {
  min-height: 100%;
  display: flex;
}
</style>
