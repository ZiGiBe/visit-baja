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
        route: "/",
        visible: true
    },
    {
        name: "restaurants",
        title: "Vendéglátóhelyek",
        route: "/szolgaltatasok/vendeglatohelyek",
        visible: true
    },
    {
        name: "accomodations",
        title: "Szálláshelyek",
        route: "/szolgaltatasok/szallasok",
        visible: true
    },
    {
        name: "sights",
        title: "Látnivalók",
        route: "/szolgaltatasok/latnivalok",
        visible: true
    },
    {
        name: "tourinform",
        title: "Tourinform iroda",
        route: "/szolgaltatasok/tourinform",
        visible: true
    },
    {
        name: "publications",
        title: "Tourinform iroda",
        route: "/szolgaltatasok/tourinform#kiadvanyok",
        visible: true
    },
    {
        name: "impressum",
        title: "Impresszum",
        route: "/szolgaltatasok/impresszum",
        visible: false
    }
]
export let Routes = writable(routes)





