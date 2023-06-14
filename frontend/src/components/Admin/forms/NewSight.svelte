<script lang="ts">
    import db from "../../../services/DB";
    import { Upload } from "../../../services/File";
    import Alert from "../Alert.svelte";
    import EditorJs from "../EditorJS.svelte";
    import Input from "../Input.svelte";
    let alert;
    let newSight = {} as any;
    let editor: EditorJs;
    let images: FileList;
    let primaryIndex = 0;

    async function SubmitEvent() {
        let errors = await GetErrors();
        if (errors.length<=0){
            newSight.fulldesc = await editor.getData();
            let uploadedSight = await db.Post('Sights', newSight);
            if (await UploadFiles(uploadedSight.id)){

            }
            else errors.push('Hiba a fájlfeltöltésben, kérem próbálja újra!');
        }
        SetUpErrorData(errors);
    }

    async function UploadFiles(id:number){
        try{
            let uploadedImages = await Upload(images)
            uploadedImages.data
            .map(e=>{
                return {
                    image: e.filename,
                    itemID: id
                }
            }).forEach(await UploadToDB);
            return true;
        }
        catch (err){
            await db.Delete('Sights', id);
            return false;
        }
    }

    async function UploadToDB(element, i):Promise<any|boolean>{
        let data = {
            ...element,
            preview: i == primaryIndex
        }
        try{
            return await db.Post('SightsGallery', data)
        }
        catch (err){
            return false;
        }
    }
    //Input validation bunched up.
    async function GetErrors() {
        let errors: string[] = [];

        if (!FilledForm()) errors.push("Nincs minden mező kitöltve!");
        else {
            if (LinkRequirementsMet()) {
                if (await HrefDuplicate())
                    errors.push("Ez a Link már foglalt!");
            }
            else errors.push("Ez a Link nem felel meg a követelményeknek!");
        }
        if (!FilesSelected()) errors.push("Nincs kép kiválasztva!");
        if (!(await EditorUsed()))
            errors.push("A szerkesztőben nincs tartalom!");

        return errors;
    }
    function SetUpErrorData(errors: string[]) {
        alert({
            show: true,
            type: errors.length > 0 ? "danger" : "success",
            message: errors.length > 0 ? "" : "Sikeres feltöltés!",
            reason: "A feltöltés nem lehetséges!",
            reasondesc: "Kérem javítsd ki a következő hibákat:",
            errors: errors,
        });
    }
    //Input validation.
    async function EditorUsed() {
        let blocks = (await editor.getData()).blocks;
        return blocks.length > 0;
    }
    function FilledForm() {
        return !Object.values(newSight).includes(0 || "");
    }
    function FilesSelected() {
        return images ? images.length > 0 : false;
    }
    function LinkRequirementsMet() {
        return (newSight.href as string).match(/^[0-z]([0-z]|-|_){1,}[0-z]$/) != null;
    }
    async function HrefDuplicate() {
        let duplicates = await db.GetFieldValue(
            "Sights",
            "href",
            newSight.href
        );
        return duplicates.length > 0;
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
    <i
        class="bi bi-question-circle"
        data-bs-target="#help"
        data-bs-toggle="collapse"
    />
</div>
<div class="collapse" id="help">
    <div class="card card-body">
        <p>A link az oldalon belüli elérhetőséget állítja be.</p>
        <p>
            Jelenleg a weboldalon ezt az elemet https://visitbaja.hu/sights/{newSight.href}
            linken érnék el a látogatók.
        </p>
        <div class="alert alert-danger d-flex align-items-center">
            <i class="bi bi-exclamation-circle flex-shrink-0 me-2" />
            <span
                >Ennek egyedinek kell lennie, különben ütközne más látnivalóval. <br
                />
                A linknek legalább 3 karaktert kell tartalmaznia!<br /> Csak
                betűket és számokat tartalmazhat, ékezetes betűket a link nem
                tartalmazhat! <br /> Elfogadott speciális karakterek: (-, _)</span
            >
        </div>
    </div>
</div>

<Input type="file" name="images" bind:files={images} title="Kép(ek)" />

{#if images && images.length > 0}
    <div class="previews">
        {#each images as image, i}
            <div>
                <img
                    class="img-fluid"
                    src={URL.createObjectURL(image)}
                    alt=""
                />
                <span
                    on:click={() => (primaryIndex = i)}
                    class:active={i == primaryIndex}
                    ><i class="bi bi-card-image" /></span
                >
            </div>
        {/each}
    </div>
{/if}

<button class="btn btn-success" on:click={SubmitEvent}>
    <i class="bi bi-plus-lg" />
</button>

<style>
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
    .previews > div > span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: background-color 0.2s, color 0.2s;
        color: transparent;
    }
    .previews > div > span:hover {
        background-color: rgba(0, 0, 0, 0.445);
        color: white;
    }
    .previews > div > span.active {
        background-color: rgba(0, 0, 0, 0.445);
        color: white;
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
