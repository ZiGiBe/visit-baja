<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import db from "../../../services/DB";
    import {Delete as fileDelete} from '../../../services/File';
    export let i = 0;
    export let item;
    export let type;

    let event = createEventDispatcher();
    let maindeletePressed = false;
    async function Delete(itemID){
        console.log(item);
        if (item.image){
            await fileDelete(item.image);
        }
        if (!item.image){
            let gallery = await db.GetFieldValue('SightsGallery', 'itemID', item.id)
            await Promise.all(gallery.map(e=>fileDelete(e.image)));
        }
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
        <a class="btn btn-warning" href={"/admin/mod/"+type+'?id='+item.id} data-bs-dismiss="modal">Módosítás <i class="bi bi-wrench"></i></a>
        {#if maindeletePressed}
            <button class="btn btn-success" on:click={()=>{Delete(item.id)}}><i class="bi bi-check"></i></button>
            <button class="btn btn-danger" on:click={DeleteToggler}><i class="bi bi-x"></i></button>
        {:else}
            <button class="btn btn-danger" on:click={DeleteToggler} >Törlés <i class="bi bi-trash"></i></button>
        {/if}
    </td>
</tr>
