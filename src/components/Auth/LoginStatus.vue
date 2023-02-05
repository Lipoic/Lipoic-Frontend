<script lang="ts" setup>
defineProps<{ error: boolean; errorMessage?: string }>();
</script>

<template>
  <div class="root">
    <div v-if="!error" class="loading">
      <Loading
        :active="true"
        :color="'#7b6ff6'"
        :loader="'dots'"
        :width="150"
        :height="80"
      />
      <h1 v-t="'auth.login.loading'" class="text-center"></h1>
    </div>
    <div v-if="error" class="error">
      <h1 v-t="'auth.login.loginFailed'"></h1>
      <p v-if="!errorMessage" v-t="'error.message'"></p>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.root {
  font-size: xx-large;

  @include phone {
    font-size: x-large;
  }

  .loading {
    h1 {
      padding-top: 15px;
      color: white;
    }
  }

  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: red;
    }

    p {
      color: white;
    }
  }
}
</style>
