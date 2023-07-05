<script lang="ts" setup>
import AppBar from '@/components/desktop/AppBar.vue';
import NavigationBar from '@/components/NavigationBar.vue';
</script>

<template>
  <NavigationBar />
  <div class="flex flex-col">
    <AppBar />
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
