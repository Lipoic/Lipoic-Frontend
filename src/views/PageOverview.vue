<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/models/user';
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
    <div class="phone:hidden w-[100%]">
      <DesktopView />
    </div>
  </MainViewVue>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
