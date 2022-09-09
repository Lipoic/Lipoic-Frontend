<script lang="ts" setup>
const props = defineProps<{
  title: string;
  content: string;
}>();
</script>
<template>
  <div class="aboutContentBlock">
    <h1 v-t="props.title"></h1>
    <p v-t="props.content"></p>
  </div>
</template>
<style lang="scss" scoped>
.aboutContentBlock {
  width: 800px;
  max-width: 90vw;
  margin-top: 20px;

  h1 {
    position: relative;
    margin-bottom: 10px;
    font-size: 1.6rem;
    font-weight: 700;
    color: #232323;

    &::after {
      position: absolute;
      top: 100%;
      left: 0;
      width: 80px;
      height: 4px;
      background-color: rgb(79 82 252);
      content: ' ';
    }
  }
}
</style>
