<script lang="ts">
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    export let name = "";
    export let type;
    export let title = "";
    export let multiple = true;
    export let value = type == "text" || type=="email" || type=="tel" ? "" : type == "datetime-local" ? new Date() : 0;
    export let checked = false;
    export let disabled = false;
    export let files: FileList = {} as FileList;
    function typeaction(node){
        node.type = type;
    }
    export let changevent = ()=>{};
    let input = ()=>{dispatch('clicked')};
</script>


<div class:form-floating={type!="file"&&type!="check"} class="mb-3">
    {#if type=='file'}
    <label for="floatingInput">{title}</label>
    <input on:change={input} type="file" class="form-control" {multiple} accept="image/*" {name} bind:files>
    {:else if type=='check'}
    <input type="checkbox" bind:checked {name} class="form-check-input">
    <label for="floatingInput" class="form-check-label">{title}</label>
    {:else}
    <input use:typeaction {name} {disabled} bind:value class="form-control" placeholder={title}>
    <label for="floatingInput">{title}</label>
    {/if}
</div>