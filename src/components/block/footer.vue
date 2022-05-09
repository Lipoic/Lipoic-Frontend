<template>
  <div class="footer">
    <div class="logo">
      <img
        src="https://raw.githubusercontent.com/Lipoic/Lipoic-Assets/main/logo/logo.svg"
        alt="Lipoic"
      />
    </div>
    <div class="copyright">Copyright © 2022 Lipoic. All rights reserved.</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
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
      width: 35px;
      height: auto;
    }
  }
  .copyright {
    color: $White;
  }
}
</style>
