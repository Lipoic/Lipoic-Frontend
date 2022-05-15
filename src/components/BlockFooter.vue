<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import I18nHelper, { useI18nType } from '@/helper/I18nHelper';
import ExpandMoreSvg from '@/assets/other/ExpandMore.svg';

const i18n = useI18n() as useI18nType;

const selectedLanguage = ref(i18n.locale);
const showSetLanguages = ref(false);

const changeLanguage = (locale: string) => I18nHelper.setLocale(locale);
const closeSetLanguages = () =>
  (showSetLanguages.value = !showSetLanguages.value);
</script>

<template>
  <div class="footer">
    <div class="logo">
      <img
        src="https://raw.githubusercontent.com/Lipoic/Lipoic-Assets/main/logo/logo.svg"
        alt="Lipoic"
      />
    </div>
    <div class="copyright" v-t="'footer.copyright'" />
    <div class="languageSelector" :class="{ show: showSetLanguages }">
      <button @click="showSetLanguages = !showSetLanguages">
        <span
          class="flag"
          :style="{
            backgroundImage: `url(${I18nHelper.flags[selectedLanguage]})`,
          }"
        />
        {{ i18n.getLocaleMessage(selectedLanguage).name }}
        <img :src="ExpandMoreSvg" alt="Expand more" />
      </button>
      <ul class="set-languages">
        <li
          v-for="language in i18n.availableLocales"
          :key="language"
          @click="[changeLanguage(language), closeSetLanguages()]"
          :title="i18n.getLocaleMessage(language).name.toString()"
          :aria-label="i18n.getLocaleMessage(language).name.toString()"
          :class="language === selectedLanguage ? 'active' : void 0"
        >
          <span
            class="flag"
            :style="{
              backgroundImage: `url(${I18nHelper.flags[language]})`,
            }"
          />
          {{ i18n.getLocaleMessage(language).name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/global.scss';
.footer {
  background-color: $Black;
  padding: 30px;
  text-align: center;
  z-index: 5;
  position: relative;
  .logo {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $White;
    border-radius: 50%;
    padding: 3px;
    border: 3px solid $MainColor;
    background-color: $Black;

    img {
      width: 35px;
      height: 35px;
    }
  }
  .copyright {
    color: $White;
  }
  .languageSelector {
    display: flex;
    align-items: center;
    justify-content: center;

    color: $White;
    margin-top: 10px;
    position: relative;
    button {
      color: $White;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      cursor: pointer;
      background-color: transparent;
      transition: color 0.15s ease-out 0s;

      img {
        transition: transform 0.15s ease-out 0s;
      }

      &:focus {
        outline: none;
      }
    }
    ul.set-languages {
      transition: all 0.4s ease-in-out 0s;
      padding: 5px;
      background-color: $LightBlack;
      font-size: 1.1rem;
      position: absolute;
      bottom: 150%;
      width: 200px;
      height: auto;
      max-height: calc(100vh - 100px);

      overflow: auto;
      border-radius: 8px;

      opacity: 0;
      li {
        padding: 8px 5px;
        border-radius: 5px;
        display: flex;
        cursor: pointer;
        align-items: center;

        &:hover,
        &.active {
          background-color: $Black;
        }
      }
    }
    &.show {
      ul.set-languages {
        opacity: 1;
        transform: translateY(-1em);
      }
      button img {
        transform: rotate(180deg);
      }
    }
    .flag {
      margin-right: 5px;
      width: 25px;
      height: 25px;
      display: inline-block;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
</style>
