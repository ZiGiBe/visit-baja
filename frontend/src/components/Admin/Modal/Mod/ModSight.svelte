<script lang="ts">
    import EditorJs from "../../EditorJS.svelte";
    import Input from "../../Input.svelte";
    import db, { BackendUrl } from "../../../../services/DB";
    import Alert from "../../Alert.svelte";
    import { meta } from "tinro";
    import { onMount } from "svelte";
    import { EditorHasBlocks, LinkUnique, ValidForm } from "../../../../services/FormValidation";
    import { Delete, Upload } from "../../../../services/File";

    let modData;
    let loadData;
    let SetAlert;
    let editor;
    let newImages;
    let existingImages = [];

    let existingpreviewID = -1;
    let newIndex = -1;

    let deletionIDs = [];
    let m = meta();
    
    onMount(async ()=>{
        modData = await db.Get('Sights', Number(m.query.id));
        existingImages = await db.GetFieldValue('SightsGallery', 'itemID', m.query.id);
        newIndex = -1;
        existingpreviewID = existingImages.find(e=>e.preview==true).id;
        deletionIDs = existingImages.map(e=>0);
        await loadData(JSON.parse(modData.fulldesc));
    })

    async function LinkIsUnique(){
        let data = await db.Get('Sights', Number(m.query.id));
        if (data.href == modData.href) {
            return true;
        }
        else {
            return await LinkUnique(modData.href, 'Sights')
        }
    }
    async function Mod(){
        let errors = await Errors();
        if (errors.length>0){
            SetAlert({
                show: true,
                type: 'danger',
                reason: "Sikertelen módosítás!",
                reasondesc: 'Javítsd ki a hibákat:',
                errors: errors
            });
        }
        else {
            await UploadImages();
            await DeleteImagesOnQueue();
            await Patch();
        }
    }

    function PutOnDeleteQueue(image, i){
        console.log(deletionIDs);
        if (deletionIDs[i]==1){
            deletionIDs[i] = 0;
        }
        else{
            deletionIDs[i] = 1;
            if (existingpreviewID == image.id){
                let index = deletionIDs.findIndex(e=>e==0)
                existingpreviewID = index == -1 ? -1 : existingImages[index].id;
            }
        }
    }

    async function Errors(){
        let errors = [];
        if (!ValidForm(modData)) errors.push('Nincs minden mező kitöltve!');
        else {
            if (!EditorHasBlocks(editor)) errors.push('A szerkesztő üres!');
            if (await LinkIsUnique() === false){
                errors.push('A link nem az eredeti, vagy foglalt!');
            }
        }
        return errors;
    }
    async function DeleteImagesOnQueue(){
        deletionIDs.forEach(async (element, i) => {
            if (element == 1){
                await Delete(existingImages[i].image);
                await db.Delete('SightsGallery', existingImages[i].id);
            }
        });
        if (existingpreviewID!=-1){
            await db.Patch('SightsGallery', existingImages.find(e=>e.id==existingpreviewID).id , {
                preview: true
            })
        }
    }
    async function UploadImages(){
        if (newImages.length>0){
            await Promise.all(existingImages.filter(e=>e.preview==true).map(e=>db.Patch('SightsGallery', e.id, {preview: false})))
            let uploadsToDB = Promise.all((await Upload(newImages)).data.map((e, i)=>db.Post('SightsGallery', {
                image: e.filename,
                itemID: m.query.id,
                preview: i == newIndex
            })));
            await uploadsToDB;
        }
        
    }
    async function Patch(){
        try{
            await db.Patch('Sights', Number(m.query.id), {
                ...modData,
                fulldesc: await editor.getData()
            })
            SetAlert({
                show: true,
                message: 'Sikeres módosítás!',
                type: "success"
            })
        }
        catch(err){
            SetAlert({
                show: true,
                message: 'Szerverhiba történt, kérem szóljon a fejlesztőknek!',
                type: 'warning',
            })
        }
    }
</script>
<main>
{#if modData}
<header class="text-center py-5 my-0">
    <h1>Módosítás - {modData.name}</h1>
</header>
<hr>
<Alert bind:SetAlert />
<Input name="id" type="number" title="Azonosító" disabled={true} bind:value={modData.id} />
<Input name="name" type="text" title="Név" bind:value={modData.name} />
<Input name="shortdesc" type="text" title="Rövid leírás" bind:value={modData.shortdesc} />
<Input name="href" type="text" title="Link" bind:value={modData.href} />

<EditorJs id={"modsight"} type={"Látnivaló"} bind:this={editor} bind:loadData/>
{@const load = setTimeout(() => {
    loadData(JSON.parse(modData.fulldesc))
}, 2000)}
<Input name="images" type="file" title="Képek feltöltése" bind:files={newImages} />
{#if newImages && newImages.length>0}
    <div class="previews">
        {#each newImages as image, i}
        <div>
            <img src={URL.createObjectURL(image)} alt="" class="img-fluid">
            <div
                on:keypress={()=>{}}
                on:click={() => {newIndex = i; existingpreviewID = -1;}}
                class:active={newIndex == i}>
                <i class="bi bi-card-image" />
            </div>
        </div>  
        {/each}
    </div>
{/if}
{#if existingImages && existingImages.length > 0}
    <div class="previews">
        {#each existingImages as image, i}
            <div>
                <img
                    class="img-fluid"
                    src={BackendUrl+'media/'+image.image}
                    alt=""
                />
                <div class:active={existingpreviewID == image.id} class:deletequeue={deletionIDs[i]==1}>
                    <i title="Indexképpé választás" class="bi bi-card-image" on:keypress={()=>{}} on:click={() => {existingpreviewID = image.id; newIndex = -1;}}/>
                    <i title={deletionIDs[i]==1 ? "Törlésről levétel" : "Törlésre választás"} class="bi bi-x-lg" on:keypress={()=>{}} on:click={()=>PutOnDeleteQueue(image, i)}/>
                </div>
            </div>
        {/each}
    </div>
{/if}
<hr>
<div id="buttons" class="mb-3">
    <a href="/admin" class="btn btn-primary"><i class="bi bi-arrow-left"></i></a>
    <button on:click={Mod} class="btn btn-success">Véglegesítés<i class="bi bi-check"></i></button>
</div>

{/if}
</main>
<style>
main{
    max-width: 60em;
    margin: 0 auto;
}
.previews {
        overflow: auto;
        height: calc(150px + 2rem);
        display: flex;
        flex-flow: row wrap;
    }
    .previews > div {
        display: inline-block;
        position: relative;
    }
    .previews > div > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: background-color 0.2s, color 0.2s;
        color: transparent;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        font-size: 2rem;
    }
    .previews>div>div>i{
        cursor:pointer;
    }
    .previews > div > div:hover {
        background-color: rgba(0, 0, 0, 0.445);
        color: white;
    }
    .previews > div > div.active {
        background-color: rgba(0, 0, 0, 0.445);
        color: white;
    }
    .previews > div > div.deletequeue{
        background-color: rgba(255, 0, 0, 0.363);
        color: white;
    }
    .previews>div>div.deletequeue>.bi-card-image{
        display: none;
    }
    .previews > div {
        height: 150px;
        object-fit: fill;
        margin: 1rem;
        border-radius: 1rem;
    }
    .previews > div > img {
        height: 100%;
        width: 100%;
    }
</style>