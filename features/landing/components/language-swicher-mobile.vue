<template>
  <div :class="['relative', dynamicClass]">
    <button @click="open = !open" class="flex items-center bg-[#F6F6F6] border-[#AFAFAF] px-5 py-1 border rounded-lg">
      <img :src="photos[locale]" class="mr-5" />
      <div
        class="inline-block border-[6px] border-t-transparent border-l-transparent rotate-45 origin-center -translate-y-1 border-black shadow-2xl">
      </div>
    </button>
    <div v-if="open" class="absolute top-[50px] left-0 bg-white rounded-2xl px-2 w-[230px] border">
      <NuxtLink v-for="item in locales" :key="item.code" :to="switchLocalePath(item.code)"
        class="flex items-center py-2 text-sm font-bold [&:not(:last-child)]:border-b-2">
        <span class="w-[45px] pl-2 shrink-0">
          <Check v-if="item.code === locale" />
        </span><img :src="photos[item.code]" class="size-[33px] mr-3" /> {{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Check from '~/icons/check.vue';

defineProps<{
  dynamicClass?: string;
}>();

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const open = ref(false);
const photos = {
  'vi': '/vietnam.png',
  'en': '/united-states.png',
}

</script>