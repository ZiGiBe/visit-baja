<script>
    import EditorJs from "../../EditorJS.svelte";
    import Input from "../../Input.svelte";
    import db from "../../../../services/DB";
    import Alert from "../../Alert.svelte";
    import { meta } from "tinro";
    let modData = db.Get(meta().params.type, Number(meta().query.id));
    let loadData;
</script>
<main>
{#await modData}
{:then data}



<header class="text-center py-5 my-0">
    <h1>Módosítás - {data.name}</h1>
</header>
<hr>
<Input name="id" type="number" title="Azonosító" disabled={true} value={data.id} />
<Input name="name" type="text" title="Név" value={data.name} />
<Input name="shortdesc" type="text" title="Rövid leírás" value={data.shortdesc} />
<Input name="href" type="text" title="Link" value={data.href} />
<EditorJs id={"modsight"} type={"Látnivaló"} bind:loadData/>
{@const load = setTimeout(() => {
    loadData(JSON.parse(data.fulldesc))
}, 1000)}
<div id="buttons" class="mb-3">
    <a href="/admin" class="btn btn-primary"><i class="bi bi-arrow-left"></i></a>
    <button class="btn btn-success">Véglegesítés<i class="bi bi-check"></i></button>
</div>

{/await}
</main>
<style>
main{
    max-width: 60em;
    margin: 0 auto;
}
</style>