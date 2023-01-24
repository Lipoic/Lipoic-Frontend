<script lang="ts" setup>
interface CardProps {
  name?: string;
}
const props = defineProps<CardProps>();
</script>

<template>
  <div class="card w-full max-w-[520px]">
    <img :src="'src/assets/overview/' + props.name + '.png'" />
    <div class="p-3">
      <a class="inline-block text-2xl font-bold opacity-80">
        {{ props.name }}
      </a>
      <br />
      <a class="inline-block mt-2 text-base opacity-80"> 12/12 10:00 </a>
    </div>
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
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
      0px 1px 2px rgba(0, 0, 0, 0.3);
    border: 1px solid #63616d;
  }
}
</style>
