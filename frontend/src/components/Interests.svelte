<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import Autoplay from 'embla-carousel-autoplay'

  import InterestCard from './InterestCard.svelte';
  let options={
    loop:false,
    slidesToScroll:1,
    breakpoints:{
      '(min-width: 768px)': { slidesToScroll:2 },
      '(min-width: 1100px)': { slidesToScroll:3 }
    }
  }
  let plugins=[Autoplay()]


</script>

<div class="my-3">

  <h2 class="text-end title">
    <span class="text">
      Látogass el hozzánk!
    </span>
  </h2>

  <div class="embla" use:emblaCarouselSvelte="{{options,plugins}}" >
    <div class="embla__container">
      <div class="embla__slide"><InterestCard/></div>
      <div class="embla__slide"><InterestCard/></div>
      <div class="embla__slide"><InterestCard/></div>
      <div class="embla__slide"><InterestCard/></div>
      <div class="embla__slide"><InterestCard/></div>
      <div class="embla__slide"><InterestCard/></div>
      <div class="embla__slide"><InterestCard/></div>
    </div>
  </div>


</div>

<style>


.embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }


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