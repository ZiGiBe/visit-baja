<script lang="ts">
    import Index from './views/Index.svelte';
    import Admin from './views/Admin.svelte';
    import Services from './views/Services.svelte';
    import { Route } from 'tinro';
    import Login from './views/Login.svelte';
    import SubRoute from './views/SubRoute.svelte';
</script>



<Route path="/"><Index/></Route>
<Route path="/sub" redirect="/sub/ettermek">
    <Route path="/ettermek" fallback><Services isRestaurant={true} /></Route>
    <Route path="/szallasok"><Services isRestaurant={false} /></Route>
</Route>
<Route path="/admin"><Admin/></Route>
<Route path="/admin/login"><Login/></Route>