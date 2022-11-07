<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { defineAsyncComponent, ref } from 'vue';
import { verifyEmail } from '@/api/user';
import { useUserStore } from '@/stores/models/user';

const MainViewVue = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);
const LoginStatusVue = defineAsyncComponent(
  () => import('@/components/auth/LoginStatus.vue')
);

const error = ref(false);
const code = useRoute().query.code?.toString();

if (code) {
  try {
    const tokenData = await verifyEmail(code);

    if (tokenData?.token) {
      const store = useUserStore();
      store.setToken(tokenData.token);
      await store.setUserInfo();
      await useRouter().push('/');
    } else {
      error.value = true;
    }
  } catch (e) {
    console.error(e);
    error.value = true;
  }
} else {
  error.value = true;
}
</script>

<template>
  <MainViewVue id="verify-email">
    <LoginStatusVue :error="error"></LoginStatusVue>
  </MainViewVue>
</template>
