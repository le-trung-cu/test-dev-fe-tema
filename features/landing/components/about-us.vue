<template>
  <section class="max-w-[990px] mx-auto md:grid grid-cols-2 gap-5 lg:mt-20">
    <div class="px-5 py-10 md:py-0">
      <h2 class="font-black text-[2.5rem] font-playfair">{{ $t('about_us_title') }}</h2>
      <p class="text-muted-foreground font-normal text-sm mt-5 md:mt-10">{{ $t('about_us_paragraph') }}</p>
      <div class="flex gap-10 md:flex-col md:mt-10 md:gap-5">
        <div>
          <div class="text-secondary-500 text-[2.75rem] font-montserrat font-bold">600<sub>M</sub>+</div>
          <div class="text-[1.25rem] font-montserrat font-bold">{{ $t('users') }}</div>
        </div>
        <div>
          <div class="text-secondary-500 text-[2.75rem] font-montserrat font-bold">135+</div>
          <div class="text-[1.25rem] font-montserrat font-bold">{{ $t('games') }}</div>
        </div>
      </div>
    </div>

    <div class="bg-foreground py-10 pl-5 space-y-10 md:py-20 lg:px-12">
      <div v-for="item of aboutUsServices" class="flex">
        <div class="inline-flex justify-center items-center size-11 flex-shrink-0 bg-secondary-300 rounded-full mr-5">
          <img :src="item.icon" class="size-[22px]" />
        </div>
        <div>
          <h4 class="font-montserrat font-bold text-2xl">{{ $t(item.title) }}</h4>
          <p class="mt-5 text-muted-foreground text-sm font-montserrat font-normal">{{ $t(item.content) }}</p>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="ts" setup>
import { aboutUsServices } from "../about-us-services"
</script>