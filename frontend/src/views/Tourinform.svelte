<script>
    import { CheckSite } from "../services/ActualSite";
    import EditorJsConverter from "../services/EditorJSConverter.svelte";
    import { GetLatestVersion } from "../services/EditorJSResetter";
    CheckSite();

    let editordata = GetLatestVersion();
</script>
<main>
    {#await editordata}
        <div class="spinner-border"></div>
    {:then data} 
        {#each data.blocks as block}
            <EditorJsConverter {block} />
        {/each}
    {/await}
</main>
<style>
    main{
        max-width: 60em;
        margin: 3rem auto;
        padding: 1rem;
        line-height: 1.6;
    }
</style>