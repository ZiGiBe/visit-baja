<script lang="ts">
    import { onMount } from "svelte";
    import FormMaker from "./TranslationForms/FormMaker.svelte";
    export let dataPromise: Promise<any>
    
    let editorData;
    let translations = []
    let translationindex = 0;

    onMount(async()=>{
        editorData = await dataPromise;
        translations.push(
            LangSelect(),
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
    function LangSelect(){
        return {
            langs: ["en"]
        }
    }
    function restart(){
        unique = {};
    }
</script>
<style lang="sass">
    #hungarianedit, #edit, #editpreview
        padding: 1rem
    #main   
        max-width: 60em
        margin: auto
        border-left: var(--bs-border-width) solid var(--bs-border-color)
        border-right: var(--bs-border-width) solid var(--bs-border-color)
        border-bottom: var(--bs-border-width) solid var(--bs-border-color)
        .btn
            margin-left: 1rem
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
        {:else}
        <div id="hungarianedit">
            <h3>Fordítandó elem</h3>
            <svelte:element this={translations[translationindex].type=="Név" ? 'h2' : 'p'}>{translations[translationindex].name ? translations[translationindex].name : translations[translationindex].desc ? translations[translationindex].desc : translations[translationindex].shortdesc}</svelte:element>
        </div>
        <hr>
        <div id="edit">
            <h3>Fordítás</h3>
            <input type="text" class="form-control" bind:value={translations[translationindex].to} placeholder={translations[translationindex].name ? translations[translationindex].name : translations[translationindex].desc ? translations[translationindex].desc : translations[translationindex].shortdesc } >
        </div>
        <hr>
        <div id="editpreview">
            <h3>Előnézet</h3>
            <svelte:element this={translations[translationindex].type=="Név" ? 'h2' : 'p'}>{translations[translationindex].to}</svelte:element>
        </div>
        {/if}
    </div>
    {#if translationindex == translations.length-1}
    <button class="btn btn-primary mb-3">Fordítás feltöltése</button>
    {/if}
    {:else}
    <p>Betöltend...</p>
    {/if}
</div>
