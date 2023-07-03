<script lang="ts">
    import Input from "../../Input.svelte";
    import db from "../../../../services/DB";
    import { meta } from "tinro";
    import Alert from "../../Alert.svelte";
    import { onMount } from "svelte";
    import { ValidEmail, ValidForm, ValidPage, ValidPhone } from "../../../../services/FormValidation";
    import { Delete, Upload } from "../../../../services/File";
    let metadata = meta();
    let SetAlert;
    let data;
    let images: FileList;
    onMount(async()=>{
        data = await db.Get(metadata.params.type, Number(metadata.query.id));
        console.log(data);
    })
    async function Mod(){
        let errors = GetErrors();
        if (errors.length>0){
            SetAlert({
                show: true,
                type: 'danger',
                reason: 'Sikertelen feltöltés!',
                reasondesc: 'Kérem javítsd a hibákat:',
                errors: errors,
                message: ''
            });
        }
        else {
            if (images[0]){
                try{
                    await Delete(data.image);
                    let upload = await Upload(images);
                    data.image = upload.data[0].filename;
                }
                catch (err){
                    SetAlert({
                        show: true,
                        type: 'warning',
                        message: 'Szerverhiba történt! Kérem szóljon a fejlesztőknek'
                    })
                }
                
                
            }
            let patchdata = {
                ...data
            }
            patchdata.id = undefined;
            try{
                await db.Patch(metadata.params.type, Number(metadata.query.id), patchdata)
                SetAlert({
                    show: true,
                    type: 'success',
                    message: 'Sikeres frissítés!'
                })
            }
            catch (err){
                if (data.image) await Delete(data.image);
                SetAlert({
                    show: true,
                    type: 'warning',
                    message: 'Szerverhiba történt! Kérem szóljon a fejlesztőknek'
                })
            }
        }
    }


    function GetErrors(){
        let errors = [];
        if (!ValidForm(data)){
            errors.push('Nincs minden elem kitöltve!');
        }
        else{
            if (!ValidEmail(data.email)){errors.push('Az e-mail cím nem felel meg a formátumnak! (pl.: emailcim@host.hu)')}
            if (!ValidPhone(data.phone)){errors.push('A telefonszám nem felel meg a formátumnak! (pl.: +36-30-1234567)')}
            if (!ValidPage(data.href)){errors.push('A weboldal nem felel meg a formátumnak! (pl.: https://weboldal.hu)')}
        }
        return errors;
    }
</script>
{#if data}
<header class="text-center py-5 my-0">
    <h1>Módosítás - {data.name}</h1>
</header>
<hr>
<main>




<Alert bind:SetAlert />
<Input name="name" type="text" title="Név" bind:value={data.name} />
<Input name="address" type="text" title="Cím" bind:value={data.address} />
<Input name="phone" type="tel" title="Telefonszám" bind:value={data.phone} />
<Input name="email" type="text" title="E-Mail cím" bind:value={data.email} />
<Input name="href" type="text" title="Link" bind:value={data.href} />
<Input name="isRestaurant" type="check" title="Étterem?" bind:checked={data.isRestaurant} />
<Input name="image" type="file" title="Kép módosítása" bind:files={images} />

<hr>
<div id="buttons" class="mb-3">
    <a href="/admin" class="btn btn-primary"><i class="bi bi-arrow-left"></i></a>
    <button on:click={Mod} class="btn btn-success">Véglegesítés<i class="bi bi-check"></i></button>
</div>
</main>
{/if}
<style>
main{
    max-width: 60em;
    margin: 0 auto;
}

</style>