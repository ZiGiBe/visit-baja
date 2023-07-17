<script lang="ts">
    export let block;
    export const value = {
        id: block.original.id,
        type: block.original.type,
        tunes: block.original.tunes,
        data: getItems()
    };
    function getItems(){
        if (block.to && block.to.data){
            return {
                withHeadings: block.original.data.withHeadings,
                content: block.to.data.content
            }
        }
        else{
            return {
                withHeadings: block.original.data.withHeadings,
                content: [...block.original.data.content.map(e=>{
                    return [...e.map(()=>"")]
                })]
            }
        }
    }
</script>



<table class="table">
    <tbody>
        {#each value.data.content as cells, i}
            <tr>
                {#each cells as cell, g}
                <td>
                    <input type="text" class="form-control" placeholder={cell} bind:value={value.data.content[i][g]} >
                </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>