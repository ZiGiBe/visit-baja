<script lang="ts">
import type { Block } from "../../interfaces/Editor";
    export let block: Block;
</script>
<style>
    p{
        line-height: 1.6;
    }
</style>
<p id={block.id} class={block.tunes.textVariant}>{@html block.data.text}</p>
