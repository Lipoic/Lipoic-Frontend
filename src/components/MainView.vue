<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';

const BlockHeaderVue = defineAsyncComponent(
  () => import('@/components/header/BlockHeader.vue')
);
const BlockFooterVue = defineAsyncComponent(
  () => import('@/components/BlockFooter.vue')
);
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
    <main class="wrapper" @touchstart.passive="headerMenuHandler">
      <slot />
    </main>
    <footer>
      <BlockFooterVue />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.main {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: $LightBlack;

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
