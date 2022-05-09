<script lang="ts" setup>
import blockHeaderVue from '@/components/block_header.vue';
import blockHomeIntroVue from '@/components/block_home_intro.vue';
import blockFooterVue from '@/components/block_footer.vue';
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
