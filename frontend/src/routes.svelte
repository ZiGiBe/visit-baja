<script lang="ts">
    import Index from './views/Index.svelte';
    import Admin from './views/Admin.svelte';
    import Services from './views/Services.svelte';
    import { Route } from 'tinro';
</script>



<Route path="/"><Index/></Route>
<Route path="/ettermek"><Services isRestaurant={true} /></Route>
<Route path="/szallasok"><Services isRestaurant={false} /></Route>
<Route path="/admin"><Admin/></Route>