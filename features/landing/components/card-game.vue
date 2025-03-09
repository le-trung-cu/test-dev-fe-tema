<template>
  <div class="card-game relative aspect-[164/268] md:aspect-[410/560] rounded-lg overflow-clip shadow-xl">
    <img :src="photo" alt="" class="absolute top-0 left-0 h-full w-full object-cover">
    <div class="absolute left-0 bottom-0 w-full pb-2.5 md:pb-3 pl-2 md:pl-8 md:bottom-7 z-10 ">
      <h5 class="text-2xl md:w-[94%] md:text-5xl text-white font-bold lg:leading-[1.18] -tracking-[0.02em]">{{ title }}</h5>
      <p class="text-xs w-[94%] pr-3 md:text-sm font-normal mt-1 md:mt-4 text-white/75 tracking-[0.06em] leading-[1.22] md:tracking-normal">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  photo: string;
}>()
</script>

<style scoped>
.card-game::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(360deg, rgba(0, 9, 225, 0.5) 6.79%, rgba(0, 0, 0, 0) 61.34%);
}
</style>