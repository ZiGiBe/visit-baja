<script>
  import { Routes } from "../services/ActualSite";
</script>
<style> 
nav *{
    background-color: #C0E7F6;
    color: var(--kek1);
}
img{
    height: 60px;
}
hr{
    border: 2px solid white;
    border-radius: 20%;
    width: 100%;
}
</style>

<nav class="navbar sticky-top p-0  navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img src="/logo.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          {#each $Routes as route}
            <li class="fs-5 text-center fw-medium nav-item">
              <a class="nav-link" href="{route.route}">{route.name}</a>
            </li>
            <hr class="d-lg-none">
          {/each}
        </ul>
      </div>
    </div>
  </nav>