<script lang="ts">
    import Delimiter from "./EditorCompiler/Delimiter.svelte";
    import File from "./EditorCompiler/File.svelte";
    import Header from "./EditorCompiler/Header.svelte";
    import List from "./EditorCompiler/List.svelte";
    import Paragraph from "./EditorCompiler/Paragraph.svelte";
    import Quote from "./EditorCompiler/Quote.svelte";
    import Table from "./EditorCompiler/Table.svelte";
    import Warning from "./EditorCompiler/Warning.svelte";
    export let block;
    function Determiner(type:string){
        switch (type){
            case 'paragraph':
                return Paragraph;
            case 'header':
                return Header;
            case 'attaches':
                return File;
            case 'table':
                return Table;
            case 'delimiter':
                return Delimiter;
            case 'list':
                return List;
            case 'quote':
                return Quote;
            case 'warning':
                return Warning;
        }
    }
</script>
<svelte:component this={Determiner(block.type)} {block} />