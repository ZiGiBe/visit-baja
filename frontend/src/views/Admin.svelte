<script lang="ts">
    import { object_without_properties, validate_component } from "svelte/internal";
import Input from "../components/Admin/Input.svelte";
    import MainCard from "../components/Admin/MainCard.svelte";
    import EditorJs from "../components/Admin/Modal/EditorJS.svelte";
    import Modal from "../components/Admin/Modal/Modal.svelte";
    import db from "../services/DB";
    import { Upload } from "../services/File";
    let tabindex = 0;
    let categories = [
        {
            icon: "eye",
            name: "Látnivalók",
            target: "sights",
            promise: db.Get("Sights"),
            type: "Sights"
        },
        {
            icon: "wallet2",
            name: "Szolgáltatások/Éttermek",
            target: "services",
            promise: db.Get("Services"),
            type: "Services"
        },
        {
            icon: "house",
            name: "Szállások",
            target: "accomodations",
            promise: db.Get("Accomodations"),
            type: "Accomodations"
        },
    ];
    let SightEditor: EditorJs;
    let ServiceEditor: EditorJs;
    let ProgramEditor: EditorJs;
    let AccomodationEditor: EditorJs;

    let SightImages: FileList;
    let ServiceImages: FileList;
    let AccomodationImages: FileList;
    let ProgramImage: FileList;
    
    let newSight: any = {};
    let newProgram: any = {};
    let newService: any = {};
    let newAccomodation: any = {};

    //TODO: Input validation
    async function submitSight() {
        let body = {
            ...newSight,
            fulldesc: JSON.stringify(await SightEditor.getData()),
        };
        if (Object.values(body).map((e) => (typeof e == "string" ? e.trim() : e)).includes("")) {

        } 
        else {
            await db
                .Post("Sights", body)
                .then((res) => {
                    categories[0].promise = db.Get("Sights");
                })
                .catch((err) => {});
        }
    }
    async function submitService(){
        let body = {
            ...newService,
            description: JSON.stringify(await ServiceEditor.getData())
        }
        if (Object.values(body).map((e) => (typeof e == "string" ? e.trim() : e)).includes("")){

        }
        else await db.Post("Services", body).then(res=>categories[1].promise = db.Get("Services")).catch(err=>{});
    }
</script>

<main>
    <h1 class="text-center py-5">Szeretlek Baja - Adminisztrációs felület</h1>
    <div class="main">
        <div>
            <h3>Módosítás/Törlés</h3>
            <div>
                {#each categories as category}
                    <MainCard
                        icon={category.icon}
                        name={category.name}
                        target={category.target}
                    />
                {/each}
            </div>
            <hr />
            <h3>Hozzáadás</h3>
            <ul class="nav nav-tabs" id="categoryTab">
                {#each categories as category, i}
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            class:active={tabindex == i}
                            data-bs-toggle="tab"
                            data-bs-target={"#" + category.target + "tab"}
                            on:click={() => (tabindex = i)}
                            href="#">{category.name}</a
                        >
                    </li>
                {/each}
            </ul>
            <div class="tab-content" id="categoryTabContent">
                <div class="tab-pane p-3 fade active show" id="sightstab">
                    <Input
                        type="text"
                        name="name"
                        title="Név"
                        bind:value={newSight.name}
                    />
                    <Input
                        type="text"
                        name="shortdesc"
                        title="Rövid leírás"
                        bind:value={newSight.shortdesc}
                    />
                    <Input type="file" name="images" bind:files={SightImages} title="Kép(ek)"/>
                    <EditorJs id={"newSightContent"} bind:this={SightEditor} />
                    <Input
                        type="text"
                        name="href"
                        title="Link"
                        bind:value={newSight.href}
                    />
                    <button class="btn btn-success" on:click={submitSight}>
                        <i class="bi bi-check" />
                    </button>
                </div>
                <div class="tab-pane p-3 fade" id="servicestab">
                    <Input name="name" title="Név" type="text" bind:value={newService.name} />
                    <Input name="address" title="Cím" type="text" bind:value={newService.address} />
                    <EditorJs id={"newServiceContent"} bind:this={ServiceEditor} />
                    <Input name="href" title="Weboldal" type="text" bind:value={newService.href} />
                    <Input name="isRestaurant" title="Étterem?" type="check" bind:checked={newService.isRestaurant} />
                    <button class="btn btn-success" on:click={submitService}>
                        <i class="bi bi-check" />
                    </button>
                </div>
                <div class="tab-pane p-3 fade" id="accomodationstab" />
            </div>
        </div>
    </div>
    {#each categories as category}
        <Modal
            id={category.target}
            title={category.name}
            promise={category.promise}
            type={category.type}
        />
    {/each}
</main>

<style>
    .main {
        margin: auto;
        max-width: 800px;
    }
</style>
