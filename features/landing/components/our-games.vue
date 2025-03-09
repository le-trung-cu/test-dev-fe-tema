<template>
  <div class="pt-[150px] pb-4 md:pb-12 md:pt-[210px]">
    <div class="map max-w-[1160px] mx-auto aspect-[2250/1500]">
      <Pins class="absolute z-10 w-[65%] md:w-[65%] left-1/2 -translate-x-1/2 top-[40%] md:top-1/4" />
      <img ref="animatedElement" :class="{ visible: isVisible, hiddenX: !isVisible }"
        class="absolute magician z-10 w-[300px] lg:w-[530px] left-1/2 md:left-[calc(50%+14px)] -translate-x-1/2 -translate-y-full top-[55%] md:top-1/2 lg:top-[37.5%]"
        src="/magician.png" />
    </div>

    <h2 class="relative z-10 text-center text-[2.5rem] md:text-[3.75rem] font-black font-playfair mt-11 md:-mt-10 tracking-wide md:tracking-wider">{{
      $t('our_games_title') }}</h2>
    <p class="text-muted-foreground font-normal text-sm text-center mt-5 md:mt-2 max-w-[840px] px-2 md:px-0 mx-auto">
      {{ $t('our_games_paragraph') }}
    </p>
    <div class="custom-container flex flex-wrap px-2 lg:px-0 py-[1.85rem] md:py-[3.8rem] mx-auto">
      <div v-for="chunk in [0, 1, 2, 3]" :key="chunk"
        :class="{ 'basis-1/2 md:basis-1/4': true, 'order-1': chunk === 0, 'order-3 -mt-[2.1rem] md:order-2 md:mt-[7.5rem]': chunk === 1, 'order-2 mt-[2.1rem] md:order-3 md:mt-0': chunk === 2, 'order-4 md:mt-[7.5rem]': chunk === 3 }">
        <div v-for="item of listGames.slice(chunk * 3, chunk * 3 + 3)" :key="item.title" class="px-2 py-2.5 lg:p-5">
          <CardGame :title="item.title" :description="item.description" :photo="item.photo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Pins from "@/icons/pins.vue";
import CardGame from "./card-game.vue";
import { listGames } from "../list-games";
import { ref, onMounted, onUnmounted } from "vue";

const animatedElement = ref<HTMLImageElement | null>(null);
const isVisible = ref(false);

let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log('yyy', entry)
        if (entry.isIntersecting) {
          isVisible.value = true;
          if (!animatedElement.value) {
            return;
          }
          animatedElement.value.style.opacity = '0%';
          const transformMe = animatedElement.value?.style.transform;
          const imageAnimate = animatedElement.value?.animate([
            {
              transform: "translateX(-100%) translateY(-50%) scale(-0.2, 0.2)",
              opacity: 0
            },
            {
              transform: "translateX(90%) scale(0.4)",
              opacity: 0.7
            },
            {
              transform: transformMe,
              opacity: 1
            },
          ], {
            delay: 1000,
            duration: 2000,
            easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
          });
          imageAnimate?.addEventListener("finish", ev => {
            animatedElement.value!.style.opacity = '1';
            animatedElement.value?.animate([
              {
                transform: "translateY(%)"
              },
              {
                transform: "translateY(10%)"
              }
            ], {
              composite: "add",
              direction: "alternate",
              duration: 2000,
              iterations: Infinity,
              delay: 1000,
            });
          });

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  console.log('xxxx', animatedElement.value)
  if (animatedElement.value) {
    observer.observe(animatedElement.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.map {
  position: relative;
}

.map::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/map.png');
  background-position: 50% 60px;
  background-size: contain;
  background-repeat: no-repeat;
}

.map::before {
  content: '';
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, #fff, transparent 50%);
}

.pins {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
}

@media (min-width: 768px) {
  .map::after {
    background-position: 50% 40px;
  }
}

.hiddenX {
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.visible {
  opacity: 1;
}
</style>