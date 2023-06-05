<script>
    import Input from "../../Input.svelte";
    export let modData;
</script>


<Input name="id" type="number" title="Azonosító" disabled={true} value="" />
<Input name="name" type="text" title="Név" value={modData.name} />
<Input name="shortdesc" type="text" title="Rövid leírás" value={modData.shortdesc} />