<template>
  <div
    class="timer-wrap flex bg-white rounded-[21px] h-[7.3rem] lg:px-[39px] w-full justify-between items-center mt-[2.1rem] md:mt-[1.8rem] md:w-[47.25rem] md:h-[9.375rem]">
    <div class="text-center timer  lg:w-[5.1rem]">
      <div
        class="font-black text-[2.25rem] md:text-6xl font-playfair leading-none md:leading-none tracking-widest mt-1">{{
          countdown.days }}</div>
      <div class="font-bold text-xs md:text-base font-montserrat mt-4 md:mt-5 leading-none md:leading-none">{{
        countdown.days > 1 ? $t('days') : $t('day') }}</div>
    </div>
    <div class="text-[2.25rem] text-center md:text-6xl flex-1 md:mb-5  mt-1">:</div>
    <div class="text-center timer  lg:w-[5.1rem]">
      <div
        class="font-black text-[2.25rem] md:text-6xl font-playfair leading-none md:leading-none tracking-widest  mt-1">
        {{ countdown.hours }}</div>
      <div class="font-bold text-xs md:text-base font-montserrat leading-none md:leading-none mt-4 md:mt-5">
        {{ countdown.hours > 1 ? $t('hours') : $t('hour') }}</div>
    </div>
    <div class="text-[2.25rem] text-center md:text-6xl flex-1 md:mb-5  mt-1">:</div>
    <div class="text-center timer  lg:w-[5.1rem]">
      <div
        class="font-black text-[2.25rem] md:text-6xl font-playfair leading-none md:leading-none tracking-widest  mt-1">
        {{ countdown.minutes }}</div>
      <div class="font-bold text-xs md:text-base font-montserrat leading-none md:leading-none mt-4 md:mt-5">{{
        countdown.minutes > 1 ? $t('minutes') : $t('minute') }}</div>
    </div>
    <div class="text-[2.25rem] text-center md:text-6xl flex-1 md:mb-5  mt-1">:</div>
    <div class="text-center timer  lg:w-[5.1rem]">
      <div
        class="font-black text-center md:text-end text-[2.25rem] md:text-6xl font-playfair leading-none md:leading-none tracking-widest  mt-1">
        {{ countdown.seconds }}</div>
      <div class="font-bold text-xs md:text-base font-montserrat leading-none md:leading-none mt-4 md:mt-5">{{
        $t('second') }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const targetDate = new Date(2025, 3, 10, 12, 0, 0).getTime();
const countdown = reactive({
  days: 30,
  hours: 18,
  minutes: 20,
  seconds: 11,
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

<style scoped>
.timer-wrap {
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}

.timer {
  width: 4rem;
}

@media (min-width: 375px){
  .timer-wrap {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }

  .timer {
    width: 3.6rem;
  }
}
@media (min-width: 700px){
  .timer-wrap {
    padding-left: 2.4375rem;
    padding-right: 2.4375rem;
  }
  .timer {
    width: 5.1rem;
  }
}
</style>