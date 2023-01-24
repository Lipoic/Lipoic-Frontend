<script lang="ts" setup>
import AppBar from '@/components/Desktop/AppBar.vue';
import SideBar from '@/components/Desktop/SideBar.vue';
import Content from '@/components/Desktop/Overview/OverviewContent.vue';
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
