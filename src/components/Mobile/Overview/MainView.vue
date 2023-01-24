<script lang="ts" setup>
import AppBar from '@/components/Mobile/AppBar.vue';
import ContentBar from '@/components/Mobile/Overview/ContentBar.vue';
import NavigationBar from '@/components/Mobile/NavigationBar.vue';
</script>

<template>
  <AppBar />
  <ContentBar />
  <NavigationBar />
  <div class="navigation-overlay"></div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.navigation-overlay {
  min-height: 6rem;
}
</style>
