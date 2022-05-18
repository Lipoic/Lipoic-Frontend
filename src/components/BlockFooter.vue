<script lang="ts" setup>
import ToolLangSelector from './ToolLangSelector.vue';
</script>

<template>
  <div class="footer">
    <div class="logo">
      <img
        src="https://raw.githubusercontent.com/Lipoic/Lipoic-Assets/main/logo/logo.svg"
        alt="Lipoic"
      />
    </div>
    <div class="copyright" v-t="'footer.copyright'" />
    <ToolLangSelector />
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
    border: 3px solid $MainColor;
    background-color: $Black;

    img {
      width: 35px;
      height: 35px;
    }
  }
  .copyright {
    color: $White;
  }
}
</style>
