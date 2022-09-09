<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';
import BlockAboutContentsVue from '@/components/about/BlockAboutContents.vue';

const MainViewVue = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);

const contentList = ref({
  who: {
    title: 'about.whoWeAre.title',
    content: 'about.whoWeAre.content',
  },
});
</script>

<template>
  <MainViewVue id="about">
    <div class="aboutContents">
      <BlockAboutContentsVue
        :title="contentList.who.title"
        :content="contentList.who.content"
      ></BlockAboutContentsVue>
    </div>
  </MainViewVue>
</template>

<style lang="scss" scoped>
#about {
  background-color: #fefefe;
}

.aboutContents {
  padding: 10px 15px;
}
</style>
