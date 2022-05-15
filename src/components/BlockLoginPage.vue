<script lang="ts" setup></script>

<template>
  <div class="login">
    <div class="left">
      <div class="mask" v-for="_ in 4" :key="_"></div>
    </div>
    <div class="right">
      <h1>LOGIN</h1>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/scss/global.scss';
.login {
  background-color: #4d4d4d;

  width: 100%;
  height: calc(100% - $FooterHeight - $HeaderHeight);
  display: flex;
}
</style>
