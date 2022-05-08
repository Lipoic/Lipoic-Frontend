<script lang="ts" setup>
import logo from '../assets/logo.png';
</script>

<template>
  <div class="footer">
    <div class="logo"><img :src="logo" alt="Lipoic" /></div>
    <div class="copyright">Copyright © 2022 Lipoic. All rights reserved.</div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/global.scss';
.footer {
  background-color: $Black;
  padding: 30px;
  text-align: center;
  z-index: 5;
  position: relative;
  .logo {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $White;
    border-radius: 50%;
    padding: 3px;
    border: 3px solid $LightGreen;
    img {
      width: 30px;
      height: auto;
    }
  }
  .copyright {
    color: $White;
  }
}
</style>
