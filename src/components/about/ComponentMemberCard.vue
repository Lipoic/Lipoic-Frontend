<script lang="ts" setup>
const props = defineProps<{
  imgUrl: string;
  name: string;
  title: string;
  introduction: string;
}>();
</script>

<template>
  <div class="memberCard">
    <div class="avatar"></div>
    <div class="content">
      <div class="name"></div>
      <div class="title"></div>
    </div>
  </div>
</template>
