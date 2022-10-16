<template>
  <div v-t="'about.members.title'" class="memberTitle"></div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';
.memberTitle {
  background-color: $SecondaryColor;
  margin: 20px auto;
  width: 500px;
  max-width: 90vw;
  padding: 50px;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: white;
}
</style>
