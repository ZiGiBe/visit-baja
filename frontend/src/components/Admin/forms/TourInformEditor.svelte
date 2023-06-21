<script lang="ts">
    import { GetLatestVersion, SaveLatest } from "../../../services/EditorJSResetter";
    import Alert from "../Alert.svelte";
    import EditorJs from "../EditorJS.svelte";
    let editor: EditorJs;
    let alerter;
    async function Save(){
        SaveLatest(await editor.getData()).then(()=>{
            alerter({
                show: true,
                type: 'success',
                message: 'Sikeres mentés!'
            })
        }).catch(()=>{
            alerter({
                show: true,
                type: 'danger',
                message: 'Sikertelen mentés!'
            })
        });
    }
    export async function Sync(){
        editor.loadData(await GetLatestVersion())
    }
</script>
<Alert bind:SetAlert={alerter} />
<EditorJs id="tourinformEditor" type="Tourinform" bind:this={editor} />
<div class="buttons mb-3 mx-1">
    <button class="btn btn-primary" on:click={Sync}>Szinkronizálás <i class="bi bi-arrow-repeat"></i></button>
    <button class="btn btn-success"on:click={Save}>Mentés <i class="bi bi-save"></i></button>
</div>
