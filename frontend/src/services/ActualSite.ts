import { writable } from "svelte/store";
export let Site = writable("Éttermek");

export function CheckSite(){

    routes.forEach(item => {
        if (window.location.href.includes(item.route.split('/')[2])) {
            Site.update(x => x = item.title);
        }
    });

}

let routes = [
    {
        name: "main",
        title: "",
        route: "/"
    },
    {
        name: "restaurants",
        title: "Vendéglátóhelyek",
        route: "/szolgaltatasok/vendeglatohelyek"
    },
    {
        name: "accomodations",
        title: "Szálláshelyek",
        route: "/szolgaltatasok/szallasok"
    },
    {
        name: "sights",
        title: "Látnivalók",
        route: "/szolgaltatasok/latnivalok"
    },
    {
        name: "tourinform",
        title: "Tourinform iroda",
        route: "/szolgaltatasok/tourinform"
    },
    {
        name: "publications",
        title: "Tourinform iroda",
        route: "/szolgaltatasok/tourinform#kiadvanyok"
    },
]
export let Routes = writable(routes)





