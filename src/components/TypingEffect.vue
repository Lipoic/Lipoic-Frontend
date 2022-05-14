<script lang="ts" setup>
import I18nHelper from '@/helper/I18nHelper';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const i18n = useI18n();

let texts = [i18n.t('home.subtitle.1'), 'open source'];

let typeValue = ref('');
let typeStatus = ref(false);

let typingSpeed = 200;

let erasingSpeed = 45;
let newTextDelay = 500;
let textIndex = 0;
let charIndex = 0;

if (I18nHelper.locale.startsWith('zh')) {
  setTimeout(typeText, newTextDelay + 200);
} else {
  typeValue.value = texts[0];
}

function typeText() {
  if (charIndex < texts[textIndex].length) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = typeValue.value + texts[textIndex].charAt(charIndex);
    charIndex += 1;
    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay);
  }
}

function eraseText() {
  if (charIndex > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = texts[textIndex].substring(0, charIndex - 1);
    charIndex -= 1;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    textIndex += 1;
    if (textIndex >= texts.length) textIndex = 0;
    setTimeout(typeText, typingSpeed + 1000);
  }
}
</script>

<template>
  <div class="container">
    <span class="typed-text">{{ typeValue }}</span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.container {
  display: flex;
}

span.typed-text {
  color: $White;
  font-size: 2rem;

  @include pad {
    text-align: center;
    padding: 0 10px;
  }
}
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
