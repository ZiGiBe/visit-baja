<script lang="ts">
    import Input from "../components/Admin/Input.svelte";
    import MainCard from "../components/Admin/MainCard.svelte";
    import EditorJs from "../components/Admin/EditorJS.svelte";
    import Modal from "../components/Admin/Modal/Modal.svelte";
    import db from "../services/DB";
    import { Upload } from "../services/File";
    import Alert from "../components/Admin/Alert.svelte";
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
        {
            icon: "calendar",
            name: "Programok",
            target: "programs",
            promise: db.Get("Programs"),
            type: "Programs"
        }
    ];
    let SightEditor: EditorJs;
    let ServiceEditor: EditorJs;
    let ProgramEditor: EditorJs;
    let AccomodationEditor: EditorJs;

    let SightImages: FileList;
    let ServiceImages: FileList;
    let AccomodationImages: FileList;
    let ProgramImage: FileList;
    
    let sightalert, servicealert, programalert, accomodationalert;

    let newSight: any = {};
    let newProgram: any = {};
    let newService: any = {};
    let newAccomodation: any = {};

    //TODO: Input validation
    async function SubmitEvent(){
        console.log(newProgram)
        programalert({
            show:true,
            type:"danger",
            reason: "szart",
            reasondesc:"am",
            errors: [
                "rossz ez",
                "meg ez",
                "ez meg nagyón rósz"
            ]
        })
    }

    async function submitAccomodation(){
        console.log(newAccomodation)
    }

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
    <hr>
    <div class="main">
        <div class="accordion">
            <div class="accordion-item">
                <h3 class="accordion-header">
                    <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#moditems">
                        Módosítás/Törlés
                    </button>
                </h3>
                <div class="accordion-collapse collapse" id="moditems">
                    <div class=accordion-body>
                        {#each categories as category}
                            <MainCard
                                icon={category.icon}
                                name={category.name}
                                target={category.target}
                            />
                        {/each}
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h3 class="accordion-header">
                   <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#addnew">
                        Hozzáadás
                   </button> 
                </h3>
                <div class="accordion-collapse collapse" id="addnew">
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
                            <Alert bind:SetAlert={sightalert} />
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
                            <EditorJs id={"newSightContent"} type="Látnivaló" bind:this={SightEditor} />
                            <Input type="file" name="images" bind:files={SightImages} title="Kép(ek)"/>
                            <Input
                                type="text"
                                name="href"
                                title="Link"
                                bind:value={newSight.href}
                            />
                            <button class="btn btn-success" on:click={submitSight}>
                                <i class="bi bi-plus-lg" />
                            </button>
                        </div>
                        <div class="tab-pane p-3 fade" id="servicestab">
                            <Alert bind:SetAlert={servicealert} />
                            <Input name="name" title="Név" type="text" bind:value={newService.name} />
                            <Input name="address" title="Cím" type="text" bind:value={newService.address} />
                            <EditorJs id={"newServiceContent"} type="Szolgáltatás" bind:this={ServiceEditor} />
                            <Input name="image" title="Kép" type="file" bind:files={ServiceImages} />
                            <Input name="href" title="Weboldal" type="text" bind:value={newService.href} />
                            <Input name="isRestaurant" title="Étterem?" type="check" bind:checked={newService.isRestaurant} />
                            <button class="btn btn-success" on:click={submitService}>
                                <i class="bi bi-plus-lg" />
                            </button>
                        </div>
                        <div class="tab-pane p-3 fade" id="accomodationstab">
                            <Alert bind:SetAlert={accomodationalert} />
                            <Input name="name" title="Név" type="text" bind:value={newAccomodation.name} />
                            <Input name="address" title="Cím" type="text" bind:value={newAccomodation.address} />
                            <EditorJs id={"newAcommodationContent"} type="Szállás" bind:this={AccomodationEditor} />
                            <Input name="image" title="Kép" type="file" bind:files={AccomodationImages} />
                            <Input name="href" title="Weboldal" type="text" bind:value={newService.href} />
                            <button class="btn btn-success" on:click={submitAccomodation}>
                                <i class="bi bi-plus-lg"></i>
                            </button>
                        </div>
                        <div class="tab-pane p-3 fade" id="programstab">
                            <Alert bind:SetAlert={programalert} />
                            <Input name="title" title="Cím" type="text" bind:value={newProgram.title} />
                            <Input name="start" title="Kezdés" type="datetime-local" bind:value={newProgram.start} />
                            <Input name="end" title="Befejezés" disabled={!newProgram.start} type="datetime-local" bind:value={newProgram.end} />
                            <EditorJs id={"newProgramContent"} type="Program" bind:this={ProgramEditor} />
                            <Input name="image" title="Kép" type="file" bind:files={ProgramImage} />
                            <button class="btn btn-success" on:click={SubmitEvent}>
                                <i class="bi bi-plus-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
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
