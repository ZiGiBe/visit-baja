<script lang="ts">
    import SightCard from "../components/Cards/SightCard.svelte";
    import type { Gallery } from "../interfaces/Gallery";
    import type { Sight } from "../interfaces/Sights";
    import db from "../services/DB";
    import { CheckSite } from "../services/ActualSite";
    import { i18n } from "../services/i18n";
    CheckSite();

    let SightsPromise = Promise.all([
        db.Get("Sights"),
        db.GetFieldValue("SightsGallery", "preview", 1),
        db.GetFieldValue('Translations', 'model', 'Sights')
    ]).then((Results) => {
        let sights = Results[0] as Sight[];
        let images = Results[1] as Gallery[];
        sights.forEach(AddTranslationFromStockRequest);
        Results[2].forEach(AddTranslationFromTranslations)
        return sights.map((e) => {
            return {
                ...e,
                gallery: images.filter((h) => h.itemID == e.id),
            };
        });
    });
    function AddTranslationFromStockRequest(element){
        let fulld = JSON.parse(element.fulldesc);
        
        $i18n.addResourceBundle('hu', 'Sight-'+element.id, {
            name: element.name,
            description: element.shortdesc,
            fulldesc: fulld
        })
        
    }
    function AddTranslationFromTranslations(element){
        let fulld = JSON.parse(element.fulldesc);
        $i18n.addResourceBundle(element.lang, 'Sight-'+element.itemId, {
            name: element.name,
            description: element.description,
            fulldesc: fulld
        })
    }
</script>

<div>
    {#await SightsPromise}
        <div class="spinner-border" />
    {:then Sights}
        <div class="row justify-content-around m-0">
            {#each Sights as Sight, i}
                <div class="col-xl-3 col-md-5 col-sm-10 mx-1">
                    <SightCard SightData={Sight} />
                </div>
            {/each}
        </div>
    {/await}
</div>

<style>
</style>
