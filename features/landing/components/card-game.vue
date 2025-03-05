<template>
  <div class="card-game relative aspect-[164/268] md:aspect-[410/560] rounded-lg overflow-clip shadow-xl">
    <img :src="photo" alt="" class="absolute top-0 left-0 h-full w-full object-cover">
    <div class="absolute bottom-0 pb-4 px-2 md:pb-7 md:px-7 z-10 ">
      <h5 class="text-2xl text-white font-bold">{{ title }}</h5>
      <p class="text-xs font-normal mt-1 text-white/75">{{ description }}</p>
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