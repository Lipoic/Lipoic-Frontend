<script lang="ts" setup>
import { onUnmounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();
const defineTypingSpeed = 200;

const props = defineProps<{ i18nTextKeys: string[] }>();

let texts = [...props.i18nTextKeys.map((key) => i18n.t(key))];

let typeValue = ref('');
let typeStatus = ref(false);

let typingSpeed = defineTypingSpeed;
let erasingSpeed = 40;
let newTextDelay = 500;
let textIndex = 0;
let charIndex = 0;

let timeOut: ReturnType<typeof setTimeout> | null = null;

const typeText = () => {
  // If the text is english, speed up typing speed
  typingSpeed = /[a-zA-Z0-9\\.]+/.test(texts[textIndex])
    ? 85
    : defineTypingSpeed;

  if (charIndex < texts[textIndex].length) {
    typeStatus.value = true;
    typeValue.value += texts[textIndex].charAt(charIndex++);
    timeOut = setTimeout(typeText, typingSpeed);
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
    timeOut = setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    if (++textIndex >= texts.length) textIndex = 0;
    timeOut = setTimeout(typeText, typingSpeed + 1e3);
  }
};

onUnmounted(() => {
  if (timeOut != null) {
    clearTimeout(timeOut);
  }
});
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
  display: flex;
  margin-top: 10px;

  span.typed-text {
    color: $White;
    font-size: 2rem;
    position: relative;
    white-space: pre-line;
    height: 3rem;
    display: inline-table;

    @include pad {
      text-align: center;
      padding: 0 10px;
      font-size: 1.6rem;
    }

    &:after {
      content: '';
      position: absolute;
      display: inline-block;
      width: 4px;
      margin-top: 0.75rem;
      height: 2rem;

      @include phone {
        margin-top: 0.65rem;
        height: 1.4rem;
      }

      margin-left: 3px;
      background-color: #fff;
      animation: cursorBlink 0.8s infinite;
    }
    &.typing:after {
      animation: none;
    }
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
}
</style>
