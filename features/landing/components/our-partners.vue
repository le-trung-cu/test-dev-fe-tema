<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { listPartners as images } from '../list-partners'
import ArrowSquareLeft from '@/icons/arrow-square-left.vue'
import ArrowSquareRight from '@/icons/arrow-square-right.vue'

// Carousel configuration
const config = {
  height: 200,
  itemsToShow: 1,
  gap: 5,
  snapAlign: 'center',

  breakpointMode: 'carousel',

  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    // 400px and up
    400: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
    // 500px and up
    800: {
      itemsToShow: 5,
      snapAlign: 'start',
    },
  },
};
</script>

<template>
  <section class="bg-[#F6F6F6] py-10">
    <div class="container mx-auto">
      <h2 class="font-black text-center text-[2.5rem] font-playfair">{{ $t('our_partners_title') }}</h2>
      <Carousel v-bind="config" class="mt-5 h-[72px]">
        <Slide v-for="image in images" :key="image" class="h-[72px]">
          <img :src="image" alt="image" class="h-[72px]"/>
        </Slide>
        <template #addons>
          <Navigation class="mx-5">
            <template #prev>
              <ArrowSquareLeft class="shadow-md shadow-black rounded-md" />
            </template>
            <template #next>
              <ArrowSquareRight class="shadow-md shadow-black rounded-md" />
            </template>
          </Navigation>
        </template>
      </Carousel>
    </div>
  </section>
</template>
