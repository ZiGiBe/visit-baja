<script lang="ts">
    import { register } from 'swiper/element/bundle';
    //ezt a hibát ne vedd figyelembe attól még működik
    register();

    var options = {
        slidesPerView: 1,
        loop:true,
        effect: 'fade',
        speed:1000,
        autoplay: {
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            delay: 5000,
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
        margin-bottom: 150px;
    }
    .logo{
        width: clamp(0px 30vh 60vw);
        max-width: 70vw;
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

    @media screen and (max-width: 768px) {
        .wave{
           object-fit: cover;
        }
    }


</style>

<div>
    <div class="darkness"></div>
    <img src="/logo.png" alt="Logó" class="logo">
    <img src="/wave.png" alt="wave" class="wave">
    <div class="background">
        <swiper-container
        loop={true}
        effect={"fade"}
        slides-per-view={1}
        speed={1000}
        autoplay= {{
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            delay: 5000,
        }}
      >
        <swiper-slide><img src="/hatter.jpg" alt="Háttér" class="image"></swiper-slide>
        <swiper-slide><img src="/kep_normal.jpg" alt="Háttér" class="image"></swiper-slide>
      </swiper-container> 
    </div>
</div>