<script lang="ts" setup>
import { useRouter } from 'vue-router';
import logoImg from '../assets/logo.png';

const router = useRouter();
const PATH = router.currentRoute.value.path;
</script>

<template>
  <div class="header">
    <div class="logo">
      <img :src="logoImg" alt="Lipoic" />
      <div class="name">
        <h1>Lipoic</h1>
        <span>.EDU</span>
      </div>
    </div>
    <div class="links">
      <ul>
        <li>
          <router-link to="/" :class="PATH === '/' ? 'active' : ''"
            >首頁</router-link
          >
        </li>
        <li>
          <router-link to="/about" :class="PATH === '/about' ? 'active' : ''"
            >關於</router-link
          >
        </li>
        <li>
          <router-link
            to="/feature"
            :class="PATH === '/feature' ? 'active' : ''"
            >特色</router-link
          >
        </li>
      </ul>
      <router-link to="/account">LOGIN</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/global.scss';
.header {
  width: 100vw;
  padding: 10px 25px;
  background-color: $Black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      width: 55px;
      height: auto;
    }

    .name {
      margin-top: -10px;
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
    }
    li {
      margin-right: 44px;

      .active {
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
    }

    > a {
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
</style>
