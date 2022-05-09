<script lang="ts" setup>
import blockHeaderVue from '@/components/block/header.vue';
import blockHomeIntroVue from '@/components/block/home/intro.vue';
import blockFooterVue from '@/components/block/footer.vue';
</script>

<template>
  <div id="home">
    <blockHeaderVue />
    <blockHomeIntroVue class="wrapper" />
    <blockFooterVue />
  </div>
</template>

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .wrapper {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
}
</style>
