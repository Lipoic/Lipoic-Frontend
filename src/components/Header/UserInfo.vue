<template>
  <div class="user" :open="menuState" @click="toggleMenu()">
    <div class="user-info" title="{user-name}">
      <img
        class="user-icon"
        src="https://cdn.discordapp.com/avatars/688181698822799414/f6534feffc3f15cf439cb2fdd579aab5.png"
        alt="{user-name}-icon"
      />
    </div>
    <SvgIcon name="login-ExpandMore" class="expand-more" color="white" />
    <ul class="user-more">
      <li>option1</li>
      <li>option2</li>
      <li>option3</li>
      <hr />
      <li>登出</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const menuState = ref<undefined | ''>(void 0);
const toggleMenu = (state?: boolean) => {
  menuState.value = state ?? menuState.value !== void 0 ? void 0 : '';
};
</script>

<style lang="scss" scoped>
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
      left: -10px;
      min-width: 100px;
      padding: 8px;
      margin-top: 12px;
      list-style: none;
      background-color: red;
      border-radius: 6px;

      li {
        cursor: pointer;
        transition: color 0.15s ease-in-out;

        &:hover {
          color: red;
        }
      }

      hr {
        margin: 5px 0;
      }
    }
  }
}
</style>
