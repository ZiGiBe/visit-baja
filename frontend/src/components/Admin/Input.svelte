<script lang="ts">
    export let name = "";
    export let type;
    export let title = "";
    export let value = type == "text" ? "" : 0;
    export let checked = false;
    export let disabled = false;
    export let files: FileList = {} as FileList;
    function typeaction(node){
        node.type = type;
    }
</script>


<div class:form-floating={type!="file"&&type!="check"} class="mb-3">
    {#if type=='file'}
    <label for="floatingInput">{title}</label>
    <input type="file" class="form-control" {name} bind:files>
    {:else if type=='check'}
    <input type="checkbox" bind:checked {name} class="form-check-input">
    <label for="floatingInput" class="form-check-label">{title}</label>
    {:else}
    <input use:typeaction {name} {disabled} bind:value class="form-control" placeholder={title}>
    <label for="floatingInput">{title}</label>
    {/if}
</div>