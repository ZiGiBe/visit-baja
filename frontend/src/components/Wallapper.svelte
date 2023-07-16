<script lang="ts">
    import { onMount } from 'svelte';
    import { register } from 'swiper/element/bundle';
    import db, { BackendUrl } from '../services/DB';
    //ezt a hibát ne vedd figyelembe attól még működik
    register();
    let images

    onMount(async()=>{
        images = await db.Get('IndexSlideshow');
    })
    var options = {
        slidesPerView: 1,
        loop:true,
        effect: 'fade',
        speed:1000,
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            delay: 3000,
        },
    };
</script>

<style>
    .image{
        width: 100%;
        height: 100vh;
        object-fit: cover;
        margin-bottom: 15vh;
    }
    .background{
        z-index: 1;
        overflow: hidden;
        height: calc(100vh - 70px);
        width: 100%;
        margin-bottom: 150px;
        position: absolute;
        top: 70px;
    }
    .logo{
        width: clamp(0px 30vh 60vw);
        max-width: 70vw;
        max-height: calc(80vh - 70px);
        position: absolute;
        top: 40vh;
        left: 20%;
        object-fit: cover;
        z-index: 4;
    }
    .darkness{
        background: linear-gradient(90deg, rgba(0,0,0,0.7413340336134453) 0%, rgba(255,0,0,0) 100%);
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    .wave{
        width: 100%;
        height: 25vh;
        position: absolute;
        top: 86vh;
        z-index: 3;
    }

    .margin{
        margin-bottom: 110vh;
    }

    @media screen and (max-width: 768px) {
        .wave{
           object-fit: cover;
        }
    }

</style>

<div>
    <div class="margin"></div>
    <div class="darkness"></div>
    <img src="/logo.png" alt="Logó" class="logo">
    <img src="/wave.png" alt="wave" class="wave">
    <div class="background">
        {#if images}
        <swiper-container
        loop={true}
        effect={"fade"}
        slides-per-view={1}
        speed={1000}
        autoplay= {{
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            delay: 2000,
        }}
      >
        {#each images as image}
            <swiper-slide><img src={BackendUrl + 'media/' + image.filename} alt="Háttér" class="image"></swiper-slide>
        {/each}
        {#if images.length < 1}
        <swiper-slide><img src="/kep_normal.jpg" alt="Háttér" class="image"></swiper-slide>
        {/if}
      </swiper-container> 
      {/if}
    </div>
</div>