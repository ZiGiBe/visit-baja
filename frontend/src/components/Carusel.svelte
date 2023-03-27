<script lang="ts">
  import { Swiper, SwiperSlide } from 'svelte-swiper';
  const options = {
    slidesPerView: 1,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
    spaceBetween: 30,
    freeMode: true,
  };
  import ProgramCard from './ProgramCard.svelte';
</script>
<div class="my-3"> 

  <Swiper {options}>
    <SwiperSlide><ProgramCard/></SwiperSlide>
    <SwiperSlide><ProgramCard/></SwiperSlide>
    <SwiperSlide><ProgramCard/></SwiperSlide>
    <SwiperSlide><ProgramCard/></SwiperSlide>
    <SwiperSlide><ProgramCard/></SwiperSlide>
    <SwiperSlide><ProgramCard/></SwiperSlide>
    <SwiperSlide><ProgramCard/></SwiperSlide>
    <SwiperSlide><ProgramCard/></SwiperSlide>
    <SwiperSlide><ProgramCard/></SwiperSlide>
    <SwiperSlide><ProgramCard/></SwiperSlide>
  </Swiper>
  
</div>

<style>
</style>