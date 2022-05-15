<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import TypingEffect from '@/components/TypingEffect.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
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
      <h1>{{ $t('home.title') }}</h1>
      <TypingEffect :i18nTexts="[t('home.subtitle.1'), 'open source']" />
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(
    -45deg,
    rgba(110, 130, 255, 1) 0%,
    rgba(105, 146, 237, 1) 29%,
    rgba(107, 212, 218, 1) 100%
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
    width: 30%;

    @include pad {
      align-items: center;
      width: 80%;
    }

    h1 {
      color: $LightGreen;
      font-size: 4rem;
    }
    .container {
      max-width: 100%;
    }
    .loginBar {
      margin-top: 20px;
      a {
        @extend %link;
        color: $LightGreen;
        font-weight: bold;
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
    z-index: 1; // make the background layer to the bottom
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    @import '@/scss/sq.scss';
  }
}
</style>
