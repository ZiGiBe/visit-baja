<script lang="ts">
    import EditorJS from '@editorjs/editorjs';

    
    const editor = new EditorJS({
        holder: 'editor'
    });
    let values = [];
    
</script>

<div class="modal fade" id="addsight" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="bg-primary bg-gradient modal-header">
                <h1 class="modal-title fs-5 text-light">Látnivalók - Hozzáadás</h1>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
            </div>
            <div class="modal-body">
                <div id="editor"></div>
            </div>
            <div class="modal-footer">

            </div>
        </div>
    </div>
</div>
