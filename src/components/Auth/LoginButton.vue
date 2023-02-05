<template>
  <div>
    <router-link
      v-once
      v-t="'auth.login.title'"
      to="/account/login"
      class="button"
      :title="$t('auth.login.title')"
      :aria-label="$t('auth.login.title')"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.button {
  padding: 5px 15px;
  font-size: 1rem;
  color: $MainColor;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid $MainColor;
  border-radius: 5px;
  transition: 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: $SecondaryColor;
  }
}
</style>
