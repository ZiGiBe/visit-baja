<script lang="ts">
    export let block;
    export const value = {
        ...block.original,
        data: GetData()
    }
    console.log(value)
    console.log(block)
    function GetData(){
        if (!block.to.data){
            let data = {
                text: "",
                caption: "",
                alignment: block.original.data.alignment
            }
            return data;
        }
        else return {
            text: block.to.data.text,
            caption: block.to.data.caption,
            alignment: block.original.data.aligment
        }
    }
</script>
<style lang="sass">

</style>

<div>
    <textarea name="text" class="form-control" placeholder={block.original.data.text} bind:value={value.data.text} />
    <input type="text" name="caption" class="form-control" placeholder={block.original.data.caption} bind:value={value.data.caption} >
</div>