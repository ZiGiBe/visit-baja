<script lang="ts">
  import { register } from 'swiper/element/bundle';
  import ProgramCard from './ProgramCard.svelte';
  import db from '../services/DB';
    import { i18n } from '../services/i18n';
  let Programs = db.GetFieldValue('Programs', 'end', new Date().toISOString(), 'gte');
  //ezt a hibát ne vedd figyelembe attól még működik
  register();
</script>
<div class="my-3 bg">

  <h2 class="title">
    <span class="text">
      {$i18n.t('index.programs')}
    </span>
  </h2>
  {#await Programs}
    <div class="spinner-border"></div>
  {:then Programs} 
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
          slidesPerView: Programs.length >= 4 ? 2 : 1,
          spaceBetween: 30
        },
        1100: {
          slidesPerView: Programs.length >= 6 ? 3 : Programs.length >= 4 ? 2 : 1,
          spaceBetween: 30
        }
      }}
    >
      {#each Programs as Program}
        <swiper-slide><ProgramCard ProgramData={Program}/></swiper-slide>
      {/each}
    </swiper-container>
  {/await}
</div>
<style>

.bg{
    background-color: rgba(255, 255, 255, 0.8);
    background-image: url('/party.png');
    background-repeat: repeat;
    background-blend-mode: overlay;
}


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