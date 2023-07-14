<script lang="ts">
    export let block;
    export const value = {
        ...block.original,
        data: {
            title: block.to && block.to.data ? block.to.data.title : "",
            message: block.to && block.to.data ? block.to.data.message : ""
        }
    }
</script>
<sass lang="sass">

</sass>
<div>
    <textarea class="form-control" placeholder={block.original.data.title} bind:value={value.data.title}/>
    <textarea class="form-control" placeholder={block.original.data.message} bind:value={value.data.message}/>
</div>