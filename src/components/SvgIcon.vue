<template>
  <svg v-once aria-hidden="true" class="svg-icon-spin" v-bind="useAttrs()">
    <use :xlink:href="symbolId" :fill="color" :color="color" />
  </svg>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue';

// eslint-disable-next-line vue/no-setup-props-destructure
const {
  name,
  prefix = 'icon',
  color,
} = defineProps<{
  name: string;
  prefix?: string;
  color?: string;
}>();

const symbolId = computed(() => `#${prefix}-${name}`);
</script>
<style lang="scss" scoped>
.svg-icon-spin {
  vertical-align: middle;
}
</style>
