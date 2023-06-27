<script lang="ts">
    import axios from "axios";
    import type { Block } from "../../interfaces/Editor";
    export let block: Block;

    async function Download(){
        let hidden = document.createElement('a');
        hidden.href = URL.createObjectURL(new Blob([await axios.get('http://localhost:8080/media/'+block.data.file.filename, {
            responseType: "blob"
        })]));
        hidden.setAttribute('download', block.data.file.filename);
        hidden.click();
        hidden = undefined;
    }
</script>
<div class="file">
    <a target="_blank" href={'http://localhost:8080/media/'+block.data.file.filename}>
        <i class={"bi bi-filetype-"+block.data.file.mimetype.split('/')[1]}></i><span>{block.data.title}</span>
    </a>
    <button class="btn" on:click={Download}><i class="bi bi-arrow-down"/></button>
</div>
<style>
</style>