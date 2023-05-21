<script lang="ts">
    import ModalBodyItem from "./ModalBodyItem.svelte";
    export let title = "";
    export let id = "";
    export let promise;
</script>

<div
    class="modal fade"
    {id}
    tabindex="-1"
    aria-hidden="true"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-primary bg-gradient text-light">
                <h1 class="modal-title fs-5">
                    {title}
                </h1>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
            </div>
            <div class="modal-body">
                {#await promise}
                <div class="spinner-border"></div>
                {:then data}
                <table class="table">
                    <thead>
                        <tr>
                            <th>#.</th>
                            <th>Név</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each data as item, i}
                            <ModalBodyItem {i} {item} />
                        {/each}
                    </tbody>
                </table>
                {/await}
            </div>
        </div>
    </div>
</div>
