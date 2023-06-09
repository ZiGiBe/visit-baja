<script lang="ts">
    import AOS from "aos";
    import 'aos/dist/aos.css'
    import { onMount } from "svelte";

    onMount(()=> {
        AOS.init();
    })


</script>

<div class="serviceCard row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-4 me-0 p-0 z-2">
        <img src="/kep_normal.jpg" alt="thumbnail" class="thumbnail">
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-8 ms-0 row ps-0 z-1 cover">
        <div class="col-12 col-sm-12 col-md-12 col-lg-9 ps-0">
            <div class="serviceNameWideScreen" data-aos="slide-right" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
                Bajai Csodálatos messzire néző Türr kilátó
            </div>
            <div class="serviceNameThinScreen">
                Bajai Csodálatos messzire néző Türr kilátó
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-3 p-0">
            <a href="/" class="buttonWideScreen btn">
                Érdekel
            </a>
        </div>
        <div class="col-12 p-3 mt-3 mt-sm-3 mt-md-3 mt-lg-0">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem minus quo earum nostrum laborum doloremque alias soluta voluptas, ab accusamus modi molestiae reprehenderit facere. Excepturi molestias perferendis iure illum ipsam?
            </p>
        </div>
        <div class="text-center">
            <a href="/" class="buttonThinScreen btn">
                Érdekel
            </a>
        </div>
    </div>
</div>

<style>
    .thumbnail{
        width: 100%;
        height: 30vh;
        object-fit: cover;
        box-shadow: -2px 5px 20px gray;
        border-radius: 5px;
    }

    .serviceCard{
        box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.363);
        padding: 20px;
        border-radius: 10px;
    }

    .serviceNameWideScreen{
        padding: 10px;
        border-bottom: 0.3rem solid var(--kek3);
        border-radius: 0 60px 60px 0;
        background-color: var(--kek7);
        box-shadow: -20px 15px 20px gray;
        color: white;
        width: fit-content;
        margin-top: 5px;
    }

    .serviceNameThinScreen{
        padding: 20px 15px 10px 15px;
        border-bottom: 0.3rem solid var(--kek3);
        border-radius: 0 0 30px 30px;
        background-color: var(--kek7);
        box-shadow: -2px 5px 20px gray;
        color: white;
        width: fit-content;
        margin-top: 10px;
        position: relative;
        left: 5px;
        top: 10px;
        display: none;
    }


    .buttonWideScreen{
        background-color: var(--kek5);
        color: white;
        border-radius: 50px;
        padding: 10px 15px;
        position: absolute;
    }

    .buttonThinScreen{
        background-color: var(--kek5);
        color: white;
        border-radius: 50px;
        padding: 10px 15px;
    }



    @media screen and (max-width: 992px) {
        .buttonWideScreen, .serviceNameWideScreen{
            display: none;
        }

        .buttonThinScreen, .serviceNameThinScreen{
            display: unset;
        }

        .cover{
            overflow-x: visible;
        }
    }

    @media screen and (min-width: 992px) {
        .buttonWideScreen{
            display: unset;
        }

        .buttonThinScreen{
            display: none;
        }
        .cover{
            overflow-x: hidden;
        }
    }

</style>