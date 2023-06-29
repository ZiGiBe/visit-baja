<script lang="ts">
    import Input from "../Input.svelte";
    import Alert from "../Alert.svelte";
    import db from "../../../services/DB";
    import { Upload } from "../../../services/File";
    import { DateIsDate, Dates, FileInputHasFile, ValidForm, ValidPage } from "../../../services/FormValidation";

    let programalert;
    let newProgram = {} as any;
    let image: FileList;
    let isWholeDay = false;

    //Uploading to the DB.
    async function SubmitEvent() {
        let errors = CheckForm();
        if (errors.length <= 0) {
            try {
                let upload = await Upload(image);
                newProgram.image = upload.data[0].filename;
                if (isWholeDay) {
                    newProgram.end = newProgram.start;
                }
                let newItem = await db.Post("Programs", newProgram);
            } catch (err) {
                console.log(err);
                errors.push("Fájlhiba!");
            }
        }
        programalert(SetUpErrorData(errors));
    }

    //Input validation bundled up.
    function CheckForm() {
        let errors: string[] = [];
        if (!DateIsDate(newProgram.start, newProgram.end, isWholeDay)) errors.push("A dátum(ok) nincs(enek) kitöltve!");
        else {
            if (Dates(newProgram.start, newProgram.end, isWholeDay)) errors.push("A dátumok nem megfelelőek!");
        }
        if (!ValidForm(newProgram)) errors.push("Nincs minden kitöltve!");
        else {
            if (!ValidPage(newProgram.href)) errors.push("A Link nem weboldal linkje!");
            if (!FileInputHasFile(image)) errors.push("Nincs kép feltölve!");
        }
        return errors;
    }

    //Alert setup.
    function SetUpErrorData(errors: string[]) {
        return {
            show: true,
            type: errors.length > 0 ? "danger" : "success",
            message: errors.length > 0 ? "" : "Sikeres feltöltés!",
            reason: errors.length > 0 ? "A feltöltés nem lehetséges!" : "",
            reasondesc: errors.length > 0 ? "Kérem javítsd ki a hibákat:" : "",
            errors: errors,
        };
    }
</script>

<Alert bind:SetAlert={programalert} />
<Input name="title" title="Név" type="text" bind:value={newProgram.title} />
<Input name="address" title="Cím" type="text" bind:value={newProgram.address} />
<Input
    name="wholeday"
    title="Egész napos?"
    type="check"
    bind:checked={isWholeDay}
/>
<Input
    name="start"
    title="Kezdés"
    type="datetime-local"
    bind:value={newProgram.start}
/>
{#if !isWholeDay}
    <Input
        name="end"
        title="Befejezés"
        disabled={!newProgram.start}
        type="datetime-local"
        bind:value={newProgram.end}
    />
{/if}
<Input name="desc" title="Leírás" type="text" bind:value={newProgram.desc} />
<Input name="href" title="Weboldal" type="text" bind:value={newProgram.href} />
<Input
    name="image"
    multiple={false}
    title="Kép"
    type="file"
    bind:files={image}
/>
<button class="btn btn-success" on:click={SubmitEvent}>
    <i class="bi bi-plus-lg" />
</button>
