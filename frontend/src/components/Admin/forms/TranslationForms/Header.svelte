<script lang="ts">
    export let block;
    export const value = {
        ...block.original,
        data: {
            text: block.to.data ? block.to.data.text : "",
            level: block.original.data.level
        }
    }
</script>
<style lang="sass">

</style>
<div>
    <h2><textarea name="header" class="form-control" bind:value={value.data.text} /></h2>
</div>