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

  <h2 class="text-end title">
    <span class="text">
      Látogass el hozzánk!
    </span>
  </h2>

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

.title{
  margin: 0 0 40px 40px;  
}

.text{
  padding: 20px;
  border-bottom: 0.3rem solid var(--kek3);
  border-radius:  60px 0 0 60px;
  background-color: var(--kek7);
  box-shadow: 20px 15px 20px gray;
  transition: 0.5s;
  color: white;
}




  /* Small */
  @media only screen and (max-width: 577px) {
      *{
          --fontsize: 18px;
      }
  }
  /* Medium */
  @media only screen and (min-width: 577px) and (max-width: 769px){
      *{
          --fontsize: 20px;
      }
  }
  /* Large */
  @media only screen and (min-width: 769px) {
      *{
          --fontsize: 22px;
      }
  }

</style>