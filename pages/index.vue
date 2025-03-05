<template>
  <HeroSection />
  <AboutUs id="about-us"/>
  <OurGames id="our-games"/>
  <OurPartners id="our-partners"/>
  <Footer id="contact-us"/>
  <ButtonScroll />

</template>

<script setup lang="ts">
import HeroSection from "~/features/landing/components/hero-section.vue";
import AboutUs from "~/features/landing/components/about-us.vue";
import OurGames from "~/features/landing/components/our-games.vue";
import OurPartners from "~/features/landing/components/our-partners.vue";
import Footer from "~/features/landing/components/footer.vue";
import ButtonScroll from "~/features/landing/components/button-scroll.vue";
const { locale } = useI18n()
useSeoMeta({
  title: 'Tech',
  description: 'Tech',
})

useHead({
  htmlAttrs: {
    lang: locale
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg',
      href: '/logo.svg'
    }
  ]
})
</script>
