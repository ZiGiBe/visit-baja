<script>
    import Input from "../../Input.svelte";
    import db from "../../../../services/DB";
    import { meta } from "tinro";
    import Alert from "../../Alert.svelte";
    let modData = db.Get(meta().params.type, Number(meta().query.id));

    async function Mod(){

    }
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
<Input name="shortdesc" type="phone" title="Telefonszám" value={data.phone} />
<Input name="email" type="text" title="E-Mail cím" value={data.email} />
<Input name="isRestaurant" type="check" title="Étterem?" checked={data.isRestaurant} />
<Input name="href" type="text" title="Link" value={data.href} />
<Input name="image" type="file" title="Kép módosítása" value={data.image} />

<hr>
<div id="buttons" class="mb-3">
    <a href="/admin" class="btn btn-primary"><i class="bi bi-arrow-left"></i></a>
    <button on:click={Mod} class="btn btn-success">Véglegesítés<i class="bi bi-check"></i></button>
</div>

{/await}
</main>
<style>
main{
    max-width: 60em;
    margin: 0 auto;
}
</style>