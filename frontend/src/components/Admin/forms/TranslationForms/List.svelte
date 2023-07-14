<script lang="ts">
    export let block;
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
            return block.original.data.items.map(()=>"");
        }
     }
</script>
<style lang="sass">
    ul, ol
        max-height: 300px
        overflow-y: auto
        li
            margin-bottom: 0.25rem
        li:last-of-type
            margin-bottom: 0
</style>
<div>
    {#if value}
    <svelte:element this={block.original.data.style[0]+'l'}>
        {#each value.data.items as item, i}
        <li><textarea class="form-control" placeholder={block.original.data.items[i]} bind:value={value.data.items[i]} /></li>
        {/each}
    </svelte:element>
    {/if}
</div>
