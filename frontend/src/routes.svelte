<script lang="ts">
    import Index from './views/Index.svelte';
    import Admin from './views/Admin.svelte';
    import { Route } from 'tinro';
    import Login from './views/Login.svelte';
    import SubRoute from './views/SubRoute.svelte';
    import Tourinform from './views/Tourinform.svelte';
    import Sight from './views/Sight.svelte';
</script>



<Route path="/"><Index/></Route>
<Route path="/tourinform" ><Tourinform /></Route>
<Route path="/szolgaltatasok/*">
    <SubRoute />
    <Route fallback redirect="/szolgaltatasok/vendeglatohelyek" />
</Route>
<Route path="/latnivalok/:sighthref"><Sight/></Route>
<Route path="/admin"><Admin/></Route>
<Route path="/admin/login"><Login/></Route>

<!-- Default path -->
<Route fallback redirect="/"></Route>