<script lang="ts">
    import EditorJS from "@editorjs/editorjs";
    import { EditorJSHun, EditorJSTools, EditorJSTunes, jwt } from "./stores";
    import AttachesTool from '@editorjs/attaches';
    export let id = "";
    export let type ="";
    let editor = new EditorJS({
        holder: id,
        tools: {
            ...$EditorJSTools,
            attaches: {
                class: AttachesTool,
                config: {
                endpoint: 'http://185.75.194.239:8080/file/tourinform/new',
                types: "application/pdf",
                additionalRequestHeaders:{
                    "Authorization":"JWT " + $jwt
                }
        }
    },
        },
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

