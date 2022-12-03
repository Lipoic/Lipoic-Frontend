<script lang="ts" setup>
import { getGoogleOauthUrl, getFacebookOauthUrl } from '@/api/authentication';

const oauthButtons = [
  {
    title: 'Google',
    image: 'login-google',
    onClick: async () => {
      const data = await getGoogleOauthUrl(`${location.origin}/oauth/google/`);
      if (data) window.location.href = data.url;
    },
  },
  {
    title: 'Facebook',
    image: 'login-facebook',
    click: async () => {
      const data = await getFacebookOauthUrl(
        `${location.origin}/oauth/facebook/`
      );
      if (data) window.location.href = data.url;
    },
  },
];
</script>

<template>
  <p v-t="'auth.login.useOtherMethods'" />
  <div class="oauthButtons">
    <button
      v-for="{ title, image, onClick } in oauthButtons"
      v-once
      :key="title"
      type="button"
      class="button"
      :aria-label="title"
      :title="title"
      @click="onClick"
    >
      <SvgIcon :name="image" width="25px" height="25px" />
    </button>
  </div>
</template>

<style lang="scss">
@import '@/scss/global.scss';

p {
  color: white;
}

.oauthButtons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 20px;

  .button {
    display: flex;
    padding: 2px;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    svg {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:nth-child(1) {
      background-color: #fff;
    }

    &:nth-child(2) {
      background-color: #fff;
    }

    &:nth-child(3) {
      background-color: #30a1d4;
    }
  }
}
</style>
