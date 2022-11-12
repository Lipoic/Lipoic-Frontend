<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { defineAsyncComponent, ref } from 'vue';
import {
  getTokenByFacebookOauthCode,
  getTokenByGoogleOauthCode,
} from '@/api/authentication';
import { useUserStore } from '@/stores/models/user';
import I18nHelper from '@/helper/I18nHelper';
import { AccessToken } from '@/api/authentication/type';

const MainViewVue = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);

const LoginStatusVue = defineAsyncComponent(
  () => import('@/components/auth/LoginStatus.vue')
);

const router = useRouter();

const route = useRoute();
const type = route.path.split('/').filter((str) => str)[1];
const code = route.query.code?.toString();
const error = ref(false);

async function login() {
  if (!code) {
    error.value = true;
    return;
  }

  let tokenData: AccessToken | null = null;

  try {
    if (type === 'google') {
      tokenData = await getTokenByGoogleOauthCode(
        code,
        `${location.origin}/oauth/google/`,
        I18nHelper.locale
      );
    } else if (type === 'facebook') {
      tokenData = await getTokenByFacebookOauthCode(
        `${code}#_=_`, // Fix facebook oauth code
        `${location.origin}/oauth/facebook/`,
        I18nHelper.locale
      );
    } else {
      error.value = true;
    }
  } catch (err) {
    error.value = true;
  }

  const token = tokenData?.token;

  if (token) {
    const store = useUserStore();
    store.setToken(token);
    await store.setUserInfo();
    router.push('/');
  }
}

login();
</script>

<template>
  <MainViewVue id="oauth">
    <LoginStatusVue :error="error"></LoginStatusVue>
  </MainViewVue>
</template>
