<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import UserInfoHeader from '@/components/header/UserInfoHeader.vue';

/** Menu handler */
const isMenuOpen = ref<boolean>();
const checkMenuOpen = () => {
  if (window.innerWidth >= 700) isMenuOpen.value = false;
};
const updateMenuState: (ev: Event) => void = ({ target }) => {
  isMenuOpen.value = (target as HTMLInputElement | null)?.checked;
};

const changeMenuCheckboxState = () => (isMenuOpen.value = false);
defineExpose({ changeMenuCheckboxState });

onMounted(() => window.addEventListener('resize', checkMenuOpen));
onUnmounted(() => window.removeEventListener('resize', checkMenuOpen));
</script>

<template>
  <div class="header">
    <!-- <input
      id="menuToggle"
      style="display: none"
      type="checkbox"
      name="menuToggle"
      :checked="isMenuOpen"
      @input="updateMenuState"
    /> -->
    <div class="logo">
      <SvgIcon name="logo" class="svg" />
      <div class="name">
        <h1>Lipoic</h1>
        <span>EDU</span>
      </div>
    </div>
    <UserInfoHeader />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.header {
  display: flex;
  width: 100%;
  padding: 10px 5px;
  background-color: $Black;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
      width: 60px;
      height: 60px;
    }

    .name {
      display: flex;
      margin-top: -10px;
      margin-left: 10px;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        font-size: 2rem;
        font-weight: 300;
        color: $White;
      }

      span {
        padding: 2px 5px;
        font-size: 0.8rem;
        font-weight: 500;
        color: $Black;
        background-color: $MainColor;
        border-radius: 2px;
      }
    }
  }

  // #menuToggle:checked ~ .links {
  //   transform: scale(1);

  //   li,
  //   a {
  //     opacity: 1;
  //   }
  // }
}
</style>
