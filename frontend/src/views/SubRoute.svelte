<script>
    import Header from "../components/Header.svelte";
    import Menu from "../components/Menu.svelte";
    import Footer from "../components/Footer.svelte";
    import Services from "./Services.svelte";
    import Sights from "./Sights.svelte";
    import Tourinform from "./Tourinform.svelte";
    import Impressum from "../components/Impressum.svelte";
    import Programs from "./Programs.svelte";
    import { Route } from 'tinro';
</script>


<Menu/>
<Header />
<Route path="/vendeglatohelyek" ><Services isRestaurant={true} /></Route>
<Route path="/szallasok" ><Services isRestaurant={false} /></Route>
<Route path="/latnivalok" ><Sights /></Route>
<Route path="/tourinform" ><Tourinform /></Route>
<Route path="/impresszum"> <Impressum /> </Route>
<Route path="/programok"> <Programs /> </Route>
<Footer />
