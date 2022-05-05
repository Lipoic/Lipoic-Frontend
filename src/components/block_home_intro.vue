<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
const modules = [Pagination];
</script>

<template>
  <div class="intro">
    <ul class="circles">
      <li v-for="_ in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="_"></li>
    </ul>
    <div class="slideBlock">
      <swiper
        :pagination="true"
        :modules="modules"
        :autoplay="true"
        class="mySwiper"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div>
    <div class="title">
      <h1>Lipoic</h1>
      <p>專門為台灣師生設計的教學平台</p>
      <div class="loginBar">
        <router-link to="/login/student" class="first">學生</router-link>
        <router-link to="/login/teacher" class="middle">教師</router-link>
        <router-link to="/login/parents" class="last">家長</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/animation.func.scss';
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.intro {
  width: 100vw;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    -45deg,
    rgba(110, 130, 255, 1) 0%,
    rgba(105, 146, 237, 1) 29%,
    rgba(107, 212, 218, 1) 100%
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @include pad {
    flex-direction: column;
    justify-content: center;
  }

  .slideBlock {
    margin-right: 80px;
    @include pad {
      margin-right: 0;
    }
    .swiper {
      max-width: 30vw;
      width: 500px;
      height: 500px;
      max-height: 30vw;
      border-radius: 15px;
      @include pad {
        min-width: 250px;
        min-height: 250px;
        max-height: 70vw;
        max-width: 70vw;
        width: 500px;
        height: 500px;
        img {
          width: 250px;
          height: 250px;
        }
      }
      @include phone {
        width: 220px;
        height: 220px;
        img {
          width: 250px;
          height: 250px;
        }
      }
      .swiper-slide {
        background: {
          color: $White;
        }
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img {
          width: 300px;
          height: 300px;
        }
      }
    }

    @include pad {
      margin-bottom: 20px;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @include pad {
      align-items: center;
    }

    h1 {
      color: $LightGreen;
      font-size: 4rem;
    }

    p {
      color: $White;
      font-size: 2rem;

      @include pad {
        text-align: center;
        padding: 0 10px;
      }
    }

    .loginBar {
      margin-top: 20px;
      z-index: 2;
      a {
        @extend %link;
        color: $LightGreen;
        padding: 10px 30px;
        transition: 0.2s ease-in-out;
        @include phone {
          padding: 10px 20px;
        }

        &:hover {
          background-color: $LightGreen;
          color: $White;
        }

        &.first {
          border-radius: 5px 0 0 5px;
          border: {
            top: 1px solid $LightGreen;
            right: 0 solid $LightGreen;
            bottom: 1px solid $LightGreen;
            left: 1px solid $LightGreen;
          }
        }
        &.middle {
          border-radius: 0;
          border: {
            top: 1px solid $LightGreen;
            right: 0 solid $LightGreen;
            bottom: 1px solid $LightGreen;
            left: 1px solid $LightGreen;
          }
        }
        &.last {
          border-radius: 0 5px 5px 0;
          border: {
            top: 1px solid $LightGreen;
            right: 1px solid $LightGreen;
            bottom: 1px solid $LightGreen;
            left: 1px solid $LightGreen;
          }
        }
      }
    }
  }
  .circles {
    position: absolute;
    top: 75px;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    @import '@/scss/sq.scss';
  }
}
</style>
