<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';
import BlockAboutMembersVue from '@/components/about/BlockAboutMembers.vue';

const MainViewVue = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);

const contentList = ref({
  bigIdea: {
    title: 'about.bigIdea.title',
    content: 'about.bigIdea.content',
  },
});
</script>

<template>
  <MainViewVue id="about">
    <div class="title"><h1>關於我們</h1></div>
    <div class="aboutContents">
      <div class="bigIdea">
        <h1 v-t="contentList.bigIdea.title"></h1>
        <p v-t="contentList.bigIdea.content"></p>
      </div>
      <BlockAboutMembersVue></BlockAboutMembersVue>
    </div>
  </MainViewVue>
</template>

<style lang="scss" scoped>
@import '@/scss/animation.func.scss';
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.title {
  display: flex;
  width: 100%;
  height: 20vh;
  background: linear-gradient(
    -45deg,
    rgb(181 76 255 / 100%) 0%,
    rgb(84 107 237) 50%,
    rgb(61 163 169) 100%
  );
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    letter-spacing: 2px;
    color: white;
  }
}

.bigIdea {
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  justify-content: center;

  h1 {
    display: flex;
    width: 500px;
    max-width: 90vw;
    padding: 80px;
    margin: 20px auto;
    color: white;
    background-color: $SecondaryColor;
    justify-content: center;
    align-items: center;
  }

  p {
    display: flex;
    width: 55%;
    height: 500px;
    margin: 20px auto;
    font-size: 20px;
    color: #fefefe;
    justify-content: center;
    align-items: center;
    white-space: pre-line;
  }

  @include phone {
    flex-direction: column;

    h1 {
      height: 200px;
    }

    p {
      width: 80%;
      height: auto;
    }
  }
}
</style>
