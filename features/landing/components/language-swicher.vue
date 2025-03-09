<template>
  <div :class="['relative', dynamicClass]">
    <button @click="open = !open" class="flex items-center mr-2.5 mt-1">
      <img :src="photos[locale]" class="mr-4"/>
      <div class="inline-block border-[3px] border-t-transparent border-l-transparent rotate-45 origin-center -translate-y-1 border-white"></div>
    </button>
    <div v-if="open" class="absolute top-[40px] right-[10px] bg-white rounded-md px-2 w-[158px]">
      <NuxtLink v-for="item in locales" :key="item.code" :to="switchLocalePath(item.code)" class="flex items-center py-[3px] text-[10px] font-bold [&:not(:last-child)]:border-b-2">
        <span class="w-[38px] pl-1 shrink-0">
          <Check v-if="item.code===locale"/> 
        </span><img :src="photos[item.code]" class="size-[33px] mr-2"/> {{ item.name }}
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