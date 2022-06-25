<script lang="ts" setup>
import { ref } from 'vue';

import md5 from 'md5';
import { useUserStore } from '@/stores/models/user';
import { UserInfo } from '@/api/user/type';
import PageLinksVue from '@/components/header/PageLinks.vue';

const props = defineProps<{ info: UserInfo }>();

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
  <div class="user" :open="menuState" @click="toggleMenu()">
    <div class="user-info" :title="`More info`" :aria-label="`More info`">
      <img
        class="user-icon"
        :src="getUserAvatar(props.info)"
        :alt="`${props.info.username}'s avatar`"
      />
    </div>
    <SvgIcon name="login-ExpandMore" class="expand-more" color="white" />
    <ul class="user-more">
      <PageLinksVue direction="row"></PageLinksVue>
      <li class="logout" @chick="userStore.logout()">登出</li>
    </ul>
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
