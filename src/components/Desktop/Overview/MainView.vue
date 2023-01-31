<script lang="ts" setup>
import AppBar from '@/components/Desktop/AppBar.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import Content from '@/components/Desktop/Overview/OverviewContent.vue';
</script>

<template>
  <NavigationBar />
  <div class="flex flex-col">
    <AppBar />
    <Content />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
