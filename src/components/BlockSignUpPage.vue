<script lang="ts" setup>
import { reactive } from 'vue';
import ToolLangSelector from './ToolLangSelector.vue';

interface signUpData {
  username: string;
  password: string;
  email: string;
}
const signUpFormData = reactive<signUpData>({
  username: '',
  password: '',
  email: '',
});
</script>

<template>
  <div class="login">
    <div class="left">
      <div class="hello">
        <router-link to="/">
          <SvgIcon
            name="login-arrow"
            class="goBack"
            style="width: 80px; height: 80px"
          />
        </router-link>
        <span v-t="'auth.login.welcome'" class="greeting" />
      </div>
      <div class="masks">
        <div v-for="_ in 4" :key="_" class="mask" />
      </div>
    </div>
    <div class="right">
      <router-link to="/" class="goBack">
        <SvgIcon
          name="login-arrow"
          class="arrow"
          style="width: 25px; height: 25px"
        />
      </router-link>
      <form method="POST">
        <div class="header">
          <span v-t="'auth.signUp.title'" />
        </div>
        <!-- TODO: add pattern & max length-->
        <input
          v-model="signUpFormData.username"
          required
          type="text"
          name="user"
          maxlength=""
          pattern="^[a-zA-Z0-9]+$|(^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$)"
          :aria-label="$t('auth.login.usernameInput')"
          :placeholder="$t('auth.login.usernameInput')"
          autocomplete="username"
        />
        <input
          v-model="signUpFormData.email"
          required
          type="text"
          name="email"
          pattern="^[a-zA-Z0-9]+$|(^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$)"
          :aria-label="$t('auth.signUp.email')"
          :placeholder="$t('auth.signUp.email')"
          autocomplete="email"
        />
        <!-- TODO: add pattern & max length-->
        <input
          v-model="signUpFormData.password"
          required
          type="password"
          name="password"
          :aria-label="$t('auth.login.password')"
          :placeholder="$t('auth.login.password')"
          pattern="[a-zA-Z0-9]{8,}"
          autocomplete="current-password"
        />
        <button
          v-t="'auth.signUp.signUpButton'"
          class="signUpButton"
          type="submit"
        />
        <p v-t="'auth.signUp.alreadyHaveAccount'" />
        <p>
          <router-link
            v-t="'auth.signUp.loginNow'"
            to="/account/login"
            class="login"
          />
        </p>
        <ToolLangSelector class="langSelector" />
      </form>
    </div>
    <div class="bottomMusk"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.login {
  background-color: #3d494a;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  .right {
    position: absolute;
    left: 50%;
    width: 50%;
    height: 100%;
    padding: 0 0 0 8%;

    @include pad {
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;

      form > .header {
        padding: 0;
        text-align: center;
      }
    }

    .goBack {
      display: none;
      @include pad {
        display: inline;
        position: absolute;
        top: -360px;
        left: -500px;
        height: 500px;
        width: 800px;
        background-color: $MainColor;
        box-shadow: 5px 5px 20px 7px #00000050;
        transform: rotate(-45deg);

        .arrow {
          position: absolute;
          bottom: 30px;
          left: 47%;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      max-width: 400px;

      & > * {
        width: 100%;
      }

      @include pad {
        max-width: 80vw;
      }
      .header {
        font-size: 2rem;
        font-weight: 600;
        color: $White;
        position: relative;
        padding: 0 10px 30px 20px;

        span {
          position: relative;
          &:after {
            content: ' ';
            position: absolute;
            top: 100%;
            left: 0;
            background-color: $MainColor;
            width: 100%;
            height: 5px;
          }
        }
      }
      & > input {
        border: none;
        max-width: 90vw;
        border-radius: 15px;
        padding: 12px 20px;
        font-size: 1.2rem;
        background-color: #7c7b7b33;
        outline: none;
        margin-top: 10px;
        color: $White;
        &:invalid {
          ~ .loginButton {
            pointer-events: none;
            opacity: 0.5;
          }
        }
      }

      & > button {
        margin: 20px;
        border-radius: 15px;
        border: none;
        padding: 10px;
        font-size: 1.5rem;
        color: $White;
        cursor: pointer;
        background-color: $MainPurple;
      }

      p {
        color: $White;
        text-align: center;
      }

      a {
        color: $MainColor;
        text-decoration: underline;
        cursor: pointer;
        display: inline;
      }
      .langSelector {
        margin-top: 10px;
      }
    }
  }
  .left {
    position: absolute;
    right: 50%;
    width: 100%;
    height: 100%;
    @include pad {
      display: none;
    }
    .hello {
      z-index: 2;
      left: 50%;
      width: 50%;
      height: 100%;
      position: absolute;
      .goBack {
        margin: 20px;
        padding: 5px;
      }

      .greeting {
        font-size: 2.5rem;
        font-weight: 600;
        color: #395c59;
        position: absolute;
        left: 10%;
        top: 18%;
        &:after {
          content: ' ';
          position: absolute;
          top: 100%;
          left: 2px;
          background-color: #435e5b;
          width: 60%;
          height: 5px;
        }
      }
    }
    .masks {
      width: 98%;
      height: 100%;
      overflow: hidden;
      position: relative;
      z-index: 1;
      .mask {
        filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.3));
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        line-height: 0;

        border-style: solid;
        &:nth-child(1) {
          border-width: calc(var(--page-height) * 0.92)
            calc(var(--page-width) / 2) 0 0;
          right: 3%;
          border-color: #a3dfda transparent transparent transparent;

          z-index: 4;
        }
        &:nth-child(2) {
          border-width: calc(var(--page-height)) calc(var(--page-width) * 0.15)
            0 0;
          right: 32%;
          top: 25%;
          border-color: #819fa4 transparent transparent transparent;
          transform: rotateX(180deg);

          z-index: 3;
        }
        &:nth-child(3) {
          border-width: calc(var(--page-height) * 2.6)
            calc(var(--page-width) / 1.9) 0 0;
          border-color: #5f8385 transparent transparent transparent;

          z-index: 2;
        }
        &:nth-child(4) {
          border-width: 0 calc(var(--page-width) * 0.47)
            calc(var(--page-height)) calc(var(--page-width) * 0.2);
          border-color: transparent transparent #cccccc transparent;
          bottom: 0;

          z-index: 1;
        }
      }
    }
  }
  .bottomMusk {
    display: none;
    @include pad {
      display: inline;
      position: absolute;
      bottom: -360px;
      right: -500px;
      height: 500px;
      width: 760px;
      background-color: #819fa4;
      box-shadow: 5px 5px 20px 7px #00000050;
      transform: rotate(-45deg);
    }
  }
}
</style>
