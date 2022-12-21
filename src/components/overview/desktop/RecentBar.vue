<script lang="ts" setup>
import RecentCard from '@/components/overview/desktop/RecentCard.vue';

const cardDemoData = [
  { name: "math", },
  { name: "history", },
  { name: "math", },
  { name: "history", },
  { name: "math", },
  { name: "history", },
  { name: "math", },
  { name: "history", },
  { name: "math", },
  { name: "history", },
  { name: "math", },
  { name: "history", },
  { name: "math", },
  { name: "history", },
];
</script>

<template>
  <div class="recent-activities ml-[172px] mr-[70px] mt-[64px] overflow-auto">
    <div class="block mb-[64px]">
      <a class="text-[30px] font-regular inline-block">
        近期活動
      </a>
      <div class="recent-bar max-h-[621px]">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-[40px] mb-5">
          <RecentCard
            v-for="(item, index) in cardDemoData"
            :image="item.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.recent-activities {
  color: #2A3469;
  background: linear-gradient(0deg, rgba(0, 90, 193, 0.05), rgba(0, 90, 193, 0.05)), #F1F3F9;
  border: 1px solid #D9DDF2;
  border-radius: 24px;

  height: fit-content;
  min-height: 80%;
  user-select: text;

  padding: 3rem;
}

.dark .recent-activities {
  color: #FFFFFF;
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
