<script lang="ts">
    import { register } from 'swiper/element/bundle';
    //ezt a hibát ne vedd figyelembe attól még működik
    register();


    import { meta, router } from "tinro";
    import db, { BackendUrl } from "../services/DB";
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
        background-repeat: repeat-x;
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
        box-shadow: 3px 3px 0 rgba(128, 128, 128, 0.5);
    }
    hr{
        color: var(--bs-primary);
        margin: 0
    }
    #desc{
        padding: 1rem;
    }
    h1{
        display: flex;
        align-items: center;
        margin-bottom: 0;
    }
    h1>a{
        margin-right: 0.5rem;
    }
    #backgroundthumb{
        position: absolute;
        min-height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -9;
        /*fallback collossal fuckupnál*/
        background-image: url('/kep_normal.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        backdrop-filter: blur(15px);
        overflow: hidden;


    }
    
    #backgroundthumb::before {
        content: "";
        position: absolute;
        width: 100%;
        min-height: 100vh;
        backdrop-filter: blur(5px);
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
{#await sight then sgt}
{#await db.GetFieldValue('SightsGallery', 'itemID',sgt[0].id) then data}
<div id="backgroundthumb" style:background-image={'url('+BackendUrl+'media/'+data.find(e=>e.preview).image+')'}></div>
{/await}
{/await}
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
            <div>
                <h1>
                    <a href="/" class="btn btn-dark rounded-0 my-0"><i class="bi bi-arrow-left"></i></a>
                    <span>{sgt.name}</span>
                </h1>
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
                    navigation={true}
                    autoplay= {{
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        delay: 5000,
                    }}
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
