<script lang="ts">
    import { onMount } from "svelte";
    import db from "../../../../services/DB";
    import Alert from "../../Alert.svelte";
    import Input from "../../Input.svelte";
    import { meta } from "tinro";
    import {  ValidForm, ValidPage } from "../../../../services/FormValidation";
    import {Delete, Upload} from "../../../../services/File";
    let metadata = meta();
    let data;
    let SetAlert;
    let title;
    let images: FileList;
    onMount(async()=>{
        data = await db.Get(metadata.params.type, Number(metadata.query.id));
        title = data.title;
       
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
        else{
            try{
                if (images[0]){
                    await Delete(data.image);
                    data.image = (await Upload(images)).data[0].filename;
                }
                await db.Patch(metadata.params.type, Number(metadata.query.id), {...data, id: undefined});
                SetAlert({
                    show: true,
                    type: 'success',
                    message: 'Sikeres feltöltés!'
                })
            }
            catch (err){
                let originalimage = (await db.Get(metadata.params.type, Number(metadata.query.id))).image;
                if (originalimage != data.image){
                    await Delete(data.image);
                }
                ProgramDied();

            }
        }
    }
    function ProgramDied(){
        SetAlert({
            show: true,
            type: 'warning',
            message: 'Szerverhiba történt! Kérem szóljon a fejlesztőknek'
        })
    }
    function GetErrors(){
        let errors = [];
        if (!ValidForm(data)){
            errors.push('Nincs minden mező kitöltve!');
        }
        else{
            if (!ValidPage(data.href)) errors.push('A weboldal nem felel meg a formátumnak! (pl.: https://weboldal.hu)')
        } 
        return errors;
    }
</script>


{#if data}
<header class="text-center py-5">
    <h1>Módosítás - {title}</h1>
</header>
<hr>
<main class="mt-3">
    <Alert bind:SetAlert />
    <Input title="Név" name="title" type="text" bind:value={data.title} />
    <Input title="Weboldal" name="href" type="text" bind:value={data.href}/>
    <Input title="Kép" name="image" type="file" bind:files={images}/>
    <div class="buttons">
        <a href="/admin" class="btn btn-primary"><i class="bi bi-arrow-return-left"></i></a>
        <button on:click={Mod} class="btn btn-success">Véglegesítés <i class="bi bi-check"></i></button>
    </div>
</main>
{/if}




<style>
    main{
        max-width: 60em;
        margin: 0 auto;
    }
</style>