<script lang="ts" setup>
import NavBar from '@/components/overview/desktop/NavBar.vue';
import SideBar from '@/components/overview/desktop/SideBar.vue';
import Content from '@/components/overview/desktop/Content.vue';
</script>

<template>
  <SideBar />

  <div class="flex flex-col">
    <NavBar />

    <Content />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
