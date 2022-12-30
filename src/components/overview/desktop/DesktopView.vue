<script lang="ts" setup>
import AppBar from '@/components/overview/desktop/AppBar.vue';
import SideBar from '@/components/overview/desktop/SideBar.vue';
import Content from '@/components/overview/desktop/OverviewContent.vue';
</script>

<template>
  <side-bar />

  <div class="flex flex-col">
    <app-bar />

    <content />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
