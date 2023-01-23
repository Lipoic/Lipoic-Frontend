<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/models/user';
import DesktopView from '@/components/Desktop/Overview/MainView.vue';
import MobileView from '@/components/Mobile/Overview/MainView.vue';

const MainView = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);

const isLogin = useUserStore().isLoggedIn();
const router = useRouter();

if (!isLogin) {
  router.push('/account/login');
}
</script>

<template>
  <MainView id="overview" class="select-none">
    <div class="w-[100%] phone:hidden">
      <DesktopView />
    </div>
    <div class="w-[100%] max-phone:hidden">
      <MobileView />
    </div>
  </MainView>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
