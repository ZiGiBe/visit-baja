<script lang="ts">
    import Input from "../Input.svelte";
    import Alert from "../Alert.svelte";


    let programalert;
    let newProgram = {} as any;
    let image: FileList;
    let isWholeDay = false;
    async function SubmitEvent(){
        let errors = [];

        if (!DatesAreDates()) errors.push('A dátum(ok) nincs(enek) kitöltve!');
        else {
            if (!DatesAreCorrect()) errors.push('A dátumok nem megfelelőek!');
        }
        if (!EverythingFilled()) errors.push('Nincs minden kitöltve!');

        programalert(SetUpErrorData(errors));
    }
    function SetUpErrorData(errors: string[]){
        return {
            show: true,
            type: errors.length>0 ? 'danger':'success',
            message: errors.length>0 ? '' : 'Sikeres feltöltés!',
            reason: errors.length>0 ? 'A feltöltés nem lehetséges!':'',
            reasondesc: errors.length>0 ? 'Okok:':'',
            errors: errors
        }
    }
    function EverythingFilled(){
        return !Object.values(newProgram).includes(0 || "");
    }
    function DatesAreDates(){
        return (newProgram.start != 0 && isWholeDay ? true : newProgram.end != 0)
    }
    function DatesAreCorrect() {
        return !isWholeDay ? new Date(newProgram.start) < new Date(newProgram.end) && new Date(newProgram.start) > new Date() : new Date(newProgram.start) > new Date();
    }

</script>

<Alert bind:SetAlert={programalert} />
<Input name="title" title="Név" type="text" bind:value={newProgram.title} />
<Input name="address" title="Cím" type="text" bind:value={newProgram.address} />
<Input name="wholeday" title="Egész napos?" type="check" bind:checked={isWholeDay} />
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
<Input name="desc" title="Leírás" type="text" bind:value={newProgram.desc}/>
<Input name="href" title="Weboldal" type="text" bind:value={newProgram.href} />
<Input name="image" multiple={false} title="Kép" type="file" bind:files={image} />
<button class="btn btn-success" on:click={SubmitEvent}>
    <i class="bi bi-plus-lg" />
</button>

