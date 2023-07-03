<script lang="ts">
    import { onMount } from "svelte";
    import db from "../../../../services/DB";
    import Alert from "../../Alert.svelte";
    import Input from "../../Input.svelte";
    import { meta } from "tinro";
    import { DateIsDate, Dates, ValidForm, ValidPage } from "../../../../services/FormValidation";
    let metadata = meta();
    let data;
    let SetAlert;
    let title;
    let wholeDay;
    let images: FileList;
    onMount(async()=>{
        data = await db.Get(metadata.params.type, Number(metadata.query.id));

        title = data.title;
        wholeDay = data.start === data.end;
    })
    function Mod(){
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
            console.log(data.start)
        }
    }
    function GetErrors(){
        let errors = [];
        if (!ValidForm(data)){
            errors.push('Nincs minden mező kitöltve!');
        }
        else{
            if (!ValidPage(data.href)) errors.push('A weboldal nem felel meg a formátumnak! (pl.: https://weboldal.hu)')
            if (!Dates) errors.push('A dátumok nem megfelelőek!');
            if (!DateIsDate) errors.push('A dátum nem dátum!');
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
    <Input title="Cím" name="address" type="text" bind:value={data.address} />
    <Input title="Egész napos?" name="wholeday" type="check" bind:checked={wholeDay} />
    <Input title="Kezdés" name="start" type="datetime-local" value={data.start.split('Z')[0]} />
    {#if !wholeDay}
    <Input title="Vége" name="end" type="datetime-local" value={data.end} />
    {/if}
    <Input title="Leírás" name="desc" type="text" bind:value={data.desc}/>
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