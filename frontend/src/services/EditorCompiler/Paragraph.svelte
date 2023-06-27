<script lang="ts">
    import type { Block } from "../../interfaces/Editor";
    export let block: Block;
</script>

<p id={block.id} class={block.tunes.textVariant}>{block.data.text}</p>