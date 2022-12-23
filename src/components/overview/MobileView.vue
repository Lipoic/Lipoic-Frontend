<script lang="ts" setup>
import NavBar from '@/components/overview/mobile/NavBar.vue';
import FooBar from '@/components/overview/mobile/FooBar.vue';
import ContentBar from './mobile/ContentBar.vue';
</script>

<template>
  <div class="text-white">
    <NavBar />
    <div class="overflow-scroll h-[calc(100vh-64px-85px)]">
      <ContentBar />
    </div>
    <FooBar />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
