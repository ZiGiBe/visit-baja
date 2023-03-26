<script lang="ts">
  import { Swiper, SwiperSlide } from 'svelte-swiper';
  const options = {
    slidesPerView: 3,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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