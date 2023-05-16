<script lang="ts">
    import MainCard from "../components/Admin/MainCard.svelte";
    import Modal from "../components/Admin/Modal/Modal.svelte";
    import db from "../services/DB";
    let categories = [
        {
            icon: "eye",
            name: "Látnivalók",
            target: "sights",
            promise: db.Get('Sights')
        },
        {
            icon: "wallet2",
            name: "Szolgáltatások/Éttermek",
            target: "services",
            promise: db.Get('Services')
        },
        {
            icon: "house",
            name: "Szállások",
            target: "accomodations",
            promise: db.Get('Sights')
        }
    ]
    
</script>
<style>
    .main{
        margin: auto;
        max-width: 800px;
    }
</style>
<main>
    <h1 class="text-center py-5">Szeretlek Baja - Adminisztrációs felület</h1>
    <div class="main">
        <h3>Kategóriák</h3>
        <div>
            {#each categories as category}
                <MainCard icon={category.icon} name={category.name} target={category.target} />
            {/each}
        </div>
    </div>
    {#each categories as category}
        <Modal id={category.target} title={category.name} promise={category.promise}/>
    {/each}
</main>