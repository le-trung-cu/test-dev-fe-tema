<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { listPartners as images } from '../list-partners'
import ArrowSquareLeft from '@/icons/arrow-square-left.vue'
import ArrowSquareRight from '@/icons/arrow-square-right.vue'

// Carousel configuration
const config = {
  height: 100,
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
    375: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
    // 500px and up
    800: {
      itemsToShow: 5,
      snapAlign: 'center',
    },
  },
};
</script>

<template>
  <section class="bg-[#F6F6F6] pt-[36px] pb-[53px] md:pt-[6.5rem] md:pb-[7.4rem]">
    <div class="container mx-auto">
      <h2 class="font-black text-center text-[2.5rem] lg:text-[3.75rem] tracking-wide md:tracking-[0.062em] font-playfair">{{ $t('our_partners_title') }}</h2>
      <Carousel v-bind="config" class="mt-5 lg:mt-[4rem] lg:-mx-[16px] h-[72px] lg:h-[100px] lg:px-10">
        <Slide v-for="image in images" :key="image" class="">
          <img :src="image" alt="image" class="h-[72px] lg:h-[100px]"/>
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
