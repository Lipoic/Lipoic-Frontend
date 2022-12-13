<script lang="ts" setup>
console.log(localStorage.getItem('user_info'));
</script>

<template>
    <div class="foo h-[85px] flex">

    </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.foo {
    background: linear-gradient(0deg, rgba(173, 198, 255, 0.08), rgba(173, 198, 255, 0.08)), #1B1B1F;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    position: absolute;
    bottom: 0
}
</style>
