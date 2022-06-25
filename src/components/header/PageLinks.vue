<script lang="ts" setup>
const props = defineProps<{ direction: 'row' | 'column' }>();

const links = [
  { path: '/', i18nName: 'header.links.home' },
  { path: '/about', i18nName: 'header.links.about' },
  { path: '/feature', i18nName: 'header.links.feature' },
  { path: '/demo', i18nName: 'header.links.demo' },
];
</script>

<template>
  <div class="links">
    <li
      v-for="link in links"
      v-once
      :key="link.path"
      :style="`flex-direction: ${props.direction}; ${
        props.direction === 'row' ? 'padding-top: 10px' : 'padding: 12px'
      };`"
    >
      <router-link
        v-t="link.i18nName"
        :to="link.path"
        :title="$t(link.i18nName)"
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

      font-size: 1.3rem;
      font-weight: 500;
      transition: color 0.3s ease-in;

      &:hover {
        color: $MainColor;
      }
    }
  }
}
</style>
