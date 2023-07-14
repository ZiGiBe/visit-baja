<script lang="ts">
    export let block;
    export let value = block.to ? block.to : "";

</script>
<style lang="sass">

</style>
<div>
    <input type="text" class="form-control" bind:value />
</div>