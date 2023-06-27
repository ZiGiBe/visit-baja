<script lang="ts">
    import type { Block } from "../../interfaces/Editor";

    export let block: Block;
</script>

<div id={block.id} class={block.tunes.textVariant + ' border rounded-1 px-3 py-2'}>
    <blockquote class="my-2">
        {@html block.data.text}
    </blockquote>
    <address class="my-0">{@html block.data.caption}</address>
</div>

<style>
    div{
        position: relative;
    }
    div::before,
    address::before{
        font-weight: bold;
        font-size: 1.25rem;
    }

    div::before
    {
        content: "„";
        color: var(--bs-border-color);
        position: absolute;
        top: 0%;
        left: calc(100% - 1.25rem);
    }
    address::before{
        content: '-';
    }
</style>
