<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const links = [
  { path: '/', i18nName: 'header.links.home' },
  { path: '/about', i18nName: 'header.links.about' },
  { path: '/feature', i18nName: 'header.links.feature' },
  { path: '/demo', i18nName: 'header.links.demo' },
];

/** Menu handler */
const isMenuOpen = ref<boolean>();
const checkMenuOpen = () => {
  if (window.innerWidth >= 700) isMenuOpen.value = false;
};
const updateMenuState: (ev: Event) => void = ({ target }) => {
  isMenuOpen.value = (target as HTMLInputElement | null)?.checked;
};

const changeMenuCheckboxState = () => (isMenuOpen.value &&= false);

onMounted(() => window.addEventListener('resize', checkMenuOpen));
onUnmounted(() => window.removeEventListener('resize', checkMenuOpen));

defineExpose({ changeMenuCheckboxState });
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
      <SvgIcon name="other-menu" color="white" />
    </label>
    <div class="links">
      <ul>
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <li v-for="link in links" v-once>
          <router-link
            v-t="$t(link.i18nName)"
            :to="link.path"
            :title="$t(link.i18nName)"
          />
        </li>
        <li>
          <router-link
            v-t="$t('header.login')"
            to="/account"
            class="login"
            :title="$t('header.login')"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.header {
  display: flex;
  width: 100%;
  padding: 10px 25px;
  overflow: hidden;
  background-color: $Black;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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
        color: $MainColor;
      }

      a {
        @extend %link;

        font-size: 1.1rem;
        font-weight: 500;
        transition: color 0.3s ease-in;

        &:hover {
          color: $MainColor;
        }
      }

      .login {
        padding: 5px 15px;
        font-size: 1rem;
        color: $MainColor;
        text-decoration: none;
        background-color: transparent;
        border: 1px solid $MainColor;
        border-radius: 5px;
        transition: 0.2s ease-in-out;

        &:hover {
          color: $White;
          background-color: $MainColor;
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
        position: absolute;
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

        ul {
          flex-direction: column;
          width: 100%;

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
              color: $White;
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
