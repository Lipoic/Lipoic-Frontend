<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
const modules = [Pagination];
</script>

<template>
  <div class="intro">
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
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';
.intro {
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #455056;
  padding: 10rem 10rem;
  @include pad {
    padding: 5rem 1rem;
    flex-wrap: wrap;
  }
  @include phone {
    flex-direction: column;
    padding: 5rem 1rem;
  }

  .slideBlock {
    margin-right: 10px;
    @include phone {
      margin-right: 0;
    }
    .swiper {
      width: 300px;
      height: 300px;
      border-radius: 15px;
      @include pad {
        width: 250px;
        height: 250px;
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

    @include phone {
      align-items: center;
    }

    h1 {
      color: $LightGreen;
      font-size: 4rem;
    }

    p {
      color: $White;
      font-size: 2rem;

      @include phone {
        text-align: center;
      }
    }

    .loginBar {
      margin-top: 20px;
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
}
</style>
