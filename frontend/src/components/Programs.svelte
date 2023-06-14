<script lang="ts">
  import { register } from 'swiper/element/bundle';
  import type { Program } from '../interfaces/Programs';
  //ezt a hibát ne vedd figyelembe attól még működik
  register();

    // Példa a kőködéshez

    let example:Program = {
      id: 0,
      title: "Example Title",
      start: new Date(),
      end: new Date(),
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      href: "https://visithajos.hu",
      image: "kep_tall.jfif"
    }
    //-----------------------

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

import ProgramCard from './ProgramCard.svelte';
</script>
<div class="my-3">

  <h2 class="title">
    <span class="text">
      Nálunk mindig történik valami!
    </span>
  </h2>

  <swiper-container
  loop={true}
  slides-per-view={1}
  space-between={30}
  grab-cursor="true"
  autoplay={{
          disableOnInteraction:true,
          pauseOnMouseEnter: true,
          delay: 5000,
        }}
  breakpoints={{
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }}
>
  <swiper-slide><ProgramCard ProgramData={example}/></swiper-slide>
  <swiper-slide><ProgramCard ProgramData={example}/></swiper-slide>
  <swiper-slide><ProgramCard ProgramData={example}/></swiper-slide>
  <swiper-slide><ProgramCard ProgramData={example}/></swiper-slide>
  <swiper-slide><ProgramCard ProgramData={example}/></swiper-slide>
  <swiper-slide><ProgramCard ProgramData={example}/></swiper-slide>
  <swiper-slide><ProgramCard ProgramData={example}/></swiper-slide>
  <swiper-slide><ProgramCard ProgramData={example}/></swiper-slide>
  <swiper-slide><ProgramCard ProgramData={example}/></swiper-slide>
  <swiper-slide><ProgramCard ProgramData={example}/></swiper-slide>
  <swiper-slide><ProgramCard ProgramData={example}/></swiper-slide>
  <swiper-slide><ProgramCard ProgramData={example}/></swiper-slide>

  
</swiper-container>

</div>
<style>

.title{
  margin: 60px 0 60px 0;  
}

.text{
  padding: 20px;
  border-bottom: 0.3rem solid var(--kek3);
  border-radius: 0 60px 60px 0;
  background-color: var(--kek7);
  box-shadow: -20px 15px 20px gray;
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