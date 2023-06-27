<script lang="ts">
    import type { Block } from "../../interfaces/Editor";

    export let block: Block;
</script>


<svelte:element this={`${block.data.style[0]}l`}>
    {#each block.data.items as item}
        <li>{@html item}</li>
    {/each}
</svelte:element>