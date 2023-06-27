<script lang="ts">
    import File from "./EditorCompiler/File.svelte";
    import Header from "./EditorCompiler/Header.svelte";
    import Paragraph from "./EditorCompiler/Paragraph.svelte";
    export let block;
    function Determiner(type:string){
        switch (type){
            case 'paragraph':
                return Paragraph;
            case 'header':
                return Header;
            case 'attaches':
                return File;
        }
    }
</script>
<svelte:component this={Determiner(block.type)} {block} />