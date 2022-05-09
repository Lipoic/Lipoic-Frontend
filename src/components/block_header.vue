<script lang="ts" setup>
import menuImg from '@/assets/menu.svg';

const links = [
  { path: '/', name: '首頁' },
  { path: '/about', name: '關於' },
  { path: '/feature', name: '特色' },
];
</script>

<template>
  <div class="header">
    <input
      style="display: none"
      type="checkbox"
      id="menuToggle"
      name="menuToggle"
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
    <div class="links">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="link.path" v-text="link.name" />
        </li>
        <li>
          <router-link to="/account" class="login">LOGIN</router-link>
        </li>
      </ul>
    </div>
    <label for="menuToggle" class="menuButton">
      <img :src="menuImg" alt="MENU" />
    </label>
    <div class="links-rwd">
      <ul>
        <li v-for="(link, index) in links" :key="index">
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

#menuToggle:checked ~ .links-rwd {
  transform: scale(1);
  ul {
    opacity: 1;
  }
  a {
    opacity: 1;
  }
}

.header {
  width: 100vw;
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

    @include phone {
      display: none;
    }

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
    @include phone {
      display: block;
    }
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
  .links-rwd {
    display: none;
    @include phone {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    position: absolute;
    background-color: #1b1b1b;
    width: 100vw;
    top: 75px;
    right: 0;
    transform-origin: center right;
    transform: scale(0, 1);
    transition: 1s;
    z-index: 100;
    padding: 30px 0;

    > a {
      opacity: 0;
      transition: 1.5s;
      font-size: 1rem;
      background-color: transparent;
      border: 1px solid $LightGreen;
      color: $LightGreen;
      border-radius: 5px;
      padding: 5px 15px;
      text-decoration: none;
      transition: 0.2s;
    }

    ul {
      list-style: none;
      opacity: 0;
      transition: 1.5s;
      li {
        width: 100vw;
        text-align: center;
        margin-bottom: 10px;
        padding: 10px;

        a {
          @extend %link;
          font-size: 1rem;
        }
        &:hover {
          background-color: $Black;
        }
      }
    }
  }
}
</style>
