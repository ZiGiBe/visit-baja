<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import db from "../../../services/DB";
    import Input from "../Input.svelte";
    import Sight from "./Mod/Sight.svelte";
    export let i = 0;
    export let item;
    export let type;

    let event = createEventDispatcher();
    let maindeletePressed = false;
    let collapse;

    function ToggleMod(item){
       console.log(item);

    }
    async function Delete(itemID){
        await db.Delete(type, itemID);
        event('deletion', {promise: db.Get(type)});
        DeleteToggler();
    }
    function DeleteToggler(){
        maindeletePressed = !maindeletePressed;
    }
</script>

<tr>
    <td>{i+1}.</td>
    <td>{item.name ? item.name : item.title}</td>
    <td>
        <button class="btn btn-warning" data-bs-toggle="collapse" data-bs-target={"#mod"+item.id}>Módosítás <i class="bi bi-wrench"></i></button>
        {#if maindeletePressed}
            <button class="btn btn-success" on:click={()=>{Delete(item.id)}}><i class="bi bi-check"></i></button>
            <button class="btn btn-danger" on:click={DeleteToggler}><i class="bi bi-x"></i></button>
        {:else}
            <button class="btn btn-danger" on:click={DeleteToggler} >Törlés <i class="bi bi-trash"></i></button>
        {/if}
    </td>
</tr>
<div class="collapse" id={"mod"+item.id} bind:this={collapse}>
    <div class="card card-body">
        {#if type=="Sights"}
            <Sight modData={item} />
        {/if}
    </div>
</div>
