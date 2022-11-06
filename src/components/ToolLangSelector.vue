<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

import I18nHelper, { useI18nType } from '@/helper/I18nHelper';

const i18n = useI18n() as useI18nType;

const selectedLanguage = ref(i18n.locale);
const showSetLanguages = ref(false);

const changeLanguage = (locale: string) => I18nHelper.setLocale(locale);
const closeSetLanguages = () =>
  (showSetLanguages.value = !showSetLanguages.value);

const changeEventLanguage = (e: MouseEvent) => {
  const target = e.target as HTMLDivElement;
  if (
    target?.nodeName.toLocaleLowerCase() === 'li' &&
    target.dataset.language
  ) {
    changeLanguage(target.dataset.language);
    closeSetLanguages();
  }
};
</script>

<template>
  <div class="languageSelector" :class="{ show: showSetLanguages }">
    <button type="button" @click="showSetLanguages = !showSetLanguages">
      <span
        class="flag"
        :style="{
          backgroundImage: `url(${I18nHelper.flags[selectedLanguage]})`,
        }"
      />
      {{ i18n.getLocaleMessage(selectedLanguage).name }}
      <SvgIcon
        name="other-ExpandMore"
        color="white"
        width="32px"
        height="32px"
      />
    </button>
    <ul class="set-languages" @click="changeEventLanguage">
      <li
        v-for="language in i18n.availableLocales"
        v-once
        :key="language"
        :title="i18n.getLocaleMessage(language).name.toString()"
        :class="language === selectedLanguage ? 'active' : void 0"
        :aria-label="i18n.getLocaleMessage(language).name.toString()"
        :data-language="language"
      >
        <span
          class="flag"
          :style="{ backgroundImage: `url(${I18nHelper.flags[language]})` }"
        />
        {{ i18n.getLocaleMessage(language).name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '@/scss/global.scss';

.languageSelector {
  position: relative;
  display: flex;
  margin-top: 10px;
  color: white;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    font-size: 1.05rem;
    color: white;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    transition: color 0.15s ease-out 0s;
    align-items: center;
    justify-content: center;

    svg {
      transition: transform 0.15s ease-out 0s;
    }

    &:focus {
      outline: none;
    }
  }

  ul.set-languages {
    position: absolute;
    bottom: 25px;
    width: 200px;
    height: auto;
    max-height: calc(100vh - 100px);
    padding: 5px;
    overflow: auto;
    font-size: 1.1rem;
    background-color: $LightBlack;
    border-radius: 8px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out 0s;

    li {
      display: flex;
      padding: 8px 5px;
      cursor: pointer;
      border-radius: 5px;
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
      visibility: visible;
      transform: translateY(-1em);
    }

    button svg {
      transform: rotate(180deg);
    }
  }

  .flag {
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 5px;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
