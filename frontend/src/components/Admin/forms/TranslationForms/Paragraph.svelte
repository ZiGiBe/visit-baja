<script lang="ts">
    export let block
    export const value = {
        ...block.original,
        data: {
            text: block.to.data ? block.to.data.text : ""
        }
    }
</script>
<div>
    <textarea class="form-control" name="blocktext" bind:value={value.data.text} placeholder={block.original.data.text} />
</div>