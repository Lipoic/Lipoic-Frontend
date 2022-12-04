<script lang="ts" setup>
import NavBar from '@/components/overview/desktop/NavBar.vue';
import SideBar from '@/components/overview/desktop/SideBar.vue';
import RecentBar from '@/components/overview/desktop/RecentBar.vue';
</script>

<template>
  <SideBar />
  <div class="text-white flex flex-col">
    <NavBar />
    <RecentBar />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.sidebar {
  box-sizing: border-box;
  position: absolute;

  border: 1px solid #353556;
  border-radius: 0px 50px 0px 0px;
  background: linear-gradient(
      0deg,
      rgba(173, 198, 255, 0.08),
      rgba(173, 198, 255, 0.08)
    ),
    #1b1b1f;
}

.nav {
  background: linear-gradient(
      0deg,
      rgba(173, 198, 255, 0.11),
      rgba(173, 198, 255, 0.11)
    ),
    rgba(27, 27, 31, 0.2);
}

.recent-activities {
  background: linear-gradient(
      0deg,
      rgba(173, 198, 255, 0.05),
      rgba(173, 198, 255, 0.05)
    ),
    #1b1b1f;

  /* M3/Elevation Dark/1 */
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 24px 24px 24px 24px;
  height: fit-content;
  min-height: 80%;
  user-select: text;
}
</style>
