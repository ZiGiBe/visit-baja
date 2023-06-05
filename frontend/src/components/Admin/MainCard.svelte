<script lang="ts">
    export let name = "";
    export let icon = "";
    export let target = "";
</script>
<style>
    .maincard>p{
        transition: transform 0.2s;
        text-decoration: underline 1px solid black;
    }
    .maincard:hover>p{
        transform: translateX(10px);
        cursor: pointer;
    }
</style>
<div data-bs-target={"#"+target} data-bs-toggle="modal" class="maincard">
    <p>
        <span>{name}</span>
        <i class={`bi bi-${icon}`}></i>
    </p>
</div>