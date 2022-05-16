<script lang="ts" setup>
import { reactive } from 'vue';

interface loginData {
  username: string;
  password: string;
  stayLoggedIn: boolean;
}
const loginFormData = reactive<loginData>({
  username: '',
  password: '',
  stayLoggedIn: false,
});
</script>

<template>
  <div class="login">
    <div class="left">
      <div class="masks">
        <div class="mask" v-for="_ in 4" :key="_" />
      </div>
    </div>
    <div class="right">
      <div class="header" v-t="'auth.login.title'" />
      <form class="block">
        <div class="email">
          <input
            type="email"
            name="userName"
            id="userName"
            v-model="loginFormData.username"
            autocomplete="username"
            :aria-label="$t('auth.login.usernameInput')"
          />
          <div
            for="userName"
            v-t="'auth.login.usernameInput'"
            aria-hidden="true"
          />
        </div>
        <div class="password">
          <input
            type="password"
            name="password"
            id="password"
            v-model="loginFormData.password"
            autocomplete="current-password"
            :aria-label="$t('auth.login.password')"
          />
          <div for="password" v-t="'auth.login.password'" aria-hidden="true" />
        </div>
        <div class="loginOptions">
          <div class="stayLogin">
            <input
              v-model="loginFormData.stayLoggedIn"
              type="checkbox"
              name="stayLogin"
              id="stayLogin"
            />
            <label for="stayLogin" v-t="'auth.login.stayLoggedIn'" />
          </div>
          <a
            href="#"
            class="forgot"
            v-test="`${$t('auth.login.forgotPassword')}?`"
          >
          </a>
        </div>
        <button class="loginButton" v-t="'auth.login.loginButton'" />
        <p v-t="'auth.login.haveNoAccount'" />
        <p class="signup" v-t="'auth.login.registerNow'" />
        <hr />
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

$BackgroundColor: #4d4d4d;

.login {
  color: $White;
  background-color: $BackgroundColor;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  .right {
    position: absolute;
    left: 50%;
    width: 50%;
    height: 100%;
    display: flex;
    padding: 5% calc(5% + 20px) 5% 5%;
    display: flex;
    flex-direction: column;

    .header {
      font-size: 2rem;
      font-weight: 600;
      position: relative;
      margin-bottom: 40px;

      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 8px;
        background-color: $MainColor;
        width: 50px;
        height: 5px;
      }
    }
    //     & > input {
    //       border: none;
    //       border-radius: 15px;
    //       padding: 12px 20px;
    //       font-size: 1.2rem;
    //       background-color: #7c7b7b33;
    //       outline: none;
    //       margin-bottom: 20px;
    //       color: $White;
    //     }

    //     .loginOptions {
    //       display: flex;
    //       flex-direction: row;
    //       justify-content: space-between;
    //       align-items: center;
    //       margin-bottom: 20px;

    //       .stayLogin {
    //         display: flex;
    //         flex-direction: row;
    //         align-items: center;
    //         padding: 0 5px;
    //         input[type='checkbox'] {
    //           outline: none;
    //           width: 18px;
    //           height: 18px;
    //           border-radius: 5px;
    //           accent-color: $MainColor;
    //         }
    //         label {
    //           margin-left: 5px;
    //           line-height: 18px;
    //           color: $White;
    //         }
    //       }

    //       a {
    //         color: $White;
    //       }
    //     }

    //     button {
    //       margin-bottom: 20px;
    //       border-radius: 15px;
    //       border: none;
    //       padding: 10px;
    //       font-size: 1.5rem;
    //       color: $White;
    //       cursor: pointer;
    //       background-color: $MainPurple;
    //     }

    //     p {
    //       color: $White;
    //       text-align: center;
    //       &.signup {
    //         color: $MainColor;
    //         text-decoration: underline;
    //         cursor: pointer;
    //       }
    //     }

    //     hr {
    //       margin-top: 20px;

    .block {
      .email,
      .password {
        position: relative;
        margin-bottom: 20px;
        input {
          width: 100%;
          outline: none;
          z-index: 1;
          padding: 13px 15px;
          margin: 1px 1px 0 1px;
          border-radius: 5px;
          background-color: $BackgroundColor;
          border: 2px solid #dadce0;
          &:focus {
            border: 2px solid #1a73e8;
            ~ div {
              padding: 2px 4px;
              color: #1a73e8;
              background-color: $BackgroundColor;
              transform: scale(0.75) translateY(-28px);
            }
          }
        }
        div {
          left: 8px;
          bottom: 25%;
          position: absolute;
          z-index: 1;
          padding: 0 8px;
          border-radius: 2px;
          transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }
      }
    }
  }
  .left {
    position: absolute;
    right: 50%;
    width: 100%;
    height: 100%;
    .masks {
      width: 98%;
      height: 100%;
      overflow: hidden;
      position: relative;
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
}
</style>
