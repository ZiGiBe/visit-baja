<script lang="ts">
    import ProgramCard from "../components/Cards/ProgramCard.svelte";
    
    import db from "../services/DB";
    import { CheckSite } from "../services/ActualSite";
    CheckSite();
    let ProgramsPromise = db.GetFieldValue('Programs', 'end', new Date().toISOString(), 'gte');
    
</script>

<div>
    {#await ProgramsPromise}
        <div class="spinner-border" />
    {:then Programs}
        <div class="row justify-content-around m-0">
            {#each Programs as Program, i}
                <div class="col-xl-3 col-md-5 col-sm-10 mx-1">
                    <ProgramCard ProgramData={Program} />
                </div>
            {/each}
        </div>
    {/await}
</div>

<style>
</style>
