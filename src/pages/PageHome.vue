<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/models/user';

// If the user is logged in, redirect to the overview page
const isLogin = useUserStore().isLoggedIn();
const router = useRouter();
if (isLogin) {
  router.push('/dashboard');
} else {
  router.push('/account/login');
}
</script>

<template>
  <div></div>
</template>
