<script lang="ts">
    import Index from './views/Index.svelte';
    import Admin from './views/Admin.svelte';
    import { Route } from 'tinro';
    import Login from './views/Login.svelte';
    import SubRoute from './views/SubRoute.svelte';
    import Tourinform from './views/Tourinform.svelte';
    import Sight from './views/Sight.svelte';
    import { jwt } from './components/Admin/stores';
    import ModSight from './components/Admin/Modal/Mod/ModSight.svelte';
    import ModProgram from './components/Admin/Modal/Mod/ModProgram.svelte';
    import ModService from './components/Admin/Modal/Mod/ModService.svelte';
</script>



<Route path="/"><Index/></Route>
<Route path="/tourinform" ><Tourinform /></Route>
<Route path="/szolgaltatasok/*">
    <SubRoute />
    <Route fallback redirect="/szolgaltatasok/vendeglatohelyek" />
</Route>
<Route path="/latnivalok/:sighthref"><Sight/></Route>

{#if $jwt != ""}
<Route path="/admin"><Admin/></Route>
<Route path="/admin/mod/:type" let:meta>
    {#if meta.params.type == "Sights"}
    <ModSight />
    {:else if meta.params.type == "Services"}
    <ModService/>
    {:else}
    <ModProgram/>
    {/if}
</Route>
{:else}
<Route path="/admin" redirect="/admin/login"/>
{/if}

<Route path="/admin/login"><Login/></Route>

<!-- Default path -->
<Route fallback redirect="/"></Route>