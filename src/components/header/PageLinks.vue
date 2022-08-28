<script lang="ts" setup>
const props = defineProps<{
  direction: 'row' | 'column';
  loginButton: boolean;
}>();

const links = [
  { path: '/', i18nKey: 'header.links.home' },
  { path: '/about', i18nKey: 'header.links.about' },
  { path: '/feature', i18nKey: 'header.links.feature' },
  { path: '/demo', i18nKey: 'header.links.demo' },
];

if (props.loginButton) {
  links.push({ path: '/account/login', i18nKey: 'header.login' });
}
</script>

<template>
  <div class="links" :style="{ flexDirection: props.direction }">
    <li
      v-for="link in links"
      v-once
      :key="link.path"
      :style="
        props.direction === 'row' ? { padding: '10px' } : { paddingTop: '12px' }
      "
    >
      <router-link
        v-t="link.i18nKey"
        :to="link.path"
        :title="$t(link.i18nKey)"
      />
    </li>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.links {
  display: flex;
  align-items: center;
  list-style: none;

  li {
    .router-link-exact-active {
      color: $MainColor;
    }

    a {
      @extend %link;

      font-size: 1.35rem;
      font-weight: 500;
      transition: color 0.3s ease-in;

      &:hover {
        color: $MainColor;
      }
    }
  }
}
</style>
