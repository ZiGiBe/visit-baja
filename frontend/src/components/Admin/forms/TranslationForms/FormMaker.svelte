<script lang="ts">
    import Table from "./Table.svelte";
    import EditorJsConverter from "../../../../services/EditorJSConverter.svelte";
    import Paragraph from "./Paragraph.svelte";
    import List from "./List.svelte";
    import Quote from "./Quote.svelte";
    import Header from "./Header.svelte";
    import Warning from "./Warning.svelte";
    import Other from "./Other.svelte";

    export let block;

    function InputDetector(type:string) {
        switch (type){
            case 'paragraph': return Paragraph;
            case 'table': return Table;
            case 'list': return List;
            case 'quote': return Quote;
            case 'header': return Header;
            case 'warning': return Warning;
        }
    }
</script>
<style lang="sass">
    #hungarianedit, #edit, #editpreview
        padding: 1rem
</style>
<div id="hungarianedit">
    <h3>Fordítandó elem</h3>
    <EditorJsConverter block={block.original} />
</div>
<hr>
<div id="edit">
    <h3>Fordítás</h3>
    <svelte:component bind:value={block.to} this={InputDetector(block.original.type)} block={block} />
</div>
<hr>
<div id="editpreview">
    <h3>Előnézet</h3>
    {#if block.to}
        <EditorJsConverter block={block.to} />
    {/if}
</div>
<hr>


