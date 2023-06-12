<script lang="ts" setup>
import DesktopContent from '@/components/desktop/dashboard/OverviewContent.vue';
import MobileContent from '@/components/Mobile/Dashboard/OverviewContent.vue';
</script>

<template>
  <div class="w-[100%] phone:hidden">
    <DesktopContent />
  </div>
  <div class="w-[100%] max-phone:hidden">
    <MobileContent />
  </div>
</template>
