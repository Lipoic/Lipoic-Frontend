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
      <div class="form">
        <div class="header">{{ $t('auth.login.title') }}</div>
        <input
          type="email"
          name="user"
          v-model="loginFormData.username"
          :aria-label="$t('auth.login.usernameInput')"
          :placeholder="$t('auth.login.usernameInput')"
        />
        <input
          type="password"
          name="password"
          v-model="loginFormData.password"
          :aria-label="$t('auth.login.password')"
          :placeholder="$t('auth.login.password')"
        />
        <div class="loginOptions">
          <div class="stayLogin">
            <input
              v-model="loginFormData.stayLoggedIn"
              type="checkbox"
              name="stayLogin"
              id="stayLogin"
            />
            <label for="stayLogin"> {{ $t('auth.login.stayLoggedIn') }} </label>
          </div>
          <a href="#" class="forgot">
            {{ $t('auth.login.forgotPassword') }} ?</a
          >
        </div>
        <button class="loginButton">
          {{ $t('auth.login.loginButton') }}
        </button>
        <p>{{ $t('auth.login.haveNoAccount') }}</p>
        <p class="signup">{{ $t('auth.login.registerNow') }}</p>
        <hr />
        <p>{{ $t('auth.login.useOtherMethods') }}</p>
        <div class="oauthButtons">
          <button class="oauthButt">Google</button>
          <button class="oauthButt">FaceBook</button>
          <button class="oauthButt">臺灣雲端教育雲帳號</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/scss/global.scss';

.login {
  background-color: #4d4d4d;

  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  .right {
    position: absolute;
    left: 50%;
    width: 50%;
    height: 100%;
    padding: 0 0 0 50px;

    .form {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      max-width: 400px;
      min-width: 300px;
      .header {
        font-size: 2rem;
        font-weight: 600;
        color: $White;
        position: relative;
        margin-bottom: 30px;

        &::after {
          content: ' ';
          position: absolute;
          top: 100%;
          left: 8px;
          background-color: $MainColor;
          width: 50px;
          height: 5px;
        }
      }
      & > input {
        border: none;
        border-radius: 15px;
        padding: 12px 20px;
        font-size: 1.2rem;
        background-color: #7c7b7b33;
        outline: none;
        margin-top: 10px;
        color: $White;
      }

      .loginOptions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 10px;

        .stayLogin {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 5px;
          input[type='checkbox'] {
            outline: none;
            width: 18px;
            height: 18px;
            border-radius: 5px;
            accent-color: $MainColor;
          }
          label {
            margin-left: 5px;
            line-height: 18px;
            color: $White;
          }
        }

        a {
          color: $White;
        }
      }

      & > button {
        margin-bottom: 20px;
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
        &.signup {
          color: $MainColor;
          text-decoration: underline;
          cursor: pointer;
        }
      }

      hr {
        margin: 12px 20px;
      }

      .oauthButtons {
        display: flex;
        flex-direction: column;

        button {
          border-radius: 5px;
          border: none;
          padding: 10px;
          font-size: 1rem;
          color: $White;
          margin: 10px 0;
          cursor: pointer;
          text-align: start;

          &:nth-child(1) {
            color: #000;
            background-color: #ffffff;
          }
          &:nth-child(2) {
            background-color: #1877f2;
          }
          &:nth-child(3) {
            background-color: #2ea6dc;
          }
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
