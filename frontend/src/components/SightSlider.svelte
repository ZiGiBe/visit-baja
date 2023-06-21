<script lang="ts">
import SightCard from './SightCard.svelte';
import { register } from 'swiper/element/bundle';
import type { Sight } from '../interfaces/Sights';
import type { Gallery } from '../interfaces/Gallery';
    import Sight from './Admin/Modal/Mod/Sight.svelte';
//ezt a hibát ne vedd figyelembe attól még működik
register();

    // Példa a kőködéshez
    let exampleGallery:Gallery ={
      image:"kep_normal.jpg",
      preview:true,
    }

    let example:Sight = {
      name:"Example name",
      shortdesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      fulldesc:"long",
      href:"asd",
      gallery:[exampleGallery]
    }
    //-----------------------

  let SightList:Sight[]=[example,example,example,example,example,example]

</script>

<div class="my-3">

  <h2 class="text-end title">
    <span class="text">
      Látogass el hozzánk!
    </span>
  </h2>

  {#await SightList}
    <div class="spinner-border"></div>
  {:then Sights} 
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
          slidesPerView: 2>Sights.length-1?1:2,
          spaceBetween: 30
        },
        1100: {
          slidesPerView: 3>Sights.length-1?2>Sights.length-1?1:2:3,
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