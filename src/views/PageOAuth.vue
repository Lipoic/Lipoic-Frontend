<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { defineAsyncComponent, ref } from 'vue';
import {
  getTokenByFacebookOauthCode,
  getTokenByGoogleOauthCode,
} from '@/api/authentication';
import { useUserStore } from '@/stores/models/user';

const MainViewVue = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);

const router = useRouter();

const route = router.currentRoute.value;
const type = route.path.split('/').filter((str) => str)[1];
const code = route.query.code?.toString();
const error = ref(false);

async function login() {
  if (!code) {
    error.value = true;
    return;
  }

  let token: string | undefined;

  try {
    if (type === 'google') {
      token = await getTokenByGoogleOauthCode(
        code,
        `${location.origin}/oauth/google/`
      );
    } else if (type === 'facebook') {
      token = await getTokenByFacebookOauthCode(
        `${code}#_=_`, // fix facebook oauth code
        `${location.origin}/oauth/facebook/`
      );
    } else {
      error.value = true;
    }
  } catch (err) {
    error.value = true;
  }

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
    <div class="container">
      <div v-if="!error" class="loading">
        <Loading
          :active="true"
          :color="'#7b6ff6'"
          :width="100"
          :height="100"
        ></Loading>
        <h1 v-t="'auth.login.loading'"></h1>
      </div>
      <div v-if="error" class="error">
        <h1 v-t="'auth.login.loginFailed'"></h1>
        <p v-t="'error.message'"></p>
      </div>
    </div>
  </MainViewVue>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.loading {
  h1 {
    padding-top: 15px;
    color: white;
  }
}

.error {
  h1 {
    color: red;
  }

  p {
    color: white;
  }
}

.container {
  display: flex;
  font-size: 23px;
  align-items: center;
  text-align: center;
}

:global(.wrapper) {
  justify-content: center;
}
</style>
