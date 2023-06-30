<script lang="ts">
    import { register } from 'swiper/element/bundle';
    //ezt a hibát ne vedd figyelembe attól még működik
    register();


    import { meta, router } from "tinro";
    import db from "../services/DB";
    import Menu from "../components/Menu.svelte";
    import EditorJsConverter from "../services/EditorJSConverter.svelte";
    let sightHref = meta().params.sighthref;
    let sight = db.GetFieldValue('Sights', 'href', sightHref);
</script>

<style>
    #page{
        display: flex;
        min-height: 100vh;
        flex-flow: column;
    }

    main{
        background-image: url('/wave.png');
        background-repeat: no-repeat;
        background-position: center;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #content{
        max-width: 40em;
        line-height: 1.6;
        background-color: white;
        border: 1px solid black;
        border-radius: 0.25rem;
        box-shadow: 3px 3px 3px gray;
    }
    hr{
        color: var(--bs-primary);
        margin: 0
    }
    #desc{
        padding: 1rem;
    }
    #header{
        padding: 0.5rem
    }
    h1{
        display: flex;
        align-items: center;
        margin-bottom: 0;
    }
    h1>a{
        margin-right: 0.5rem
    }



  /* puruttya swiper css */

    swiper-container {
        background-color:#000;  
        width: 100%;
        height: 350px;
    }

    swiper-slide {
        height: 100%;
    }

    swiper-slide img {
        margin-top: auto;
        margin-bottom: auto;
        object-fit: contain;
        width: 100%;
        height: 100%;
    }


</style>
<div id="page">
    <Menu/>
    <main>
        <div id="content">
            {#await sight}
            <div class="placeholderwidth">

            
            <h3 class="placeholder-wave">
                <span class="placeholder col-8"></span>
            </h3>
            <p class="placeholder-wave"><span class="placeholder col-12"></span></p>
            <p class="placeholder-wave"><span class="placeholder col-12"></span></p>
            <p class="placeholder-wave"><span class="placeholder col-12"></span></p>
            <p class="placeholder-wave"><span class="placeholder col-12"></span></p>
            <button disabled={true} class="btn btn-primary disabled placeholder-wave col-3">
                <span class="placeholder col-12"></span>
            </button>
            </div>
            {:then data}
            {#if data[0]}
            {@const sgt = data[0]}
            <div id="header" class="bg-primary bg-gradient text-light">
                <h1>
                    <a href="/" class="btn btn-dark my-auto"><i class="bi bi-arrow-left"></i></a>
                    <span>{sgt.name}</span>
                </h1>
                <hr>
            </div>


            {#await db.GetFieldValue('SightsGallery', 'itemID',sgt.id)}
            <p class="placeholder-glow col-12">
                <span class="placeholder col-11"/>
            </p>
            {:then images} 
                <swiper-container 
                    class="gallery"
                    thumbs-swiper={"#thumb"}
                    loop={true} 
                    space-between={10} 
                    >
                    {#each images as image, i}
                        <swiper-slide>
                            <img src={"http://localhost:8080/media/"+image.image}  alt="">
                        </swiper-slide>
                    {/each}
                </swiper-container>
            {/await}

            <div id="desc">
                
                <div class="description">
                    {#each JSON.parse(sgt.fulldesc).blocks as block}
                        <EditorJsConverter {block} />
                    {/each}
                </div>
            </div>
            {:else}
            {router.goto('/')}
            {/if}
            {/await}
        </div>
    </main>
</div>
