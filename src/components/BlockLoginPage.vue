<script lang="ts" setup>
import { reactive } from 'vue';
import FaceBookSvg from '@/assets/login/facebook.svg';
import GoogleSvg from '@/assets/login/google.svg';
import TaiwanOpenIdSvg from '@/assets/login/taiwanOpenId.svg';

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

const oauthButtons = [
  { title: 'Google', img: GoogleSvg },
  { title: 'FaceBook', img: FaceBookSvg },
  { title: '臺灣雲端教育雲帳號', img: TaiwanOpenIdSvg },
];
</script>

<template>
  <div class="login">
    <div class="left">
      <div class="masks">
        <div class="mask" v-for="_ in 4" :key="_" />
      </div>
    </div>
    <div class="right">
      <form method="POST">
        <div class="header">
          <span v-t="'auth.login.title'" />
        </div>
        <input
          required
          type="text"
          name="user"
          maxlength=""
          pattern="[A-Za-z0-9]+"
          v-model="loginFormData.username"
          :aria-label="$t('auth.login.usernameInput')"
          :placeholder="$t('auth.login.usernameInput')"
          autocomplete="username"
        />
        <input
          required
          type="password"
          name="password"
          v-model="loginFormData.password"
          :aria-label="$t('auth.login.password')"
          :placeholder="$t('auth.login.password')"
          pattern="[a-zA-Z0-9]{8,}"
          autocomplete="current-password"
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
        <hr style="border-color: #ababab" />
        <p>{{ $t('auth.login.useOtherMethods') }}</p>
        <div class="oauthButtons">
          <button
            class="oauthButton"
            v-for="({ title, img }, index) in oauthButtons"
            :key="index"
          >
            <img :alt="title" :title="title" :aria-label="title" :src="img" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

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
    padding: 0 0 0 8%;

    @include pad {
      left: 0;
      width: 100%;
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      justify-content: center;
      max-width: 400px;
      min-width: 300px;

      @include pad {
        max-width: 80vw;
      }
      .header {
        font-size: 2rem;
        font-weight: 600;
        color: $White;
        position: relative;
        margin-bottom: 30px;
        margin: 0 10px 30px 20px;

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
        align-items: center;
        justify-content: center;
        margin-top: 10px;

        .oauthButton {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          padding: 2px;
          border-radius: 50%;
          img {
            width: 40px;
            border-radius: 50%;
            height: 40px;
          }
          &:not(:last-child) {
            margin-right: 20px;
          }
          &:nth-child(1) {
            background-color: #ffffff;
          }
          &:nth-child(2) {
            background-color: #ffffff;
          }
          &:nth-child(3) {
            background-color: #30a1d4;
          }
        }
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
