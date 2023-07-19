<script lang="ts">
  import { Routes } from "../services/ActualSite";
  import { i18n } from "../services/i18n";

  function SwitchLangTo(code:string){
    $i18n.changeLanguage(code);
  }

</script>

<style>
  nav *{
    background-color: #C0E7F6;
    color: var(--kek1);
  }

  .active{
      background-color: var(--bs-dropdown-link-active-bg);
  }

  img{
    height: 60px;
  }

  hr{
    border: 2px solid white;
    border-radius: 20%;
    width: 100%;
  }

  .dropdown-menu{
    transition: 2s;  
  }

  @media only screen and (max-width: 991px) {
    .dropdownRoutes{
      position: fixed;
      top: 70px;
      left: 0;
      width: 100%;
      max-height: calc(100vh - 70px);
    }

    #navbarNav{
      direction: rtl;
      overflow-y: auto;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }

    #navbarNav::-webkit-scrollbar {
        display: none;
    }


  }

  

</style>

<nav class="navbar sticky-top p-0 navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="/logo.png" alt="Logo" /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse dropdownRoutes" id="navbarNav">
      <ul class="navbar-nav">
        {#each $Routes as route}
          {#if route.visible}
            <li class="fs-5 text-center fw-medium nav-item">
              <a class="nav-link" href={route.route}
                ><!--{$i18n.t("menu." + route.name)}-->{route.name}</a
              >
            </li>
            <hr class="d-lg-none" />
          {/if}
        {/each}
        <li class="fs-5 text-center fw-medium nav-item dropdown">
          <button
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-translate" />
          </button>
          <ul class="dropdown-menu dropdown-menu-end m-3">
            <li id="en"><button on:click={()=>SwitchLangTo('en')} class:active={$i18n.language=='en'} class="dropdown-item">EN</button></li>
            <li id="hu"><button on:click={()=>SwitchLangTo('hu')} class:active={$i18n.language=='hu'} class="dropdown-item">HU</button></li>
            <li id="de"><button on:click={()=>SwitchLangTo('de')} class:active={$i18n.language=='de'} class="dropdown-item">DE</button></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

