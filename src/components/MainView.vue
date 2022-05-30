<script lang="ts" setup>
import { ref } from 'vue';
import BlockHeaderVue from '@/components/BlockHeader.vue';
import BlockFooterVue from '@/components/BlockFooter.vue';

// Child event
const headerRef = ref<InstanceType<typeof BlockHeaderVue> | null>(null);
const headerMenuHandler = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headerRef.value?.changeMenuCheckboxState();
};
</script>

<template>
  <div class="main">
    <header>
      <BlockHeaderVue ref="headerRef" />
    </header>
    <main class="wrapper" @touchstart="headerMenuHandler"><slot /></main>
    <footer>
      <BlockFooterVue />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: auto;

  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;

    :deep(&) > * {
      height: 100%;
    }
  }
}
</style>
