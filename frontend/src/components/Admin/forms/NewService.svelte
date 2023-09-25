<script lang="ts">
    import db from "../../../services/DB";
    import { Upload } from "../../../services/File";
    import { FileInputHasFile, ValidEmail, ValidForm, ValidPage, ValidPhone } from "../../../services/FormValidation";
    import Alert from "../Alert.svelte";
    import Input from "../Input.svelte";

    let alert;
    let newService = {} as any;
    let images: FileList;

    async function SubmitEvent() {
        let errors = GetErrors();
        if (errors.length<=0){
            try{
                let image = (await Upload(images)).data[0];
                newService.image = image.filename;
                try{
                    await db.Post('Services', newService);
                    newService = {};
                }
                catch (err){
                    errors.push('Hiba történt a feltöltésben, kérem szóljon a fejlesztőknek!')
                    console.log(err);
                }
            }
            catch (err){
                errors.push(err);
            }
        }
        AlertSetUp(errors);
    }

    function AlertSetUp(errors: string[]){
        alert({
            show: true,
            type: errors.length>0 ? 'danger':'success',
            message: errors.length>0 ? '' : 'Sikeres feltöltés!',
            reason: 'A feltöltés nem sikerült!',
            reasondesc: 'Kérem javítsd a következő hibákat:',
            errors: errors
        });
    }

    //Validation Bunching
    function GetErrors() {
        let errors: string[] = [];
        if (!ValidForm(newService)) {
            errors.push('Az űrlapot nem töltötted ki!');
        }
        else {
            if (!ValidPage(newService.href)){
                errors.push('A weboldal linkje nem jó! (pl.: http://weboldal.hu)');
            }
            if (!ValidEmail(newService.email)){
                errors.push('Az email-cím nem email-cím!');
            }
            if (!ValidPhone(newService.phone)){
                errors.push('A telefonszám nem telefonszám (elfogadott formátum: +36-70-1234567)')
            }
        }
        if (!FileInputHasFile(images)) {
            errors.push('Nincs kiválasztva kép!');
        }
        return errors;
    }

</script>

<Alert bind:SetAlert={alert} />
<Input name="name" title="Név" type="text" bind:value={newService.name} />
<Input name="address" title="Cím" type="text" bind:value={newService.address} />
<Input
    name="phone"
    title="Telefonszám"
    type="tel"
    bind:value={newService.phone}
/>
<Input
    name="email"
    title="E-Mail cím"
    type="email"
    bind:value={newService.email}
/>
<Input
    name="image"
    title="Kép"
    multiple={false}
    type="file"
    bind:files={images}
/>
<Input name="href" title="Weboldal" type="text" bind:value={newService.href} />
<Input
    name="isRestaurant"
    title="Étterem?"
    type="check"
    bind:checked={newService.isRestaurant}
/>
<button class="btn btn-success" on:click={SubmitEvent}>
    <i class="bi bi-plus-lg" />
</button>
