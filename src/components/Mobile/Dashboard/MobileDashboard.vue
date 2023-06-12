<script lang="ts" setup>
import AppBar from '@/components/Mobile/AppBar.vue';
import Content from '@/components/Mobile/Dashboard/OverviewContent.vue';
import NavigationBar from '@/components/NavigationBar.vue';
</script>

<template>
  <div class="overflow-y-hidden">
    <AppBar />
    <Content />
    <NavigationBar />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
