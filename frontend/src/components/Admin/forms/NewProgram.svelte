<script lang="ts">
    import Input from "../Input.svelte";
    import Alert from "../Alert.svelte";


    let programalert;
    let newProgram = {} as any;
    async function SubmitEvent(){

    }
</script>

<Alert bind:SetAlert={programalert} />
<Input name="title" title="Név" type="text" bind:value={newProgram.title} />
<Input name="address" title="Cím" type="text" bind:value={newProgram.address} />
<Input
    name="start"
    title="Kezdés"
    type="datetime-local"
    bind:value={newProgram.start}
/>
<Input
    name="end"
    title="Befejezés"
    disabled={!newProgram.start}
    type="datetime-local"
    bind:value={newProgram.end}
/>
<Input name="desc" title="Leírás" type="text" bind:value={newProgram.desc}/>
<Input name="href" title="Weboldal" type="text" bind:value={newProgram.href} />
<Input name="image" multiple={false} title="Kép" type="file" bind:value={newProgram.image} />
<button class="btn btn-success" on:click={SubmitEvent}>
    <i class="bi bi-plus-lg" />
</button>

