<script lang="ts">
    import EditorJS from "@editorjs/editorjs";
    import { EditorJSHun, EditorJSTools, EditorJSTunes } from "./stores";
    export let id = "";
    export let type ="";
    let editor = new EditorJS({
        holder: id,
        tools: $EditorJSTools,
        tunes: $EditorJSTunes,
        i18n: $EditorJSHun.i18n
    });
    export async function getData(){
        return await editor.save().then(data=>data);
    }
    export async function loadData(data){
        try{
            if (Object.values(data).length>0){
                editor.blocks.render(data);
            }
        }
        catch (err){
            console.log('bad')
        }
    }
</script>


<div class="mb-3">
    {#if type!="Tourinform"}
    <h3>{type} teljes leírása</h3>
    {/if}
    <div {id}></div>
    <hr>
</div>

