<script lang="ts">
    export let isRestaurant:boolean;
</script>

<style>

</style>

<main>
  <h1>
    {#if isRestaurant}
        Éttermek
    {:else}
        Szálláshelyek
    {/if}
  </h1>  
</main>