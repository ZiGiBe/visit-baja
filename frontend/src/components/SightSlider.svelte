<script lang="ts">
  import { register } from 'swiper/element/bundle';
  import { i18n } from '../services/i18n';
  register();
  import SightCard from './SightCard.svelte';
  import type { Sight } from '../interfaces/Sights';
  import type { Gallery } from '../interfaces/Gallery';
  import db from '../services/DB';

  let SightsPromise = Promise.all([db.Get('Sights'), db.GetFieldValue('SightsGallery', 'preview', 1)]).then((Results)=>{
  let sights = Results[0] as Sight[];
  let images = Results[1] as Gallery[];
  
  return sights.map(e=>{return {
    ...e,
    gallery: images.filter(h=>h.itemID==e.id)
  }
})
})

</script>

<div class="my-3 bg">

  <h2 class="text-end title">
    <span class="text">
      {$i18n.t('index.visitus')}
    </span>
  </h2>

  {#await SightsPromise}
    <div class="spinner-border"></div>
  {:then Sights} 
    <swiper-container
      loop="true"
      slides-per-view=1
      space-between=30
      grab-cursor="true"
      autoplay={{
              disableOnInteraction:true,
              pauseOnMouseEnter: true,
              delay: 5000,
            }}
      breakpoints={{
        768: {
          slidesPerView: Sights.length >= 4 ? 2 : 1,
          spaceBetween: 30
        },
        1100: {
          slidesPerView: Sights.length >= 6 ? 3 : Sights.length >= 4 ? 2 : 1,
          spaceBetween: 30
        }
      }}
    >
      {#each Sights as Sight}
        <swiper-slide><SightCard SightData={Sight}/></swiper-slide>
      {/each}
    </swiper-container>
  {/await}
</div>

<style>

.bg{
    background-color: rgba(255, 255, 255, 0.7);
    background-image: url('/latnivalo.png');
    background-repeat: repeat;
    background-blend-mode: overlay;
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