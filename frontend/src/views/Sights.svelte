<script lang="ts">
    import SightCard from '../components/SightCard.svelte';
    import type { Gallery } from '../interfaces/Gallery';
    import type { Sight } from '../interfaces/Sights';
    import db from '../services/DB';
    import { CheckSite } from "../services/ActualSite";
    CheckSite();

    let SightsPromise = Promise.all([db.Get('Sights'), db.GetFieldValue('SightsGallery', 'preview', 1)]).then((Results)=>{
    let sights = Results[0] as Sight[];
    let images = Results[1] as Gallery[];
    
    return sights.map(e=>{return {
        ...e,
        gallery: images.filter(h=>h.itemID==e.id)
    }
    })
    })
</script>

<div>
    {#await SightsPromise}
        <div class="spinner-border"></div>
    {:then Sights} 
        <div class="row justify-content-around m-0">
            {#each Sights as Sight, i}
            <div class="col-xl-3 col-md-5 col-sm-10 mx-1" title="{(i+1).toString()}">
                <SightCard SightData={Sight} />
            </div>
            

            {/each}
        </div>
    {/await}
</div>

<style>
    .divider{
    width: 90%;
    border-width: 3px;
    border-radius: 50%;
    margin-top: 3vh;
    margin-bottom: 3vh;
}
</style>