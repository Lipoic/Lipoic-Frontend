<script lang="ts" setup>
import { onUnmounted, withDefaults, defineProps, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();
const defineTypingSpeed = 200;

const props = withDefaults(
  defineProps<{ i18nTexts?: string[]; texts?: string[] }>(),
  { i18nTexts: () => [], texts: () => [] }
);

let texts = [...props.i18nTexts.map((key) => i18n.t(key)), ...props.texts];

let typeValue = ref('');
let typeStatus = ref(false);

let typingSpeed = defineTypingSpeed;
let erasingSpeed = 40;
let newTextDelay = 500;
let textIndex = 0;
let charIndex = 0;

let timeOut: ReturnType<typeof setTimeout> | undefined = void 0;

const typeText = () => {
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
  display: flex;

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
    }
    &:after {
      content: '';
      position: absolute;
      display: inline-block;
      width: 4px;
      height: 3rem;
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
