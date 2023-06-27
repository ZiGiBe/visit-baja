<script lang="ts">
    import type { Block } from "../../interfaces/Editor";

    export let block: Block;

</script>



<div role="alert" class={"alert alert-warning " + block.tunes.textVariant} id={block.id}>
    <h4>{@html block.data.title}</h4>
    <hr>
    <p class="mb-0">{@html block.data.message}</p>
</div>