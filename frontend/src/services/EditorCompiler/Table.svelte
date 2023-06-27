<script lang="ts">
    import type { Block } from "../../interfaces/Editor";

    export let block: Block;
</script>
<div id={block.id} class={'table-responsive ' + block.tunes.textVariant}>
    <table class="table">
        {#if block.data.withHeadings}
        <thead>
            <tr>
                {#if block.data.content[0]}
                    {#each block.data.content[0] as cell}
                        <th>{@html cell}</th>
                    {/each}
                {/if}
            </tr>
        </thead>
        {/if}
        <tbody>
            {#each block.data.withHeadings ? block.data.content.splice(0, 1) : block.data.content as rows}
            <tr>
                {#each rows as cell}
                    <td>{@html cell}</td>
                {/each}
            </tr>
            {/each}
        </tbody>
    </table>
</div>