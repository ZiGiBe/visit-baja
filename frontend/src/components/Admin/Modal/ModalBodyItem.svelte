<script lang="ts">
    export let i = 0;
    export let item;
    let maindeletePressed = false;
    function ModItem(id:number){
        console.log(id);
    }
    function DeleteToggler(){
        maindeletePressed = !maindeletePressed;
    }
</script>

<tr>
    <td>{i+1}.</td>
    <td>{item.name ? item.name : item.title}</td>
    <td>
        <button class="btn btn-warning" on:click={()=>ModItem(item.id)} >Módosítás <i class="bi bi-wrench"></i></button>
        {#if maindeletePressed}
            <button class="btn btn-success"><i class="bi bi-check"></i></button>
            <button class="btn btn-danger" on:click={DeleteToggler}><i class="bi bi-x"></i></button>
        {:else}
            <button class="btn btn-danger" on:click={DeleteToggler} >Törlés <i class="bi bi-trash"></i></button>
        {/if}
    </td>
</tr>