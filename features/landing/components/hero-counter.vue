<template>
  <div
    class="flex bg-white rounded-[21px] py-[1.5rem] px-5 md:px-10 lg:px-[40px] w-full justify-around  mt-6 md:w-[680px]">
    <div class="text-center flex-1">
      <div class="font-black text-3xl md:text-6xl font-playfair">{{ countdown.days }}</div>
      <div class="font-bold text-xs md:text-base font-montserrat mt-7">{{ countdown.days > 1? $t('days') : $t('day')}}</div>
    </div>
    <div class="text-3xl md:text-6xl">:</div>
    <div class="text-center flex-1">
      <div class="font-black text-3xl md:text-6xl font-playfair">{{ countdown.hours }}</div>
      <div class="font-bold text-xs md:text-base font-montserrat mt-7">{{countdown.hours > 1? $t('hours') : $t('hour')}}</div>
    </div>
    <div class="text-3xl md:text-6xl">:</div>
    <div class="text-center flex-1">
      <div class="font-black text-3xl md:text-6xl font-playfair">{{ countdown.minutes }}</div>
      <div class="font-bold text-xs md:text-base font-montserrat mt-7">{{ countdown.minutes > 1? $t('minutes') : $t('minute') }}</div>
    </div>
    <div class="text-3xl md:text-6xl">:</div>
    <div class="text-center flex-1">
      <div class="font-black text-3xl md:text-6xl font-playfair">{{ countdown.seconds }}</div>
      <div class="font-bold text-xs md:text-base font-montserrat mt-7">{{ $t('second') }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const targetDate = new Date(2025, 3, 10, 12, 0, 0).getTime();
const countdown = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

let interval;

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(interval);
    return;
  }

  countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
  countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);

};

onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>