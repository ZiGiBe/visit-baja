<script>
    import InfoCard from '../Cards/InfoCard.svelte';
    import { register } from 'swiper/element/bundle';
    register();
    import db from '../../services/DB';

    let Infos = db.Get('Infos');

</script>

<div class="my-3">

    <h2 class="title">
      <span class="text">
        Fontos tudnivalók
    </span>
    </h2>
    {#await Infos}
      <div class="spinner-border"></div>
    {:then Infos}
      <swiper-container
        loop={true}
        slides-per-view={1}
        space-between={30}
        grab-cursor="true"
        autoplay={{
                disableOnInteraction:true,
                pauseOnMouseEnter: true,
                delay: 5000,
                reverseDirection: true
              }}
        breakpoints={{
          768: {
            slidesPerView: Infos.length >= 4 ? 2 : 1,
            spaceBetween: 30
          },
          1100: {
            slidesPerView: Infos.length >= 6 ? 3 : Infos.length >= 4 ? 2 : 1,
            spaceBetween: 30
          }
        }}
      >
        {#each Infos as Info}
          <swiper-slide><InfoCard InfoData={Info}/></swiper-slide>
        {/each}
      </swiper-container>
    {/await}
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