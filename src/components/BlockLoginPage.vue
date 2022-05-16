<script lang="ts" setup></script>

<template>
  <div class="login">
    <div class="left">
      <div class="masks">
        <div class="mask" v-for="_ in 4" :key="_" />
      </div>
    </div>
    <div class="right">
      <div class="header"></div>
      <form class="block">
        <input
          type="email"
          name="user"
          :aria-label="$t('auth.login.usernameInput')"
          :placeholder="$t('auth.login.usernameInput')"
        />
        <input
          type="password"
          name="password"
          :aria-label="$t('auth.login.password')"
          :placeholder="$t('auth.login.password')"
        />
      </form>
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
