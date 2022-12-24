<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/models/user';
import MobileView from '@/components/overview/MobileView.vue';
import DesktopView from '@/components/overview/DesktopView.vue';

const MainViewVue = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);

const isLogin = useUserStore().isLoggedIn();
const router = useRouter();

if (!isLogin) {
  router.push('/account/login');
}
</script>

<template>
  <MainViewVue id="overview" class="select-none">
    <div class="w-[100%] phone:hidden">
      <DesktopView />
    </div>
    <div class="hidden w-[100%] phone:inline-block">
      <MobileView />
    </div>
  </MainViewVue>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
