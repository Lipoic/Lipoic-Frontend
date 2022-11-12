<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import UserInfoHeader from '@/components/header/UserInfoHeader.vue';
import { useUserStore } from '@/stores/models/user';
import PageLinksVue from '@/components/header/PageLinks.vue';
import LoginButtonVue from '@/components/auth/LoginButton.vue';

const userStore = useUserStore();

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
    <div class="logo">
      <SvgIcon name="logo" width="60px" height="60px" />
      <div class="name">
        <h1>Lipoic</h1>
        <span>EDU</span>
      </div>
    </div>

    <div class="links">
      <PageLinksVue direction="row" :login-button="false" class="desktop" />
      <div v-if="userStore.isLoggedIn() && userStore.info">
        <UserInfoHeader :user="userStore.info" />
      </div>
      <div v-else>
        <input
          id="menuToggle"
          style="display: none"
          type="checkbox"
          name="menuToggle"
          :checked="isMenuOpen"
          @input="updateMenuState"
        />
        <label for="menuToggle" class="menuButton">
          <SvgIcon name="other-menu" color="white" width="32px" height="32px" />
        </label>
        <PageLinksVue
          direction="column"
          :login-button="!userStore.isLoggedIn()"
          class="phone"
        />
        <LoginButtonVue class="loginButton" />
      </div>
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

  .links {
    display: flex;
    align-items: center;

    .loginButton {
      padding-right: 10px;

      @include phone {
        display: none;
      }
    }

    .phone {
      display: none;

      @include phone {
        display: flex;
      }
    }

    .desktop {
      padding-right: 10px;

      @include phone {
        display: none;
      }
    }

    .menuButton {
      display: none;

      @include phone {
        display: block;
        cursor: pointer;

        & ~ .links {
          position: absolute;
          top: 75px;
          right: 0;
          z-index: 100;
          width: 100%;
          padding: 30px 0;
          background-color: $DarkBlack;
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
        }
      }
    }
  }
}

#menuToggle:checked ~ .links {
  transform: scale(1);

  li,
  a {
    opacity: 1;
  }
}
</style>
