<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import TypingEffect from '@/components/TypingEffect.vue';

const modules = [Pagination];
</script>

<template>
  <div class="intro">
    <ul class="circles">
      <li v-for="key in 10" :key="key"></li>
    </ul>
    <div class="slideBlock">
      <swiper
        :space-between="15"
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
      <TypingEffect :i18nTextKeys="['home.subtitle.1', 'home.subtitle.2']" />
      <div class="loginBar">
        <router-link to="/login/student" class="first">
          {{ $t('home.login.student') }}
        </router-link>
        <router-link to="/login/teacher" class="middle">
          {{ $t('home.login.teacher') }}
        </router-link>
        <router-link to="/login/parents" class="last">
          {{ $t('home.login.parents') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/animation.func.scss';
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.intro {
  padding: 20px 0;
  width: 100%;
  padding: 45px;
  max-height: 900px;
  // footer height: 127px; header height: 80px
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(
    -45deg,
    rgba(181, 76, 255, 1) 0%,
    rgb(84, 107, 237) 50%,
    rgb(61, 163, 169) 100%
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @include pad {
    flex-direction: column-reverse;
    justify-content: center;
  }
  @include phone {
    position: relative;
    padding: 60px 0;
  }

  .slideBlock {
    margin-right: 80px;
    @include pad {
      margin-right: 0;
      margin-top: 60px;
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
        min-width: 250px;
        min-height: 250px;
        max-height: 70vw;
        max-width: 70vw;
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

        border-radius: 15px;

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

    z-index: 2;
    width: 35%;

    @include pad {
      align-items: center;
      width: 80%;
    }

    h1 {
      color: $MainColor;
      font-size: 4rem;
      @include phone {
        text-align: center;
        font-size: 12vw;
      }
    }
    .container {
      max-width: 100%;
    }
    .loginBar {
      margin-top: 30px;

      a {
        @extend %link;
        color: $MainColor;
        font-weight: bold;
        padding: 10px 30px;
        transition: 0.2s ease-in-out;
        @include phone {
          padding: 10px 20px;
        }

        &:hover {
          background-color: $MainColor;
          color: $White;
        }

        &.first {
          border-radius: 5px 0 0 5px;
          border: {
            top: 1px solid $MainColor;
            right: 0 solid $MainColor;
            bottom: 1px solid $MainColor;
            left: 1px solid $MainColor;
          }
        }
        &.middle {
          border-radius: 0;
          border: {
            top: 1px solid $MainColor;
            right: 0 solid $MainColor;
            bottom: 1px solid $MainColor;
            left: 1px solid $MainColor;
          }
        }
        &.last {
          border-radius: 0 5px 5px 0;
          border: {
            top: 1px solid $MainColor;
            right: 1px solid $MainColor;
            bottom: 1px solid $MainColor;
            left: 1px solid $MainColor;
          }
        }
      }
    }
  }
  .circles {
    position: absolute;
    z-index: 1; // make the background layer to the bottom
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    @import '@/scss/sq.scss';
  }
}
</style>
