<script lang="ts" setup>
import mathImage from '@/assets/overview/math-square.png';
import noneImage from '@/assets/overview/none-square.png';

interface CardProps {
  name?: string;
}
const props = defineProps<CardProps>();

function getImage(): string {
  return props.name === 'math' ? mathImage : noneImage;
}
</script>

<template>
  <div class="card h-[80px] w-[100%]">
    <div class="float-left mt-[13px] ml-[20px] text-left">
      <p class="font-bold">{{ props.name }}</p>
      <p>五分鐘後開始</p>
    </div>
    <img
      :src="getImage()"
      class="float-right h-[80px] w-[80px] rounded-l-none rounded-r-lg"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.card {
  background: linear-gradient(
      0deg,
      rgba(0, 90, 193, 0.05),
      rgba(0, 90, 193, 0.05)
    ),
    #fefbff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  border-radius: 12px;

  .dark & {
    background: linear-gradient(
        0deg,
        rgba(173, 198, 255, 0.05),
        rgba(173, 198, 255, 0.05)
      ),
      #1b1b1f;
    box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15),
      0px 1px 2px rgba(0, 0, 0, 0.3);
  }
}
</style>
