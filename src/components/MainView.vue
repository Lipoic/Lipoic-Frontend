<script lang="ts" setup>
import { ref } from 'vue';
import BlockHeaderVue from '@/components/BlockHeader.vue';
import BlockFooterVue from '@/components/BlockFooter.vue';

// child event
const headerRef = ref(null);
const headerMenuHandler = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (headerRef as any).value.changeMenuCheckboxState();
};
</script>

<template>
  <div class="main">
    <header>
      <BlockHeaderVue ref="headerRef" />
    </header>
    <main class="wrapper" @touchstart="headerMenuHandler">
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
