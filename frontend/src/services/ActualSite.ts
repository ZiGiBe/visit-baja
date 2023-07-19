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
        name: "Főoldal",
        title: "",
        route: "/",
        visible: true
    },
    {
        name: "Vendéglátóhelyek",
        title: "Vendéglátóhelyek",
        route: "/szolgaltatasok/vendeglatohelyek",
        visible: true
    },
    {
        name: "Szálláshelyek",
        title: "Szálláshelyek",
        route: "/szolgaltatasok/szallasok",
        visible: true
    },
    {
        name: "Látnivalók",
        title: "Látnivalók",
        route: "/szolgaltatasok/latnivalok",
        visible: true
    },
    {
        name: "Tourinform iroda",
        title: "Tourinform iroda",
        route: "/szolgaltatasok/tourinform",
        visible: true
    },
    {
        name: "Kiadványok",
        title: "Tourinform iroda",
        route: "/szolgaltatasok/tourinform#kiadvanyok",
        visible: true
    },
    {
        name: "Impresszum",
        title: "Impresszum",
        route: "/szolgaltatasok/impresszum",
        visible: false
    }
]
export let Routes = writable(routes)





