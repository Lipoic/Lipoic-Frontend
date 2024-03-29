<script lang="ts" setup>
import { defineAsyncComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useUserStore } from '@/stores/models/user';
import { login } from '@/api/user';
import { Code } from '@/api/code';

const ToolLangSelector = defineAsyncComponent(
  () => import('@/components/ToolLangSelector.vue')
);
const OAuthButtons = defineAsyncComponent(
  () => import('@/components/Auth/OAuthButtons.vue')
);

interface loginData {
  email: string;
  password: string;
  stayLoggedIn: boolean;
}
const loginFormData = reactive<loginData>({
  email: '',
  password: '',
  stayLoggedIn: false,
});

const router = useRouter();

const userStore = useUserStore();

if (userStore.isLoggedIn()) router.push('/');

const loginError = ref<string>();
const loginLoading = ref<boolean>(false);
const i18n = useI18n();

async function submitData() {
  loginError.value = undefined;
  loginLoading.value = true;
  try {
    const body = await login(loginFormData.email, loginFormData.password);

    if (body.code === Code.SUCCESS && body.data) {
      userStore.setToken(body.data.token);
      await userStore.setUserInfo();
      await router.push('/');
    }

    let errorKey!: string;

    switch (body.code) {
      case Code.Login_User_Error:
        errorKey = 'auth.login.error.password';
        break;

      case Code.Login_User_Email_Not_Verified:
        errorKey = 'auth.login.error.verifyEmail';
        break;

      case Code.USER_NOT_FOUND:
        errorKey = 'auth.login.error.user';
    }

    loginError.value = i18n.t(errorKey);
  } catch (error) {
    loginError.value = i18n.t('error.message');
  }
  loginLoading.value = false;
}
</script>

<template>
  <div class="login">
    <div class="left">
      <div class="hello">
        <router-link to="/">
          <SvgIcon
            name="login-arrow"
            class="goBack"
            width="80px"
            height="80px"
          />
        </router-link>
        <span v-t="'auth.login.welcome'" class="greeting" />
      </div>
      <div class="masks">
        <div v-for="_ in 4" v-once :key="_" class="mask" />
      </div>
    </div>
    <div class="right">
      <router-link to="/" class="goBack">
        <SvgIcon name="login-arrow" class="arrow" width="25px" height="25px" />
      </router-link>
      <form method="POST">
        <div class="header">
          <span v-t="'auth.login.title'" />
        </div>
        <input
          v-model="loginFormData.email"
          required
          type="email"
          name="email"
          :aria-label="$t('auth.login.email')"
          :placeholder="$t('auth.login.email')"
          autocomplete="email"
        />
        <input
          v-model="loginFormData.password"
          required
          type="password"
          name="password"
          :aria-label="$t('auth.login.password')"
          :placeholder="$t('auth.login.password')"
          autocomplete="current-password"
        />
        <div class="loginOptions">
          <p v-if="loginError" class="loginError">
            {{ loginError }}
          </p>
          <a v-t="'auth.login.forgotPassword'" href="#" class="forgot" />
        </div>
        <button
          v-if="!loginLoading"
          v-t="'auth.login.loginButton'"
          class="loginButton"
          type="submit"
          @click.prevent="submitData"
        />
        <div v-if="loginLoading">
          <Loading
            class="loadingIndicator"
            :active="true"
            :color="'#7b6ff6'"
            :loader="'dots'"
            :width="50"
            :height="50"
          />
        </div>
        <p v-t="'auth.login.haveNoAccount'" />
        <p>
          <router-link
            v-t="'auth.login.registerNow'"
            to="/account/signup"
            class="signup"
          />
        </p>
        <hr />
        <OAuthButtons />
        <ToolLangSelector />
      </form>
    </div>
    <div class="bottomMusk"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.login {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #3d494a;

  .right {
    @include pad {
      left: 0;
      display: flex;
      width: 100%;
      padding: 0;
      align-items: center;
      justify-content: center;

      form > .header {
        padding: 0;
        text-align: center;
      }
    }

    position: absolute;
    left: 50%;
    width: 50%;
    height: 100%;
    padding: 0 0 0 8%;

    .goBack {
      @include pad {
        position: absolute;
        top: -360px;
        left: -500px;
        display: inline;
        width: 800px;
        height: 500px;
        background-color: $MainColor;
        transform: rotate(-45deg);
        box-shadow: 5px 5px 20px 7px #00000050;

        .arrow {
          position: absolute;
          bottom: 30px;
          left: 47%;
        }
      }

      display: none;
    }

    form {
      @include pad {
        max-width: 80vw;
      }

      display: flex;
      width: 100%;
      height: 100%;
      max-width: 400px;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > * {
        width: 100%;
      }

      .header {
        position: relative;
        padding: 0 10px 30px 20px;
        font-size: 2rem;
        font-weight: 600;
        color: white;

        span {
          position: relative;

          &::after {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 5px;
            background-color: $MainColor;
            content: ' ';
          }
        }
      }

      & > input {
        max-width: 90vw;
        padding: 12px 20px;
        margin-top: 10px;
        font-size: 1.2rem;
        color: white;
        background-color: #7c7b7b33;
        border: none;
        border-radius: 15px;
        outline: none;

        &:invalid {
          ~ .loginButton {
            pointer-events: none;
            opacity: 0.5;
          }
        }
      }

      .loginOptions {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 15px;

        a {
          color: white;
        }

        .loginError {
          color: orangered;
          font-size: large;
          padding-bottom: 10px;
        }
      }

      p {
        color: white;
        text-align: center;
      }

      a {
        display: inline;
        color: $MainColor;
        text-decoration: underline;
        cursor: pointer;
      }

      hr {
        border-color: #ababab;
        margin: 12px 20px;
      }

      .loginButton {
        padding: 10px;
        margin-bottom: 20px;
        font-size: 1.5rem;
        color: white;
        cursor: pointer;
        background-color: $MainPurple;
        border: none;
        border-radius: 15px;
      }

      .loadingIndicator {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        margin-right: 10px;
      }
    }
  }

  .left {
    @include pad {
      display: none;
    }

    position: absolute;
    right: 50%;
    width: 100%;
    height: 100%;

    .hello {
      position: absolute;
      left: 50%;
      z-index: 2;
      width: 50%;
      height: 100%;

      .goBack {
        padding: 5px;
        margin: 20px;
      }

      .greeting {
        position: absolute;
        top: 18%;
        left: 10%;
        font-size: 2.5rem;
        font-weight: 600;
        color: #395c59;

        &::after {
          position: absolute;
          top: 100%;
          left: 2px;
          width: 60%;
          height: 5px;
          background-color: #435e5b;
          content: ' ';
        }
      }
    }

    .masks {
      position: relative;
      z-index: 1;
      width: 98%;
      height: 100%;
      overflow: hidden;

      .mask {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        line-height: 0;
        border-style: solid;
        filter: drop-shadow(0 0 15px rgb(0 0 0 / 30%));

        &:nth-child(1) {
          right: 3%;
          z-index: 4;
          border-color: #a3dfda transparent transparent;
          border-width: calc(var(--page-height) * 0.92)
            calc(var(--page-width) / 2) 0 0;
        }

        &:nth-child(2) {
          top: 25%;
          right: 32%;
          z-index: 3;
          border-color: #819fa4 transparent transparent;
          border-width: calc(var(--page-height)) calc(var(--page-width) * 0.15)
            0 0;
          transform: rotateX(180deg);
        }

        &:nth-child(3) {
          z-index: 2;
          border-color: #5f8385 transparent transparent;
          border-width: calc(var(--page-height) * 2.6)
            calc(var(--page-width) / 1.9) 0 0;
        }

        &:nth-child(4) {
          bottom: 0;
          z-index: 1;
          border-color: transparent transparent #ccc;
          border-width: 0 calc(var(--page-width) * 0.47)
            calc(var(--page-height)) calc(var(--page-width) * 0.2);
        }
      }
    }
  }

  .bottomMusk {
    @include pad {
      position: absolute;
      right: -500px;
      bottom: -360px;
      display: inline;
      width: 760px;
      height: 500px;
      background-color: #819fa4;
      transform: rotate(-45deg);
      box-shadow: 5px 5px 20px 7px #00000050;
    }

    display: none;
  }
}
</style>
