<script lang="ts">
    export let isRestaurant:boolean;
    import Menu from "../components/Menu.svelte";
</script>

<style>

</style>
<Menu/>
<main>
  <h1>
    {#if isRestaurant==true}
        Éttermek
    {:else}
        Szálláshelyek
    {/if}
  </h1>  
</main>