<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import menuImg from '@/assets/menu.svg';
import { SwipeEvent } from '@/utils/touch';

const lunks = [
  { path: '/', name: '首頁' },
  { path: '/about', name: '關於' },
  { path: '/feature', name: '特色' },
  { path: '/demo', name: '展示' },
];

/**menu */
const isMenuOpen = ref<boolean>();
const checkMenuOpen = () => {
  if (window.innerWidth >= 700) isMenuOpen.value = false;
};
const updataMenuState: (ev: Event) => void = ({ target }) => {
  isMenuOpen.value = (target as HTMLInputElement | null)?.checked;
};
onMounted(() => {
  const swipe = new SwipeEvent(document);

  swipe
    .on('right', () => (isMenuOpen.value = false))
    .on('left', () => (isMenuOpen.value = true));

  window.addEventListener('resize', checkMenuOpen);
  onUnmounted(() => {
    swipe.destroy();
    window.removeEventListener('resize', checkMenuOpen);
  });
});
</script>

<template>
  <div class="header">
    <input
      style="display: none"
      type="checkbox"
      id="menuToggle"
      name="menuToggle"
      @input="updataMenuState"
      :checked="isMenuOpen"
    />
    <div class="logo">
      <img
        src="https://raw.githubusercontent.com/Lipoic/Lipoic-Assets/main/logo/logo.svg"
        alt="Lipoic"
      />
      <div class="name">
        <h1>Lipoic</h1>
        <span>EDU</span>
      </div>
    </div>
    <label for="menuToggle" class="menuButton">
      <img :src="menuImg" alt="MENU" />
    </label>
    <div class="links">
      <ul>
        <li v-for="(link, index) in lunks" :key="index">
          <router-link :to="link.path" v-text="link.name" />
        </li>
        <li>
          <router-link to="/account" class="login">LOGIN</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.header {
  width: 100%;
  padding: 10px 25px;
  background-color: $Black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      width: 60px;
      height: auto;
    }

    .name {
      margin-top: -10px;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        font-size: 2rem;
        font-weight: 300;
        color: $White;
      }

      span {
        font-size: 0.8rem;
        font-weight: 500;
        color: $Black;
        background-color: $LightGreen;
        padding: 2px 5px;
        border-radius: 2px;
      }
    }
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;

    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      align-items: center;
    }

    li {
      padding-right: 30px;

      .router-link-exact-active {
        color: $LightGreen;
      }

      a {
        @extend %link;
        transition: color 0.3s ease-in;
        font-size: 1.1rem;
        font-weight: 500;

        &:hover {
          color: $LightGreen;
        }
      }
      .login {
        font-size: 1rem;
        background-color: transparent;
        border: 1px solid $LightGreen;
        color: $LightGreen;

        border-radius: 5px;
        padding: 5px 15px;

        text-decoration: none;
        transition: 0.2s ease-in-out;

        &:hover {
          background-color: $LightGreen;
          color: $White;
        }
      }
    }
  }

  .menuButton {
    display: none;
    width: 35px;
    height: 35px;
    cursor: pointer;

    @include phone {
      display: block;

      & ~ .links {
        animation: slide 1s;
        z-index: 100;
        @keyframes slide {
          from,
          to {
            z-index: -1;
          }
        }
        width: 100%;
        position: absolute;
        background-color: #1b1b1b;
        top: 75px;
        right: 0;
        transform: scale(0, 1);
        transform-origin: center right;
        transition: transform 1s;
        padding: 30px 0;

        ul {
          flex-direction: column;
          width: 100%;
          li {
            width: 100%;
            padding: 0;
            text-align: center;
            a[href] {
              width: 100%;
              display: block;
              opacity: 0;
              padding: 0;
              width: 100%;
              color: $White;
              border: none;
              text-align: center;
              font-weight: initial;
              padding: 10px;
              margin-bottom: 10px;

              &:hover {
                background-color: #353535;
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
}
</style>
