<script lang="ts">
    import Index from './views/Index.svelte';
    import Admin from './views/Admin.svelte';
    import { Route } from 'tinro';
</script>



<Route path="/"><Index/></Route>
<Route path="/admin"><Admin/></Route>