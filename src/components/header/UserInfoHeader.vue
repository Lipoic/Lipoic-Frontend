<script lang="ts" setup>
import { ref } from 'vue';

import md5 from 'md5';
import { useUserStore } from '@/stores/models/user';
import { UserInfo } from '@/api/user/type';
import PageLinksVue from '@/components/header/PageLinks.vue';

const props = defineProps<{ info: UserInfo }>();

const menuState = ref(false);
const toggleMenu = () => {
  menuState.value = !menuState.value;
};

const userStore = useUserStore();

function getUserAvatar(info: UserInfo) {
  // TODO: because the backend does not provide the avatar URL, so temporary use gravatar.
  return `https://www.gravatar.com/avatar/${md5(info.email)}`;
}
</script>

<template>
  <div :class="`user menu-${menuState}`">
    <div
      class="user-info"
      :title="`More info`"
      :aria-label="`More info`"
      @click="toggleMenu()"
    >
      <img
        class="user-icon"
        :src="getUserAvatar(props.info)"
        :alt="`${props.info.username}'s avatar`"
      />
      <SvgIcon name="login-ExpandMore" class="expand-more" color="white" />
    </div>
    <div class="user-more">
      <PageLinksVue
        direction="column"
        :login-button="false"
        class="links"
      ></PageLinksVue>
      <hr />
      <li
        v-t="'header.action.logout'"
        class="logout"
        @click="userStore.logout()"
      ></li>
    </div>
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
}

.menu-false {
  .user-more {
    display: none;
  }
}

.menu-true {
  .expand-more {
    transform: rotate(180deg);
  }

  .user-more {
    position: absolute;
    top: 100%;
    right: 0;
    left: -50px;
    display: flex;
    padding: 10px 25px;
    margin-top: 10px;
    flex-direction: column;
    text-align: center;
    list-style: none;
    background-color: $DarkBlack;
    border-radius: 6px;

    li {
      padding-top: 5px;
      font-size: 1.35rem;
      font-weight: 500;
      color: white;
      cursor: pointer;
      transition: color 0.15s ease-in-out;

      &.logout {
        color: red;
      }
    }

    hr {
      display: none;

      @include phone {
        display: block;
        margin-bottom: 8px;
      }
    }

    .links {
      display: none;

      @include phone {
        display: flex;
        padding-bottom: 12px;
      }
    }
  }
}
</style>
