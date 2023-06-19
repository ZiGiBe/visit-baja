<script>
    import Menu from "../components/Menu.svelte";
    import Header from "../components/Header.svelte";
    import Services from "./Services.svelte";
    import Footer from "../components/Footer.svelte";
    import Tourinform from "./Tourinform.svelte";
    import { Route } from 'tinro';
</script>


<Menu/>
<Header />
<Route path="/ettermek" ><Services isRestaurant={true} /></Route>
<Route path="/szallasok" ><Services isRestaurant={false} /></Route>
<Route path="/tourinform" ><Tourinform /></Route>
<Footer />
