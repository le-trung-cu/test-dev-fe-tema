<template>
  <nav class="relative z-50 container m-auto items-center justify-between pt-5 px-5 hidden md:flex">
    <Logo class="text-white" />
    <div class="flex items-center space-x-6">
      <a v-for="item in listNavigations" :key="item.href" to="#" @click.prevent="scrollToSection(item.href)"
        class="text-white text-sm font-bold uppercase cursor-pointer">
        {{ $t(item.text) }}
      </a>
      <LanguageSwicher/>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Logo from '~/icons/logo.vue';
import { listNavigations } from '../list-navigations';
import LanguageSwicher from './language-swicher.vue';

const scrollToSection = (id: string) => {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

</script>