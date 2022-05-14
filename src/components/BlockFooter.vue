<script lang="ts" setup>
import I18nHelper from '@/helper/I18nHelper';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

let selectedLanguage = ref(I18nHelper.locale);

const i18n = useI18n();

const changeLanguage = () => I18nHelper.setLocale(selectedLanguage.value);
</script>

<template>
  <div class="footer">
    <div class="logo">
      <img
        src="https://raw.githubusercontent.com/Lipoic/Lipoic-Assets/main/logo/logo.svg"
        alt="Lipoic"
      />
    </div>
    <div class="copyright">{{ $t('footer.copyright') }}</div>
    <div class="languageSelector">
      {{ $t('footer.language') }}
      <select v-model="selectedLanguage" @change="changeLanguage">
        <option
          v-for="language in i18n.availableLocales"
          :key="language"
          :value="language"
        >
          {{ i18n.getLocaleMessage(language).flag }}
          {{ i18n.getLocaleMessage(language).name }}
        </option>
      </select>
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
    border: 3px solid $LightGreen;
    background-color: $Black;

    img {
      width: 35px;
      height: auto;
    }
  }
  .copyright {
    color: $White;
  }
  .languageSelector {
    margin-top: 10px;
    color: $White;
    select {
      background-color: $LightBlack;
      border-radius: 5px;
      padding: 5px;
      color: $White;
      font-size: 1.05rem;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
