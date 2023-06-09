<script lang="ts">
    export let isRestaurant:boolean;
    import Menu from "../components/Menu.svelte";
    import ServiceCard from "../components/ServiceCard.svelte";
</script>

<style>
  .fade-effect{
    color: white;
    background: rgb(0,147,200);
    opacity: 0.7;
    height: inherit;
    overflow: hidden;
  }

  header h1{
    padding-top: 2vh;
    position: absolute;
    z-index: 3;
    color: white;
  }

  header{
    background-image: url('hatter.jpg');
    background-size: cover;
    background-position: center center;
    height: 17vh;
    margin-bottom: 6vh;
  }


  .wave{
        width: 100%;
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

  .divider{
    border-width: 3px;
    border-radius: 50%;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
</style>


<div>
  <Menu/>
  <header>
    <h1 class="offset-3 col-6">
      {#if isRestaurant==true}
      Éttermek
      {:else}
      Szálláshelyek
      {/if}
    </h1>
    <div class="fade-effect">
    </div>
    <img src="/wave.png" alt="wave" class="wave">
  </header>
  <main class="col-12 offset-md-2 col-md-8 offset-lg-2 col-lg-8 p-3 d-flex flex-column">
    <div>
      <ServiceCard />
      <hr class="divider">
    </div>
    <div>
      <ServiceCard />
      <hr class="divider">
    </div>
    <div>
      <ServiceCard />
      <hr class="divider">
    </div>
    <div>
      <ServiceCard />
      <hr class="divider">
    </div>
    <div>
      <ServiceCard />
      <hr class="divider">
    </div>
    
  </main>
</div>