<script lang="ts">
    export let isRestaurant:boolean;
    import ServiceCard from "../components/ServiceCard.svelte";
    import type { Service } from "../interfaces/Service";


    // Példa a kőködéshez
    let example:Service = {
      id:0,
      name: "Bajai Csodálatos messzire néző Türr kilátó",
      address: "Baja Bácska tér 1",
      phone: "06708767563",
      email: "teszt@teszt.com",
      description: "string",
      href: "https://visithajos.hu",
      isRestaurant: true,
      image: "kep_normal.jpg",
    }
    //-----------------------
    let ServiceList:Service[]=[example,example,example,example,example,example]

</script>

<style>
  .divider{
    width: 90%;
    border-width: 3px;
    border-radius: 50%;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
</style>


<div>
  <main class="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-12 offset-xl-1 col-xl-10 p-3 d-flex flex-wrap justify-content-around">
    {#await ServiceList}
      <div class="spinner-border"></div>
    {:then Services} 
      {#each Services as Service,i}
        <div class="col-12 col-lg-5 col-xl-5">
          <ServiceCard ServiceData={Service}/>
        </div>
        <hr class:d-lg-none={i%2==0} class="divider">
      {/each}
    {/await}
  </main>
</div>