<style lang="sass">
#images
    display: flex
    flex-flow: row
    overflow-x: auto
    border-bottom: 1px solid black
    border-top: 1px solid black
    .imageedit
        margin: 1rem
        position: relative
        height: 150px
        img
            height: 100%
        button
            opacity: 0
            font-size: 2rem
            position: absolute
            top: 0
            border: 0
            left: 0
            height: 100%
            width: 100%
            display: flex
            justify-content: center
            align-items: center
            transition: opacity 0.15s, background 0.15s, backdrop-filter 0.15s, color 0.15s
            backdrop-filter: blur(8px) grayscale(80%)
        button:hover
            opacity: 1
            background: rgba(255,255,255, 0.5)
        .ondeletion
            background: rgba(255,0,0, 0.5)
            opacity: 1
            color: white
        .ondeletion:hover
            background: rgba(252, 0, 0, 0.5)
.btns
    padding: 1rem
</style>
<script lang="ts">
    import { onMount } from "svelte";
    import db, { BackendUrl } from "../../../services/DB";
    import Input from "../Input.svelte";
    import { Delete, Upload } from "../../../services/File";

    let newimages:FileList;
    let images = [];
    let deleteIds = [];

    onMount(async()=>{
        images = await db.Get('IndexSlideshow');
    })

    function PutOnDeletion(id){
        let index = deleteIds.findIndex(e=>e==id)
        if (index>-1){
            deleteIds.splice(index, 1);
            deleteIds = deleteIds;
        }
        else{
            deleteIds.push(id);
            deleteIds = deleteIds;
        }
    }


    async function upload(){
        deleteIds = [];
        deleteIds = deleteIds;

        await Promise.all((await Upload(newimages)).data.map(e=>db.Post('IndexSlideshow', {
            filename: e.filename
        })));
        images = await db.Get('IndexSlideshow');
    }
    async function deleteimgs(){
        let deletion = images.filter(e=>deleteIds.includes(e.id));

        deleteIds = [];
        deleteIds = deleteIds;

        await Promise.all([
            ...deletion.map(e=>Delete(e.filename)),
            ...deletion.map(e=>db.Delete('IndexSlideshow', e.id))
        ]);
        images = await db.Get('IndexSlideshow');
    }


</script>



<div id="images">
    {#each images as image}
        <div class="imageedit">
            <img src={BackendUrl+'media/'+image.filename} alt="">
            <button class:ondeletion={deleteIds.find(e=>e==image.id)!=undefined} on:click={()=>PutOnDeletion(image.id)}><i class="bi bi-x-lg"></i></button>
        </div>
    {/each}
</div>
<div class="btns">
    <Input title="Képek kiválasztása" type="file" name="images" bind:files={newimages} />
    {#if newimages}
    <button class="btn btn-primary" disabled={newimages.length<1} on:click={upload}>Képek feltöltése</button>
    {/if}
    <button class="btn btn-danger" disabled={deleteIds.length<1} on:click={deleteimgs}>Képek törlése</button>
</div>