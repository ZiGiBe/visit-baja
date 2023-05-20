<script lang="ts">
    export let name = "";
    export let type;
    export let title = "";
    export let value = type=="text" ? "" : 0;

    function typeaction(node){
        node.type = type;
    }
</script>


<div class="form-floating mb-3">
    <input use:typeaction {name} bind:value class="form-control" placeholder={title}>
    <label for="floatingInput">{title}</label>
</div>