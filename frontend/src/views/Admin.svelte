<script lang="ts">
    import MainCard from "../components/Admin/MainCard.svelte";
    import Modal from "../components/Admin/Modal/Modal.svelte";
    import db from "../services/DB";
    import NewInfo from "../components/Admin/forms/NewInfo.svelte";
    import NewProgram from "../components/Admin/forms/NewProgram.svelte";
    import NewSight from "../components/Admin/forms/NewSight.svelte";
    import NewService from "../components/Admin/forms/NewService.svelte";
    import TourInformEditor from "../components/Admin/forms/TourInformEditor.svelte";
    import SlideEdit from "../components/Admin/forms/SlideEdit.svelte";
    let tabindex = 0;
    let sync;
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
            name: "Szálláshelyek/Éttermek",
            target: "services",
            promise: db.Get("Services"),
            type: "Services"
        },
        {
            icon: "calendar",
            name: "Programok",
            target: "programs",
            promise: db.Get("Programs"),
            type: ""
        },
        {
            icon: "info-square",
            name: "Fontos tudnivalók",
            target: "infos",
            promise: db.Get("Programs"),
            type: "Programs"
        }
    ];
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
                            <NewSight />
                        </div>
                        <div class="tab-pane p-3 fade" id="servicestab">
                            <NewService />
                        </div>
                        <div class="tab-pane p-3 fade" id="programstab">
                            <NewProgram />
                        </div>
                        <div class="tab-pane p-3 fade" id="infostab">
                            <NewInfo />
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h3 class="accordion-header"><button on:click={sync} class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#editsubpage">Tourinform Iroda módosítása</button></h3>
                <div class="accordion-collapse collapse" id="editsubpage">
                    <TourInformEditor bind:Sync={sync} />
                </div>
            </div>
            <div class="accordion-item">
                <h3 class="accordion-header"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#editslideshow">Indexoldal háttereinek módosítása</button></h3>
                <div class="accordion-collapse collapse" id="editslideshow">
                    <SlideEdit />
                </div>
            </div>
        </div>
        <!-- <a href="/admin/translate/Sights?id=2" class="btn btn-primary">Fordítást tesztelni</a> -->
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
