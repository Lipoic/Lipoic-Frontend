<script lang="ts" setup>
interface CardProps {
  image?: string;
}
const props = defineProps<CardProps>();
</script>

<template>
  <div class="card w-[100%] h-[80px]">
    <div class="float-left mt-[13px] ml-[20px] text-left">
      <p>{{ props.image }}</p>
      <p>五分鐘後開始</p>
    </div>
    <img
      :src="'src/assets/overview/' + props.image + '-square.png'"
      class="h-[80px] w-[80px] rounded-l-none rounded-r-lg float-right"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.card {
  background: linear-gradient(
      0deg,
      rgba(173, 198, 255, 0.05),
      rgba(173, 198, 255, 0.05)
    ),
    #1b1b1f;
  /* M3/Elevation Dark/1 */
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  border: 1px solid #63616d;
}
</style>
