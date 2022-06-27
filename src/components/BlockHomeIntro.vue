<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const TypingEffect = defineAsyncComponent(
  () => import('@/components/TypingEffect.vue')
);
const modules = [Pagination, Autoplay];
</script>

<template>
  <div class="intro">
    <ul class="circles">
      <li v-for="_ in 10" v-once :key="_" />
    </ul>
    <div class="slideBlock">
      <swiper
        :space-between="15"
        :modules="modules"
        :autoplay="{ delay: 3000 }"
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
      <TypingEffect :i18n-text-keys="['home.subtitle.1', 'home.subtitle.2']" />
      <div class="loginBar">
        <router-link
          v-t="'home.login.student'"
          to="/account/login/mode?=student"
          class="first"
          :title="$t('home.login.student')"
        />
        <router-link
          v-t="'home.login.teacher'"
          to="/account/login/mode?=teacher"
          class="middle"
          :title="$t('home.login.teacher')"
        />
        <router-link
          v-t="'home.login.parents'"
          to="/account/login/mode?=parents"
          class="last"
          :title="$t('home.login.parents')"
        >
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
  @include pad {
    flex-direction: column-reverse;
    justify-content: center;
  }
  @include phone {
    position: relative;
    padding: 60px 0;
  }

  position: relative;
  // footer height: 127px; header height: 80px
  display: flex;
  width: 100%;
  height: calc(100% - $FooterHeight - $HeaderHeight);
  padding: 45px;
  background: linear-gradient(
    -45deg,
    rgb(181 76 255 / 100%) 0%,
    rgb(84 107 237) 50%,
    rgb(61 163 169) 100%
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  align-items: center;
  justify-content: center;

  .slideBlock {
    @include pad {
      margin-top: 60px;
      margin-right: 0;
    }

    @include pad {
      margin-bottom: 20px;
    }

    margin-right: 80px;

    .swiper {
      @include pad {
        width: 500px;
        height: 500px;
        max-width: 70vw;
        max-height: 70vw;
        min-width: 250px;
        min-height: 250px;

        img {
          width: 250px;
          height: 250px;
        }
      }
      @include phone {
        max-width: 70vw;
        max-height: 70vw;
        min-width: 250px;
        min-height: 250px;

        img {
          width: 250px;
          height: 250px;
        }
      }

      width: 500px;
      height: 500px;
      max-width: 30vw;
      max-height: 30vw;
      border-radius: 15px;

      .swiper-slide {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        background: {
          color: white;
        }

        img {
          width: 300px;
          height: 300px;
        }
      }
    }
  }

  .title {
    @include pad {
      align-items: center;
      width: 80%;
    }

    z-index: 2;
    display: flex;
    width: 35%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1 {
      @include phone {
        font-size: 12vw;
        text-align: center;
      }

      font-size: 4rem;
      color: $MainColor;
    }

    .container {
      max-width: 100%;
    }

    .loginBar {
      margin-top: 30px;

      a {
        @extend %link;
        @include phone {
          padding: 10px 20px;
        }

        padding: 10px 30px;
        font-weight: bold;
        color: $MainColor;
        transition: 0.2s ease-in-out;

        &:hover {
          color: white;
          background-color: $MainColor;
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
    @import '@/scss/sq.scss';

    position: absolute;
    top: 0;
    z-index: 1; // make the background layer to the bottom
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
