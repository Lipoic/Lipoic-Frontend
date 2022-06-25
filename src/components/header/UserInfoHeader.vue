<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';

import md5 from 'md5';
import { useUserStore } from '@/stores/models/user';
import { UserInfo } from '@/api/user/type';

const PageLinks = defineAsyncComponent(
  () => import('@/components/header/PageLinks.vue')
);

const menuState = ref<undefined | ''>(void 0);
const toggleMenu = (state?: boolean) => {
  menuState.value = state ?? menuState.value !== void 0 ? void 0 : '';
};

const userStore = useUserStore();

function getUserAvatar(info: UserInfo) {
  // TODO: because the backend does not provide the avatar URL, so temporary use gravatar.
  return `https://www.gravatar.com/avatar/${md5(info.email)}`;
}
</script>

<template>
  <div
    v-if="userStore.isLoggedIn() && userStore.info"
    class="user"
    :open="menuState"
    @click="toggleMenu()"
  >
    <div class="user-info" :title="`More info`" :aria-label="`More info`">
      <img
        class="user-icon"
        :src="getUserAvatar(userStore.info)"
        :alt="`${userStore.info.username}'s avatar`"
      />
    </div>
    <SvgIcon name="login-ExpandMore" class="expand-more" color="white" />
    <ul class="user-more">
      <PageLinks />
      <li class="logout" @chick="userStore.logout()">登出</li>
    </ul>
  </div>
  <div v-else class="user">
    <router-link
      v-once
      v-t="'header.login'"
      to="/account"
      class="login"
      :title="$t('header.login')"
      :aria-label="$t('header.login')"
    />
    <div class="menuButton"><SvgIcon name="other-menu" color="white" /></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.user {
  position: relative;
  z-index: 9;
  display: flex;
  align-items: center;

  .menuButton {
    display: none;

    @include phone {
      display: block;
      padding-right: 10px;

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
      left: -55%;
      padding: 10px 25px;
      margin-top: 12px;
      color: rgb(160 160 160);
      list-style: none;
      background-color: $DarkBlack;
      border-radius: 6px;

      li {
        padding: 5px;
        font-size: 1.3rem;
        font-weight: 500;
        cursor: pointer;
        transition: color 0.15s ease-in-out;

        &:not(:first-child) {
          margin-top: 8px;
        }

        &.logout {
          color: red;
        }
      }
    }
  }
}
</style>
