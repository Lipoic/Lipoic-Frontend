<script lang="ts" setup>
import BlockHeaderVue from '@/components/BlockHeader.vue';
import BlockFooterVue from '@/components/BlockFooter.vue';
</script>

<template>
  <div>
    <BlockHeaderVue />
    <slot />
    <BlockFooterVue />
  </div>
</template>
