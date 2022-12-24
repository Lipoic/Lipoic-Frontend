<script lang="ts" setup>
import NavBar from '@/components/overview/desktop/NavBar.vue';
import SideBar from '@/components/overview/desktop/SideBar.vue';
import RecentBar from '@/components/overview/desktop/RecentBar.vue';
</script>

<template>
  <SideBar />
  <div class="flex flex-col text-white">
    <NavBar />
    <RecentBar />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
