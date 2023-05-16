<script lang="ts">
  import { Swiper, SwiperSlide } from 'svelte-swiper';
  var options = {
    slidesPerView: 1,
    loop:true,
    autoplay: {
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
        delay: 10000,
      },
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };

import InterestCard from './InterestCard.svelte';
</script>
<div class="my-3"> 

  <Swiper {options}>
    <SwiperSlide><InterestCard/></SwiperSlide>
    <SwiperSlide><InterestCard/></SwiperSlide>
    <SwiperSlide><InterestCard/></SwiperSlide>
    <SwiperSlide><InterestCard/></SwiperSlide>
    <SwiperSlide><InterestCard/></SwiperSlide>
    <SwiperSlide><InterestCard/></SwiperSlide>
    <SwiperSlide><InterestCard/></SwiperSlide>
  </Swiper>

</div>
<style>
</style>