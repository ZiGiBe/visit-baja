<script lang="ts">
    import EditorJS from "@editorjs/editorjs";
    import Header from "@editorjs/header";
    import List from "@editorjs/list"
    import Delimiter from '@editorjs/delimiter';
    import Quote from '@editorjs/quote';
    import Table from '@editorjs/table';
    import Paragraph from '@editorjs/paragraph';
    import Link from '@editorjs/link'
    export let id = "";
    let editor = new EditorJS({
        holder: id,
        tools: {
            header: Header,
            list: List,
            delimiter: Delimiter,
            quote: Quote,
            table: Table,
            paragraph: Paragraph,
            link: Link
        }
    });
    export async function getData(){
        return await editor.save().then(data=>data);
    }
</script>


<div class="mb-3">
    <h3>Látnivaló teljes leírása</h3>
    <div {id}></div>
    <hr>
</div>

