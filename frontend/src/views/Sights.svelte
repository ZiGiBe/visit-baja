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
        <div class="d-flex justify-content-around row">
            {#each Sights as Sight}
                <div class="col-sm-1 col-md-2 col-lg-3">
                    <SightCard SightData={Sight}/>
                </div>
            {/each}
        </div>
    {/await}
</div>