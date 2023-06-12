<script lang="ts" setup>
import AppBar from '@/components/mobile/AppBar.vue';
import NavigationBar from '@/components/NavigationBar.vue';
</script>

<template>
  <div class="overflow-y-hidden">
    <AppBar />
    <router-view />
    <NavigationBar />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
