<script lang="ts">
    import type { Block } from "../../interfaces/Editor";
    export let block: Block
</script>
<svelte:element this={"h"+block.data.level} class={block.tunes.textVariant} id={block.id}>{@html block.data.text}</svelte:element>