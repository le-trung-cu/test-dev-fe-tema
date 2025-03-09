<template>
  <section class="max-w-[1200px] mx-auto md:grid grid-cols-2 lg:mt-20">
    <div class="px-4 lg:px-5 pt-8 pb-10  md:py-0 md:pb-0 lg:pt-9">
      <h2 class="font-black text-[2.5rem] lg:text-[3.75rem] font-playfair tracking-[0.01em] lg:tracking-[0.06em]">{{ $t('about_us_title') }}</h2>
      <p class="text-muted-foreground font-normal text-sm mt-5 md:mt-10 lg:mt-[1.3rem]">{{ $t('about_us_paragraph') }}</p>
      <div class="flex gap-[3.2rem] md:flex-col mt-10 lg:mt-[5rem] md:gap-5">
        <div>
          <div class="text-secondary-500 text-[2.7rem] lg:text-[5rem] font-montserrat font-bold -tracking-[0.012em] leading-tight">600<span class="text-[20px] md:text-[40px]">M</span>+</div>
          <div class="text-2xl font-montserrat font-bold">{{ $t('users') }}</div>
        </div>
        <div>
          <div class="lg:mt-5 text-secondary-500 text-[2.7rem] lg:text-[5rem] font-montserrat font-bold -tracking-[0.012em] leading-tight">135+</div>
          <div class="text-2xl font-montserrat font-bold">{{ $t('games') }}</div>
        </div>
      </div>
    </div>

    <div class="bg-foreground pl-5 space-y-10 py-10 md:py-20 lg:mx-5 lg:mt-12 pr-2 lg:px-[4.7rem] lg:py-28">
      <div v-for="item of aboutUsServices" class="flex">
        <div class="inline-flex justify-center items-center size-[2.4rem] lg:size-[3.15rem] flex-shrink-0 bg-secondary-300 rounded-full mr-[1.2rem] lg:mr-6">
          <img :src="item.icon" class="size-[22px]" />
        </div>
        <div>
          <h4 class="font-montserrat font-bold text-2xl">{{ $t(item.title) }}</h4>
          <p class="mt-4 md:mt-2 text-muted-foreground text-sm font-montserrat font-normal">{{ $t(item.content) }}</p>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="ts" setup>
import { aboutUsServices } from "../about-us-services"
</script>