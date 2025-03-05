<template>
  <div class="relative">
    <header class="hero pb-28 lg:pb-[200px]">
      <Menu />
      <MenuMobile />
      <div class="hero-content w-fit mx-auto">
        <div class="relative z-10 flex flex-col items-center mt-[5vh] md:mt-[20vh] px-5">
          <h1 class="text-white font-black text-center text-[2.5rem] md:text-[80px] font-playfair"
            v-html="$t('hero_title', { br: `<br class='block md:hidden' />` })" />
          <HeroCounter />
          <p class="text-white mt-10 md:mt-20 text-xs md:text-lg text-center max-w-[560px] font-montserrat font-normal">
            {{ $t("hero_paragraph") }}
          </p>
          <SubscibeForm :placeholder="$t('enter_your_email')" class="mt-10 bg-white text-black w-full max-w-[560px]" />
        </div>
      </div>
      <svg class="absolute bottom-0 left-0" viewBox="0 0 100 100">
        <path class="hidden md:block" fill="white" d="M0,90 Q50,110 100,90 L100,100 L0,100Z"></path>
        <path class="md:hidden" fill="white" d="M0,80 Q50,90 100,80 L100,100 L0,100Z"></path>
      </svg>
    </header>
    <div class="relative container mx-auto">
      <div class="lg:absolute bottom-10">
        <img class="relative z-10 w-[260px] mx-auto -mt-[100px] translate-x-5" src='/fairy-ong-tien.png' />
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import HeroCounter from "./hero-counter.vue";
import MenuMobile from "./menu-mobile.vue";
import Menu from "./menu.vue"
import SubscibeForm from "./subscibe-form.vue";
</script>

<style scoped>
.hero {
  overflow: hidden;
  position: relative;
  background-image: url('/hero-bg-900x108.webp');
  background-repeat: no-repeat;
  background-position: 55% -40px;
  background-size: cover;
}

.hero-content {
  position: relative;
}

.hero-content::after {
  content: '';
  position: absolute;
  top: 0;
  left: -25%;
  width: 150%;
  height: 75%;
  backdrop-filter: blur(10px);
  border-radius: 100%;
  transform: translateY(40%);
}


.hero::before {
  content: '';
  position: absolute;
  top: -100px;
  left: 0%;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(27.72% 27.79% at 50.81% 68.15%, #210544 0%, rgba(23, 5, 68, 0.71) 50.52%, rgba(23, 5, 68, 0) 100%);
}

@media (min-width: 768px) {
  .hero {
    background-image: url('/hero-bg.jpeg');
    background-position: center;
  }

  .hero-content::after {
    top: 0;
    left: -15%;
    width: 130%;
    height: 100%;
    transform: translateY(20%);
  }

  .hero::before {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    /* background-image: radial-gradient(27.72% 27.79% at 50.81% 68.15%, #210544 0%, rgba(23, 5, 68, 0.71) 50.52%, rgba(23, 5, 68, 0) 100%); */
  }
}
</style>