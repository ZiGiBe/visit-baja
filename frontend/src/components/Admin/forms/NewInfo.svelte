<script lang="ts">
    import Input from "../Input.svelte";
    import Alert from "../Alert.svelte";
    import db from "../../../services/DB";
    import { Upload } from "../../../services/File";
    import { FileInputHasFile, ValidForm, ValidPage } from "../../../services/FormValidation";

    let infoalert;
    let newInfo = {} as any;
    let image: FileList;

    //Uploading to the DB.
    async function SubmitEvent() {
        let errors = CheckForm();
        if (errors.length <= 0) {
            try {
                let upload = await Upload(image);
                newInfo.image = upload.data[0].filename;
                let newItem = await db.Post("Infos", newInfo);
                newInfo = {};
            } catch (err) {
                console.log(err);
                errors.push("Fájlhiba!");
            }
        }
        infoalert(SetUpErrorData(errors));
    }

    //Input validation bundled up.
    function CheckForm() {
        let errors: string[] = [];
        if (!ValidForm(newInfo)) errors.push("Nincs minden kitöltve!");
        else {
            if (!ValidPage(newInfo.href)) errors.push("A Link nem weboldal linkje!");
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

<Alert bind:SetAlert={infoalert} />
<Input name="title" title="Név" type="text" bind:value={newInfo.title} />

<Input name="href" title="Link" type="text" bind:value={newInfo.href} />
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
