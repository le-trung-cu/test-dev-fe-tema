<template>
  <nav class="container relative z-20 px-4 m-auto items-center pt-[2.1rem] flex justify-between md:hidden">
    <Logo class="text-white w-[70px]" />
    <button @click="open = true">
      <ThreeLine />
    </button>
    <div v-if="open" class="fixed top-0 left-0 right-0 h-svh bg-white z-50">
      <div class="flex justify-between items-center px-5 pt-4">
        <LanguageSwicherMobile/>
        <button @click="open=false"><X/></button>
      </div>
      <div class="mt-6">
        <NuxtLink class="flex justify-center items-center h-[65px]  text-center font-bold text-sm uppercase [&:not(:last-child)]:border-b" v-for="item in listNavigations" :key="item.text" href="/">{{ $t(item.text) }}</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Logo from '~/icons/logo.vue';
import ThreeLine from '~/icons/three-line.vue';
import { listNavigations } from '../list-navigations';
import X from '~/icons/x.vue';
import LanguageSwicherMobile from './language-swicher-mobile.vue';

const open = ref(false);
</script>
