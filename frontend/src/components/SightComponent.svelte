<script lang="ts">
    import type { Sight } from "../interfaces/Sights";
    import { BackendUrl } from "../services/DB";
    import EditorJsConverter from "../services/EditorJSConverter.svelte";
    export let sightData: Sight;
    
    import { register } from 'swiper/element/bundle';
    import { i18n } from "../services/i18n";
    register();
    console.log(sightData);
</script>
<style lang="sass">
    #content
        border: 1px solid black
        max-width: 60em
        margin: auto
        background-color: white
        z-index: 99
        box-shadow: 2px 2px 1rem rgba(0,0,0,0.75)
    header>h1
        margin-bottom: 0
        padding: 0.5rem 1rem
    article
        padding: 1rem
    swiper-container
        height: 400px
        background-color: #000
        swiper-slide
            background-color: #000
            div
                height: 400px
                img
                    height: 100%
                    margin: auto

    @media screen and (min-width: 1010px)
        #content
            max-height: calc(95vh - 70px)
            overflow: auto
        header
            position: sticky
            top: 0
            background-color: rgba(255, 255, 255, 0.9)
            backdrop-filter: blur(10px)
    @media screen and (max-width: 1010px)
        #content
            width: 90%
            margin: 1rem auto
</style>
<div id="content" class="rounded-1">
    <header class="d-flex">
        <h1>{$i18n.t('Sight-'+sightData.id+':name')}</h1>
    </header>
    <div id="contentcontainer">
         <!--Swipert valahova ide-->
       
            
            <swiper-container
            loop={true}
            slides-per-view={1}
            grab-cursor={true}
            navigation= {true}
            autoplay= {{
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                delay: 4000
            }}
            >
            {#each sightData.gallery as image}
                <swiper-slide>
                    <div class="w-100 d-flex justify-content-center">
                        <img src={BackendUrl + 'media/' + image.image} alt="kép" class="image">
                    </div>
                </swiper-slide>
            {/each}
            </swiper-container> 


        <article>
            {#each sightData.fulldesc.blocks as block}
                <EditorJsConverter {block} />
            {/each}
        </article>
    </div>
</div>