<script lang="ts">
    import EditorJS from "@editorjs/editorjs";
    export let id = "";
    let editor = new EditorJS(id);
    export async function getData(){
        return await editor.save().then(data=>data);
    }
</script>


<div class="mb-3">
    <h3>Látnivaló teljes leírása</h3>
    <div {id}></div>
    <hr>
</div>

