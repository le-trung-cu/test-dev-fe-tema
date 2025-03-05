<template>
  <button
    class="fixed z-[999] right-5 bottom-10 size-[66px] flex justify-center items-center bg-white rounded-full shadow-lg"
    @click="handleClick">
    <ArrowDown :class="['transition-transform duration-700', { 'rotate-180': isArrowUp }]" />
  </button>
</template>

<script setup lang="ts">
import ArrowDown from '~/icons/arrow-down.vue';
import { ref, onMounted, onUnmounted } from "vue";

const isArrowUp = ref(false);

let lastScrollTop = 0;

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const isScrollingDown = scrollTop > lastScrollTop;
  if (!isArrowUp.value && isScrollingDown && scrollTop > 400) {
    isArrowUp.value = true;
  } else if (isArrowUp.value && scrollTop < 100) {
    isArrowUp.value = false;
  }
  lastScrollTop = scrollTop;
};

const handleClick = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
