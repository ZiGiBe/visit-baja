<script lang="ts">
    import { meta } from "tinro";
    import Menu from "../components/Menu.svelte";
    import SightComponent from "../components/SightComponent.svelte";
    import SightPlaceholder from "../components/SightPlaceholder.svelte";
    import type { Sight } from "../interfaces/Sights";
    import db, { BackendUrl } from "../services/DB";
    import { i18n } from "../services/i18n";

    let sight: Promise<Sight> = db.GetFieldValue('Sights', 'href', meta().params.sighthref).then(async (res)=>{
        
        let sgt = res[0];
        let gallery = await db.GetFieldValue('SightsGallery', 'itemID', sgt.id);
        let translations = await db.GetFieldValue('Translations', 'model', 'Sights', 'eq', sgt.id);

        translations.forEach(TryTranslationsfromRequest);
        TryTranslationsfromStock(sgt);
        return {
            ...sgt,
            fulldesc: JSON.parse(sgt.fulldesc),
            gallery: [...gallery]
        }
    }
    )
    function TryTranslationsfromStock(element){
        if (!$i18n.getResourceBundle('hu', 'Sight-'+element.id)){
            $i18n.addResourceBundle('hu', 'Sight-'+element.id, {
                name: element.name,
                description: element.shortdesc,
                fulldesc: ConvertBlocksToTranslation(JSON.parse(element.fulldesc).blocks)
            })
        }
    }
    function ConvertBlocksToTranslation(blocks){
        return [];
    }
    function TryTranslationsfromRequest(element){
        //Avoids duplicates because they are cringe.
        if (!$i18n.getResourceBundle(element.lang, 'Sight-'+element.itemId)){
            $i18n.addResourceBundle(element.lang, 'Sight-'+element.itemId, {
                name: element.name,
                description: element.description,
                fulldesc: JSON.parse(element.fulldesc)
            })
        }
    }
</script>

<style lang="sass">
    #main
        min-height: 100vh
        height: 100%
        display: flex
        flex-flow: column
        
    #container
        flex: 1 1 auto
        position: relative
        display: flex
        background-image: url('/kep_normal.jpg')
        background-size: cover
    #container::before
        content: ""
        position: absolute
        width: 100%
        height: 100%
        backdrop-filter: blur(1rem)

</style>

<div id="main">
    <Menu />
    {#await sight}
    <SightPlaceholder/>
    {:then sightData}
    <div id="container" style:background-image={'url('+BackendUrl+'media/'+sightData.gallery.find(e=>e.preview == true).image+')'}>
    <SightComponent {sightData} />
    </div>
    {/await}
</div>

