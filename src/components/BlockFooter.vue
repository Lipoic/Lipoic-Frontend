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
    <div v-t="'footer.copyright'" class="copyright" />
    <ToolLangSelector />
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/global.scss';

.footer {
  position: relative;
  z-index: 5;
  padding: 30px;
  text-align: center;
  background-color: $Black;

  .logo {
    position: absolute;
    top: 0;
    left: 50%;
    padding: 3px;
    background-color: $Black;
    border: 3px solid $MainColor;
    border-radius: 50%;
    transform: translate(-50%, -50%);

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
