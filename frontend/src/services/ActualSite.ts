import { writable } from "svelte/store";
export let Site = writable("Éttermek");

export function CheckSite(){

    if (window.location.href.includes("ettermek")) {
        Site.update(x => x = "Éttermek")
    } else if (window.location.href.includes("szallasok")){
        Site.update(x => x = "Szálláshelyek")
    } else {
        Site.update(x => x = "Tourinform iroda")
    }
}





