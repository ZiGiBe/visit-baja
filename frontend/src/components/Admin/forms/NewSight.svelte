<script lang="ts">
    import Alert from "../Alert.svelte";
    import EditorJs from "../EditorJS.svelte";
    import Input from "../Input.svelte";
    let alert;
    let newSight = {} as any;
    let editor: EditorJs;
    let images: FileList;
    let primaryIndex = 0;
    async function SubmitEvent() {

    }
</script>

<Alert bind:SetAlert={alert} />
<Input type="text" name="name" title="Név" bind:value={newSight.name} />
<Input
    type="text"
    name="shortdesc"
    title="Rövid leírás"
    bind:value={newSight.shortdesc}
/>
<EditorJs id={"newSightContent"} type="Látnivaló" bind:this={editor} />
<div class="d-flex flex-row justify-content-between">
    <Input type="text" name="href" title="Link" bind:value={newSight.href} />
    <i class="bi bi-question-circle" data-bs-target="#help" data-bs-toggle="collapse"></i>
</div>
<div class="collapse" id="help">
    <div class="card card-body">
        <p>A link az oldalon belüli elérhetőséget állítja be.</p>
        <p>Jelenleg a weboldalon ezt az elemet https://visitbaja.hu/sights/{newSight.href} linken érnék el a látogatók.</p>
        <span class="text-danger">Ennek egyedinek kell lennie, különben ütközne más látnivalóval. Csak betűket és számokat tartalmazhat, ékezetes betűket a link nem tartalmazhat!</span> 
    </div>
  </div>



<Input type="file" name="images" bind:files={images} title="Kép(ek)" />

{#if images && images.length>0}
<div class="previews">
    {#each images as image, i}
    <div>
        <img class="img-fluid" src={URL.createObjectURL(image)} alt="">
        <span on:click={()=>primaryIndex = i} class:active={i==primaryIndex}><i class="bi bi-card-image"></i></span>
    </div>
    {/each}
</div>
{/if}

<button class="btn btn-success" on:click={SubmitEvent}>
    <i class="bi bi-plus-lg" />
</button>

<style>
    .previews{
        overflow: auto;
        height: calc(150px + 2rem);
        display:flex;
        flex-flow: row wrap;
    }
    .previews>div{
        display: inline-block;
        position: relative;
    }
    .previews>div>span{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: background-color 0.2s, color 0.2s;
        color: transparent;
    }
    .previews>div>span:hover{
        background-color: rgba(0, 0, 0, 0.445);
        color: white;
    }
    .previews>div>span.active{
        background-color: rgba(0, 0, 0, 0.445);
        color: white;
    }
    .previews>div{
        height: 150px;
        object-fit: fill;
        margin: 1rem;
        border-radius: 1rem;
    }
    .previews>div>img{
        height: 100%;
        width: 100%;
    }
</style>