<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/models/user';
import OverviewLayout from '@/components/overview/Layout.vue';

const MainView = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);

const isLogin = useUserStore().isLoggedIn();
const router = useRouter();

if (!isLogin) {
  // router.push('/account/login');
}
</script>

<template>
  <main-view id="overview" class="select-none">
    <overview-layout />
  </main-view>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
