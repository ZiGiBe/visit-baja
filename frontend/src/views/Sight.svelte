<script lang="ts">
    import { meta } from "tinro";
    import Menu from "../components/Menu.svelte";
    import SightComponent from "../components/SightComponent.svelte";
    import SightPlaceholder from "../components/SightPlaceholder.svelte";
    import type { Sight } from "../interfaces/Sights";
    import db, { BackendUrl } from "../services/DB";

    let sight: Promise<Sight> = db.GetFieldValue('Sights', 'href', meta().params.sighthref).then(async (res)=>{
        
        let sgt = res[0];
        let gallery = await db.GetFieldValue('SightsGallery', 'itemID', sgt.id);
        
        return {
            ...sgt,
            fulldesc: JSON.parse(sgt.fulldesc),
            gallery: [...gallery]
        }
    }
    )


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

