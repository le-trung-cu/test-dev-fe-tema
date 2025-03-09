<template>
  <form action="" method="post" :class="['relative border rounded-lg h-14', dynamicClass || '']">
    <input type="email" class="w-full h-full border-none bg-transparent p-3 pr-10 placeholder:text-current/40 text-sm text-current"
      :placeholder="placeholder" />
    <ArrowRight class="absolute right-3 text-current top-1/2 -translate-y-1/2" />
  </form>
</template>

<script lang="ts" setup>
import ArrowRight from '~/icons/arrow-right.vue';

defineProps<{
  dynamicClass?: string;
  placeholder?: string;
}>();
</script>