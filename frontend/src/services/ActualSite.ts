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
        name: "Kezdőlap",
        title: "",
        route: "/"
    },
    {
        name: "Éttermek",
        title: "Éttermek",
        route: "/szolgaltatasok/vendeglatohelyek"
    },
    {
        name: "Szálláshelyek",
        title: "Szálláshelyek",
        route: "/szolgaltatasok/szallasok"
    },
    {
        name: "Látványosságok",
        title: "Látványosságok",
        route: "/szolgaltatasok/latvanyossagok"
    },
    {
        name: "Tourinform iroda",
        title: "Tourinform iroda",
        route: "/szolgaltatasok/tourinform"
    },
    {
        name: "Kiadványok",
        title: "Tourinform iroda",
        route: "/szolgaltatasok/tourinform#kiadvanyok"
    },
]
export let Routes = writable(routes)





