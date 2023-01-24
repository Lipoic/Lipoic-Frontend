<script lang="ts" setup>
import AppBar from '@/components/Desktop/AppBar.vue';
import SideBar from '@/components/Desktop/SideBar.vue';
import Content from '@/components/Desktop/Overview/OverviewContent.vue';
</script>

<template>
  <SideBar />
  <div class="flex flex-col">
    <AppBar />
    <content />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
