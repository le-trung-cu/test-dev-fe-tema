<template>
  <footer class="">
    <div class="footer-bg pt-10 pb-[3.85rem] md:py-20 md:pb-[6.4rem]">
      <div class="relative container mx-auto z-10 px-[1rem] md:px-10 md:pt-6 md:grid md:grid-cols-3 xl:grid-cols-[1fr,410px,410px] gap-10">
        <div class="flex flex-col items-center md:block ">
          <Logo class="text-white w-[161px] h-[98px]" />
          <div class="flex justify-center md:justify-start items-center space-x-8 mt-10">
            <Twitter />
            <Facebook />
            <Linkedin />
          </div>
        </div>
        <div class="text-white mt-[4.5rem] md:pl-1 md:mt-0 max-w-[410px] lg:place-self-end">
          <h5 class="text-2xl font-bold">Address</h5>
          <div class="flex pl-1 md:pl-0 mt-5 md:mt-10">
            <Location class="size-[35px] flex-shrink-0 mr-3" />
            <address class="text-sm font-normal not-italic space-y-2.5">
              <div>Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US</div>
              <div>20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam</div>
            </address>
          </div>
          <div class="flex pl-1 md:pl-0 items-center mt-[1.5rem] md:mt-[2.75rem]">
            <Mobile class="lg:ml-1 mr-3.5" />
            <div class="text-sm font-normal not-italic space-x-2">
              <a href="tel:+1 555-0108-000">(+1) 555-0108-000</a>
              <span>or</span>
              <a href="tel:+236 555-0108">(+236) 555-0108</a>
            </div>
          </div>
        </div>
        <div class="text-white mt-[4.5rem] md:mt-0">
          <h5 class="text-2xl font-bold">Subscribe</h5>
          <p class="mt-5 text-sm font-normal not-italic space-y-5 md:mt-10">Subscribe to our newsletter and be the first to know
            about our updates</p>
          <SubscibeForm key="sub1" class="mt-4 md:mt-5 md:hidden" placeholder="Enter your email" />
          <SubscibeForm key="sub2" class="mt-5 md:mt-2.5 hidden md:block" placeholder="Enter your email" />
        </div>
      </div>
    </div>
    <p class="h-[86px] lg:h-[80px] flex justify-center items-center bg-black text-white text-lg">2017 Copyright. Policy.</p>
  </footer>
</template>

<script lang="ts" setup>
import Logo from "@/icons/logo.vue";
import Twitter from "@/icons/twitter.vue";
import Facebook from "@/icons/facebook.vue";
import Linkedin from "@/icons/linkedin.vue";
import Location from "~/icons/location.vue";
import Mobile from "~/icons/mobile.vue";
import SubscibeForm from "./subscibe-form.vue";
</script>

<style>
.footer-bg {
  position: relative;
  background-image: url('/bg-footer-md.webp');
  background-size: cover;
  background-position: center;
}

.footer-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 135%),
    linear-gradient(to bottom, rgba(0, 10, 255, 0.8) 0%, rgba(0, 10, 255, 0.5) 100%);
}

@media (min-width: 768px) {
  .footer-bg {
    background-image: url('/bg-footer.webp');
  }
}
</style>