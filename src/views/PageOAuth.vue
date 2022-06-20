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

const route = useRouter().currentRoute.value;
const type = route.path.split('/').pop();
const { code } = route.query;
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
        code.toString(),
        `${location.origin}/oauth/google`
      );
      console.log(token);
    } else if (type === 'facebook') {
      token = await getTokenByFacebookOauthCode(
        code.toString(),
        `${location.origin}/oauth/facebook`
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
    await store.getUserInfo();
    location.href = '/';
  }
}

login();
</script>

<template>
  <MainViewVue id="oauth" class="oauth">
    <div class="container">
      <div v-if="!error" class="loading">
        <Loading
          active="true"
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
    color: $White;
  }
}

.error {
  h1 {
    color: red;
  }

  p {
    color: $White;

    a {
      color: cornflowerblue;
    }
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
