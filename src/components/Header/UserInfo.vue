<template>
  <div v-if="userStore.isLoggedIn() && userStore.info" class="user">
    <div
      class="user-info"
      :title="`more ${userStore.info.username}`"
      :aria-label="`more ${userStore.info.username}`"
    >
      <img
        v-memo="userStore.info"
        class="user-icon"
        src="https://cdn.discordapp.com/avatars/688181698822799414/f6534feffc3f15cf439cb2fdd579aab5.png"
        :alt="`${userStore.info.username} avatar`"
      />
    </div>
    <SvgIcon name="login-ExpandMore" class="expand-more" color="white" />
    <ul class="user-more">
      <li>option1</li>
      <li>option2</li>
      <li>option3</li>
      <li class="sign-out">登出</li>
    </ul>
  </div>
  <div v-else class="user" :open="menuState" @click="toggleMenu()">
    <router-link
      v-once
      v-t="'header.login'"
      to="/account"
      class="login"
      :title="$t('header.login')"
      :aria-label="$t('header.login')"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { useUserStore } from '@/stores/models/user';

const menuState = ref<undefined | ''>(void 0);
const toggleMenu = (state?: boolean) => {
  menuState.value = state ?? menuState.value !== void 0 ? void 0 : '';
};

const userStore = useUserStore();
</script>

<style lang="scss" scoped>
.user {
  position: relative;
  z-index: 9;
  display: flex;
  align-items: center;

  .login {
    padding: 4px 10px;
    color: #fff;
    background-color: #3796ff;
    border-radius: 5px;
    transition: background-color 200ms ease-in-out;

    &:hover {
      background-color: #377dff !important;
    }
  }

  .expand-more {
    transition: transform 0.15s ease-out 0s;
  }

  .user-info {
    display: flex;
    align-items: center;

    .user-icon {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }

  &:not([open]) .user-more {
    display: none;
  }

  &[open] {
    .expand-more {
      transform: rotate(180deg);
    }

    .user-more {
      position: absolute;
      top: 100%;
      left: -50%;
      min-width: 100px;
      padding: 12px;
      margin-top: 12px;
      color: rgb(160 160 160);
      list-style: none;
      background-color: #17181e;
      border-radius: 6px;

      li {
        padding: 5px 12px;
        font-size: 14pt;
        font-weight: 500;
        cursor: pointer;
        transition: color 0.15s ease-in-out;

        &:hover {
          color: white !important;
        }

        &:not(:first-child) {
          margin-top: 8px;
        }

        &.sign-out {
          color: red;
        }
      }
    }
  }
}
</style>
