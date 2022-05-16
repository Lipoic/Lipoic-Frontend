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
      width: 98%;
      height: 100%;
      overflow: hidden;
      position: relative;
      .mask {
        filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.3));
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        line-height: 0;

        &:nth-child(1) {
          top: -25%;
          transform: rotate(-45deg) translateY(-9%);
          background-color: #a3dfda;

          z-index: 4;
        }
        &:nth-child(2) {
          top: 50%;
          bottom: 0;
          transform: rotate(72deg) translateY(25%);
          background-color: #819fa4;

          z-index: 3;
        }
        &:nth-child(3) {
          border-style: solid;
          border-width: calc(var(--page-height) * 2.5)
            calc(var(--page-width) / 1.9) 0 0;
          border-color: #5f8385 transparent transparent transparent;

          z-index: 2;
        }
        &:nth-child(4) {
          top: 100%;
          bottom: 0;
          transform: rotate(53deg) translateY(-50%);
          background-color: #cccccc;

          z-index: 1;
        }
      }
    }
  }
}
</style>
