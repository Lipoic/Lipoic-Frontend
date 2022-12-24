<script lang="ts" setup>
import RecentCard from '@/components/overview/desktop/RecentCard.vue';

const cardDemoData = [
  { name: 'math' },
  { name: 'history' },
  { name: 'math' },
  { name: 'history' },
  { name: 'math' },
  { name: 'history' },
  { name: 'math' },
  { name: 'history' },
  { name: 'math' },
  { name: 'history' },
  { name: 'math' },
  { name: 'history' },
  { name: 'math' },
  { name: 'history' },
];
</script>

<template>
  <div
    class="recent-activities ml-[172px] mr-[70px] mt-[64px] mb-5 max-h-[621px] overflow-x-hidden overflow-y-scroll"
  >
    <div class="mb-[64px] block">
      <a class="font-regular inline-block text-[30px]"> 近期活動 </a>
      <div class="recent-bar max-h-[621px]">
        <div
          class="mt-[40px] mb-5 grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        >
          <RecentCard
            v-for="(item, index) in cardDemoData"
            :key="index"
            :name="item.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.recent-activities {
  color: #2a3469;
  background: linear-gradient(
      0deg,
      rgba(0, 90, 193, 0.05),
      rgba(0, 90, 193, 0.05)
    ),
    #f1f3f9;
  border: 1px solid #d9ddf2;
  border-radius: 24px;

  height: fit-content;
  min-height: 80%;
  user-select: text;

  padding: 3rem;
}

.dark .recent-activities {
  color: #ffffff;
  background: linear-gradient(
      0deg,
      rgba(173, 198, 255, 0.05),
      rgba(173, 198, 255, 0.05)
    ),
    #1b1b1f;

  /* M3/Elevation Dark/1 */
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 24px;
}
</style>
