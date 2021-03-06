<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { onUnmounted, ref, watch } from 'vue';

import { useI18nType } from '@/helper/I18nHelper';
import { random } from '@/utils/Math';

const i18n = useI18n() as useI18nType;
const defineTypingSpeed = 200;
const defineErasingSpeed = 40;

const props = defineProps<{ i18nTextKeys: string[] }>();

let texts = [...props.i18nTextKeys.map((key) => i18n.t(key))];

const typeValue = ref('');
const typeStatus = ref(false);

const newTextDelay = 800;
let textIndex = 0;
let charIndex = 0;

let timeOut: ReturnType<typeof setTimeout> | undefined;

watch(i18n.locale, () => {
  texts = [...props.i18nTextKeys.map((key) => i18n.t(key))];
  charIndex = 0;
  typeValue.value = '';
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  clearTimeout(timeOut!);
  typeText();
});

const typeText = () => {
  // If the text is english, speed up typing speed

  if (charIndex < texts[textIndex].length) {
    typeStatus.value = true;
    typeValue.value += texts[textIndex].charAt(charIndex++);
    timeOut = setTimeout(
      typeText,
      /[a-zA-Z0-9\\.]+/.test(texts[textIndex])
        ? 40 * random(2, 1) * 1.1
        : defineTypingSpeed
    );
  } else {
    typeStatus.value = false;
    timeOut = setTimeout(eraseText, newTextDelay);
  }
};
if (texts.length > 0) typeText();
const eraseText = () => {
  if (charIndex > 0) {
    typeStatus.value = true;
    typeValue.value = texts[textIndex].substring(0, --charIndex);
    timeOut = setTimeout(
      eraseText,
      /[a-zA-Z0-9\\.]+/.test(texts[textIndex]) ? 10 : defineErasingSpeed
    );
  } else {
    typeStatus.value = false;
    if (++textIndex >= texts.length) textIndex = 0;
    timeOut = setTimeout(typeText, defineTypingSpeed + 1e3);
  }
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
onUnmounted(() => clearTimeout(timeOut!));
</script>

<template>
  <div class="container">
    <span
      class="typed-text"
      :class="{ typing: typeStatus }"
      v-text="typeValue"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
@import '@/scss/rwd.breakPoint.scss';

.container {
  @keyframes cursor-blink {
    45% {
      background-color: #fff;
    }

    50% {
      background-color: transparent;
    }

    99% {
      background-color: transparent;
    }
  }

  display: flex;
  margin-top: 10px;

  span.typed-text {
    @include phone {
      font-size: 1.8rem;
    }

    @include pad {
      padding: 0 10px;
      text-align: center;
    }

    position: relative;
    display: inline-table;
    height: 3rem;
    font-size: 2rem;
    line-height: 2rem;
    color: white;
    white-space: pre-line;

    &::after {
      @include phone {
        height: 1.8rem;
      }

      position: absolute;
      display: inline-block;
      width: 4px;
      height: 2rem;
      margin-left: 3px;
      background-color: #fff;
      content: '';
      animation: cursor-blink 0.8s infinite;
    }

    &.typing::after {
      animation: none;
    }
  }
}
</style>
