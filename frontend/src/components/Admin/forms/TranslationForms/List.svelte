<script lang="ts">
    export let block;
    let currentId = 0;
    export const value = {
        ...block.original,
        data:{
            style: block.original.data.style,
            items: GetData()
        }
    };
    function GetData(){
        if (block.to.data && block.to.data.items){
            return block.to.data.items
        }
        else{
            return block.original.data.items.map(e=>"");
        }
     }
</script>
<style lang="sass">
</style>
<div>
    {#if value}
    <svelte:element this={block.original.data.style[0]+'l'}>
        {#each value.data.items as item, i}
        <li><input class="form-control" type="text" placeholder={block.original.data.items[i]} bind:value={value.data.items[i]}></li>
        {/each}
    </svelte:element>
    {/if}
</div>
