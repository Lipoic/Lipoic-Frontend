<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { defineAsyncComponent, ref } from 'vue';
import { getTokenByGoogleOauthCode } from '@/api/authentication';

const MainViewVue = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);

const route = useRouter().currentRoute.value;
const type = route.path.split('/').pop();
const { code } = route.query;
let token: string | undefined;
const loading = ref(true);
const error = ref(false);

async function login() {
  if (!code) {
    error.value = true;
    loading.value = false;
    return;
  }

  try {
    if (type === 'google') {
      token = await getTokenByGoogleOauthCode(
        code.toString(),
        `${location.origin}/oauth/google`
      );
      console.log(token);
    } else if (type === 'facebook') {
      token = '';
    } else {
      loading.value = false;
    }
  } catch (err) {
    error.value = true;
  }

  if (token) {
    loading.value = false;
    // location.href = '/';
  }
  console.log(error);
}

login();
</script>

<template>
  <MainViewVue id="oauth" class="oauth">
    <div class="container">
      <div v-if="!error" class="loading">
        <Loading
          v-model:active="loading"
          :color="'#7b6ff6'"
          :width="100"
          :height="100"
        ></Loading>
        <h1 v-t="'auth.login.loading'"></h1>
        {{ token }}
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
