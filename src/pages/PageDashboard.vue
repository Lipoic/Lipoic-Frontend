<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/models/user';
import DesktopDashboard from '@/components/desktop/dashboard/DesktopDashboard.vue';
import MobileDashboard from '@/components/Mobile/Dashboard/MobileDashboard.vue';

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
  <MainView id="dashboard" class="select-none">
    <div class="w-[100%] phone:hidden">
      <DesktopDashboard />
    </div>
    <div class="w-[100%] max-phone:hidden">
      <MobileDashboard />
    </div>
  </MainView>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
