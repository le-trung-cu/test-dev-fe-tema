<template>
  <div class="relative">
    <header class="hero pb-28 lg:pb-[202px]">
      <Menu />
      <MenuMobile />
      <div class="hero-content w-fit mx-auto">
        <div class="relative z-10 flex flex-col items-center mt-[2.4rem] md:mt-[13.55rem] px-4">
          <h1
            class="text-white font-black text-center text-[2.5rem] md:text-[80px] font-playfair tracking-[0.01em] leading-[1.3]"
            v-html="$t('hero_title', { br: `<br class='block md:hidden' />` })" />
          <HeroCounter />
          <p
            class="text-white mt-10 tracking-[0.07em] px-0.5 md:px-0 md:tracking-normal md:mt-[6.1rem] md:leading-[1.4] text-xs md:text-lg text-center max-w-[560px] font-montserrat font-normal">
            {{ $t("hero_paragraph") }}
          </p>
          <SubscibeForm :placeholder="$t('enter_your_email')"
            class="mt-[1rem] md:mt-[1.7rem] bg-white text-black w-full max-w-[560px]" />
        </div>
      </div>
      <svg class="absolute bottom-0 left-0" viewBox="0 0 100 100">
        <path class="hidden md:block" fill="white" d="M0,88 Q50,108.75 100,88.4 L100,100 L0,100Z"></path>
        <path class="md:hidden" fill="white" d="M0,82.5 Q50,89 100,82.7 L100,100 L0,100Z"></path>
      </svg>
    </header>
    <div class="relative mx-auto">
      <div class="lg:absolute bottom-10 lg:bottom-0">
        <img class="relative z-10 w-[260px] 2xl:w-[670px] mx-auto -mt-[100px] translate-x-7 lg:translate-x-0"
          src='/fairy-ong-tien.png' />
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
  background-image: url('/hero-bg-mobile.webp');
  background-repeat: no-repeat;
  background-size: 115%;
  background-position: center 0%;
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
@media (min-width: 425px) {
  .hero {
    background-size: cover;
    background-image: url('/hero-bg-desktop.webp');
  }
}
@media (min-width: 768px) {
  .hero {
    background-size: cover;
    background-position-y: -28px;
    background-position-x: -25px;
    background-image: url('/hero-bg-2000x1028.webp');
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
    background-image: radial-gradient(27.72% 37.79% at 50.81% 68.15%, #210544 0%, rgba(23, 5, 68, 0.71) 50.52%, rgba(23, 5, 68, 0) 100%);

  }
}

@media (min-width: 2000px) {
  .hero {
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-image: url('/hero-bg.jpeg');
  }
}
</style>