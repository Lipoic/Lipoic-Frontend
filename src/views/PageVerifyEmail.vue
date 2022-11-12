<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { defineAsyncComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { verifyEmail } from '@/api/user';
import { useUserStore } from '@/stores/models/user';
import { Code } from '@/api/code';

const MainViewVue = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);
const LoginStatusVue = defineAsyncComponent(
  () => import('@/components/auth/LoginStatus.vue')
);

const router = useRouter();
const i18n = useI18n();

const error = ref(false);
const code = useRoute().query.code?.toString();
const errorMessage = ref<string>();

async function init() {
  if (code) {
    try {
      const body = await verifyEmail(code);

      if (body.code === Code.SUCCESS && body.data) {
        const store = useUserStore();
        store.setToken(body.data.token);
        await store.setUserInfo();
        await router.push('/');
        return;
      }

      if (body.code === Code.Verify_Email_Error) {
        errorMessage.value = i18n.t('auth.verifyEmail.error');
      }

      error.value = true;
    } catch (e) {
      console.error(e);
      error.value = true;
    }
  } else {
    error.value = true;
  }
}

init();
</script>

<template>
  <MainViewVue id="verify-email">
    <LoginStatusVue
      :error="error"
      :error-message="errorMessage"
    ></LoginStatusVue>
  </MainViewVue>
</template>
