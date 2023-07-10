<script lang="ts">
    import { onMount } from "svelte";
    import EditorJsConverter from "../../../services/EditorJSConverter.svelte";
    import FormMaker from "./TranslationForms/FormMaker.svelte";
    export let dataPromise: Promise<any>
    
    let editorData;
    let translations = []
    let translationindex = 0;

    onMount(async()=>{
        editorData = await dataPromise;
        translations.push(
            Title(editorData),
            Desc(editorData),
            ...JSON.parse(editorData.fulldesc).blocks.map(e=>Block(e))
        )
        translations = translations.filter(e=>e.type);
        translations = translations
        console.log(translations)
    })
    let unique = {};
    function Title(data){
        let object = {} as any;
        
        object.type = "Név";
        
        if (data.title) object.title = data.title;
        if (data.name) object.name = data.name;
        
        object.to = "";

        return object;
    }
    function Desc(data){
        let object = {} as any;

        object.type = "Rövid leírás"

        if (data.shortdesc) object.shortdesc = data.shortdesc;
        if (data.desc) object.desc = data.desc;

        object.to = ""

        return object;
    }
    function Block(data){
        return {
            type: TypetoText(data.type),
            original: {
                ...data
            },
            to: {
                
            }
        }
    }
    function TypetoText(text:string){
        switch (text){
            case 'header': return 'Címsor';
            case 'list': return 'Lista';
            case 'paragraph': return 'Szövegblokk';
            case 'table': return 'Táblázat';
            case 'quote': return 'Idézet';
            case 'warning': return 'Figyelmeztetés'
        }
    }
    function restart(){
        unique = {};
        console.log(translations)
    }
</script>
<style lang="sass">
    #main   
        max-width: 60em
        margin: auto
        border-left: var(--bs-border-width) solid var(--bs-border-color)
        border-right: var(--bs-border-width) solid var(--bs-border-color)
        border-bottom: var(--bs-border-width) solid var(--bs-border-color)
        #translationnavigation
            display: flex
            flex-flow: row
            overflow-x: auto
            overflow-y: hidden
            height: 150px
            .block
                min-width: 150px
                transition: background-color 0.15s 
                button
                    height: 100%
                    width: 100%
                    border: 0
                    background: 0
            .block.active
                background-color: gray
    header
        text-align: center
        padding: 2.5rem
    hr
        margin: 0
        padding: 0
</style>
<header>
    {#if editorData}
    <h1>Fordítás - {editorData.name ? editorData.name : editorData.title}</h1>
    {/if}
</header>
<hr>
<div id="main">
    {#if editorData}
    <div id="translationnavigation">
        {#each translations as block, i}
            <div class="block" class:active={translationindex==i}>
                <button on:click={()=>{
                    translationindex = i;
                    restart();
                }}>{block.type}</button>
            </div>
        {/each}
    </div>
    <div id="translationeditor">
        {#if translations[translationindex].original}
        {#key unique}
            <FormMaker block={translations[translationindex]} />
        {/key}
        {/if}
    </div>
    {:else}
    <p>Betöltend...</p>
    {/if}
</div>
