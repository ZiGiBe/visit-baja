<script lang="ts">
    import type { Sight } from "../interfaces/Sights";
    import { BackendUrl } from "../services/DB";
    import EditorJsConverter from "../services/EditorJSConverter.svelte";

    export let sightData: Sight;

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
    #images
        height: 250px
        width: 100%
        background-color: gray
    header>h1
        margin-bottom: 0
        padding: 0.5rem 1rem
    article
        padding: 1rem
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
        <h1>{sightData.name}</h1>
    </header>
    <div id="contentcontainer">
         <!--Swipert valahova ide-->
        <div id="images"></div>
        <article>
            {#each sightData.fulldesc.blocks as block}
                <EditorJsConverter {block} />
            {/each}
        </article>
    </div>
</div>