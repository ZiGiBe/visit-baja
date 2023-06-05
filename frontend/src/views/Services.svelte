<script lang="ts">
    export let isRestaurant:boolean;
    import Menu from "../components/Menu.svelte";
</script>

<style>
  .fade-effect{
    color: white;
    background: rgb(0,147,200);
    opacity: 0.7;
    height: inherit;
    overflow: hidden;
  }

  .fade-effect h1{
    padding-top: 2vh;
  }

  header{
    background-image: url('hatter.jpg');
    background-size: cover;
    background-position: center center;
    height: 17vh;
    margin-bottom: 6vh;
  }


  .wave{
        min-width: 100%;
        height: 15vh;
        z-index: 2;
        position: relative;
        top: -9vh;
    }

    @media screen and (max-width: 768px) {
        .wave{
           object-fit: cover;
        }
    }

</style>


<div>
  <Menu/>
  <header>
    <div class="fade-effect">
      <h1 class="offset-3 col-6">
        {#if isRestaurant==true}
        Éttermek
        {:else}
        Szálláshelyek
        {/if}
      </h1>
    </div>
    <img src="/wave.png" alt="wave" class="wave">
  </header>
  <main class="col-12 offset-md-2 col-md-10 offset-lg-3 col-lg-6 p-3 d-flex flex-column">
    <div>
      Tartalom
    </div>
    <div>
      Második tartalom
    </div>
    
  </main>
</div>