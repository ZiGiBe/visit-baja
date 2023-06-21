<script lang="ts">
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
    .carousel, .carousel-inner{
        height: 300px;
    }
    .carousel-item, .carousel-item>img{
        height: 100%;
    }
    .carousel-item{
        background-color: black;
    }
    .carousel-item>img{
        margin: auto;
        max-width: 100%;
        object-fit: scale-down;
    }
    .carousel>.placeholder-glow{
        height: 240px;
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
            <div class="carousel slide" data-bs-ride="carousel" id="sightImages">
                {#await db.GetFieldValue('SightsGallery', 'itemID',sgt.id)}
                    <p class="placeholder-glow col-12">
                        <span class="placeholder col-11"/>
                    </p>
                {:then images} 
                    <div class="carousel-inner">
                        {#each images as image, i}
                            <div class="carousel-item" class:active={i==0}>
                                <img src={"http://localhost:8080/media/"+image.image} class="d-block" alt="">
                            </div>
                        {/each}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#sightImages" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#sightImages" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    
                {/await}
            </div>
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
