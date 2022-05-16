<script lang="ts" setup></script>

<template>
  <div class="login">
    <div class="left">
      <div class="masks">
        <div class="mask" v-for="_ in 4" :key="_" />
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<style lang="scss">
@import '@/scss/global.scss';

.login {
  background-color: #4d4d4d;

  width: 100%;
  height: 100%;
  display: flex;
  .left {
    position: relative;
    right: 50%;
    width: 100%;
    height: 100%;
    .masks {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      .mask {
        filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.2));
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        line-height: 0;

        &:nth-child(1) {
          border-style: solid;
          border-width: calc(var(--page-height) * 0.8)
            calc(var(--page-width) / 2) 0 0;
          transform: translateX(-4%);
          border-color: #a3dfda transparent transparent transparent;

          z-index: 4;
        }
        &:nth-child(2) {
          z-index: 3;
        }
        &:nth-child(3) {
          border-style: solid;
          border-width: calc(var(--page-height) * 1.5)
            calc(var(--page-width) / 2) 0 0;
          border-color: #5f8385 transparent transparent transparent;
          z-index: 2;
        }
        &:nth-child(4) {
          z-index: 1;
        }
      }
    }
  }
}
</style>
