<script lang="ts" setup>
interface CardProps {
  image?: string;
}
const props = defineProps<CardProps>();
</script>

<template>
  <div class="card w-full max-w-[520px]">
    <img :src="'src/assets/overview/' + props.image + '.png'" />
    <div class="p-3">
      <a class="inline-block text-2xl opacity-80 font-bold">
        {{ props.image }}
      </a>
      <br />
      <a class="mt-2 inline-block text-base opacity-80"> 12/12 10:00 </a>
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
    #ffffff;
  /* M3/Elevation Dark/1 */
  box-shadow: none;
  border-radius: 16px;
  border: 1px solid rgba(124, 134, 190, 0.33);
}

.dark .card {
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
