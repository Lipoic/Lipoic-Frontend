<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import UserInfoHeader from '@/components/header/UserInfoHeader.vue';
import { useUserStore } from '@/stores/models/user';
import PageLinksVue from './PageLinks.vue';
import LoginButtonVue from './LoginButton.vue';

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

const userStore = useUserStore();
</script>

<template>
  <div class="header">
    <input
      id="menuToggle"
      style="display: none"
      type="checkbox"
      name="menuToggle"
      :checked="isMenuOpen"
      @input="updateMenuState"
    />
    <div class="logo">
      <SvgIcon name="logo" class="svg" />
      <div class="name">
        <h1>Lipoic</h1>
        <span>EDU</span>
      </div>
    </div>
    <div v-if="userStore.isLoggedIn() && userStore.info">
      <UserInfoHeader :info="userStore.info"></UserInfoHeader>
    </div>
    <div v-else>
      <label for="menuToggle" class="menuButton">
        <SvgIcon name="other-menu" color="white" />
      </label>
      <div class="links">test</div>

      <!-- <PageLinksVue direction="column" class="links"></PageLinksVue> -->
      <LoginButtonVue class="loginButton"></LoginButtonVue>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

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
        color: white;
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

  .menuButton {
    display: none;

    @include phone {
      display: block;
      padding-right: 10px;

      & ~ .links {
        position: absolute;
        flex-direction: column;
        top: 75px;
        right: 0;
        z-index: 100;
        width: 100%;
        padding: 30px 0;
        background-color: #1b1b1b;
        transform: scale(0, 1);
        animation: slide 1s;
        transition: transform 1s;
        transform-origin: center right;
        @keyframes slide {
          from,
          to {
            z-index: -1;
          }
        }

        li {
          width: 100%;
          padding: 0;
          text-align: center;

          a[href] {
            display: block;
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            font-weight: initial;
            color: white;
            text-align: center;
            border: none;
            opacity: 0;

            &:hover {
              background-color: #353535;
            }
          }
        }
      }
    }
  }

  .loginButton {
    padding-right: 10px;
    padding-left: 5px;

    @include phone {
      display: none;
    }
  }

  #menuToggle:checked ~ .links {
    transform: scale(1);

    li,
    a {
      opacity: 1;
    }
  }
}
</style>
