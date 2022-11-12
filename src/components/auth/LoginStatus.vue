<script lang="ts" setup>
defineProps<{ error: boolean; errorMessage?: string }>();
</script>

<template>
  <div class="container">
    <div v-if="!error" class="loading">
      <Loading
        :active="true"
        :color="'#7b6ff6'"
        :loader="'dots'"
        :width="100"
        :height="100"
      />
      <h1 v-t="'auth.login.loading'"></h1>
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

.container {
  margin-top: 15px;

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
