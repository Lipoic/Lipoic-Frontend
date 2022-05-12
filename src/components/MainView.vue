<script lang="ts" setup>
import BlockHeaderVue from '@/components/BlockHeader.vue';
import BlockFooterVue from '@/components/BlockFooter.vue';
</script>

<template>
  <div class="main">
    <header>
      <BlockHeaderVue />
    </header>
    <main class="wrapper">
      <slot></slot>
    </main>
    <footer>
      <BlockFooterVue />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    &:deep > * {
      height: 100%;
    }
  }
}
</style>
