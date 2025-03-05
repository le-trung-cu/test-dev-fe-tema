<template>
  <footer class="">
    <div class="footer-bg pt-10 pb-14 md:py-20">
      <div class="relative container mx-auto z-10 px-6 md:px-5 md:grid grid-cols-3 gap-10">
        <div class="flex flex-col items-center md:block ">
          <Logo class="text-white w-[170px] h-[100px]" />
          <div class="flex justify-center md:justify-start items-center space-x-10 mt-10">
            <Twitter />
            <Facebook />
            <Linkedin />
          </div>
        </div>
        <div class="text-white mt-14 md:mt-0">
          <h5 class="text-2xl font-bold">Address</h5>
          <div class="flex mt-5">
            <Location class="size-[30px] flex-shrink-0 mr-2.5" />
            <address class="text-sm font-normal not-italic space-y-5">
              <div>Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US</div>
              <div>20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam</div>
            </address>
          </div>
          <div class="flex items-center mt-5">
            <Mobile class="mr-2.5" />
            <div class="text-sm font-normal not-italic space-y-5">
              <a href="tel:+1 555-0108-000">(+1) 555-0108-000</a>
              or
              <a href="tel:+236 555-0108">(+236) 555-0108</a>
            </div>
          </div>
        </div>
        <div class="text-white mt-10 md:mt-0">
          <h5 class="text-2xl font-bold">Subscribe</h5>
          <p class="mt-5 text-sm font-normal not-italic space-y-5">Subscribe to our newsletter and be the first to know
            about our updates</p>
          <SubscibeForm key="sub1" class="w-[60%] mt-5 lg:hidden" placeholder="Enter" />
          <SubscibeForm key="sub2" class="w-[60%] mt-5 hidden lg:block" placeholder="Enter your email" />
        </div>
      </div>
    </div>
    <p class="h-[86px] flex justify-center items-center bg-black text-white text-lg">2017 Copyright. Policy.</p>
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