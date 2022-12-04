<script lang="ts" setup>
interface CardProps {
  image?: string;
}
const props = defineProps<CardProps>();
</script>

<template>
  <div class="card w-[237px] h-[210px]">
    <div>
      <img :src="'src/assets/overview/' + props.image + '.png'" />
      <a class="ml-3 mt-2 inline-block text-2xl opacity-80">
        {{ props.image }}
      </a>
      <br />
      <a class="ml-3 mt-2 inline-block text-base opacity-80"> 12/12 10:00 </a>
    </div>
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
}
</style>
