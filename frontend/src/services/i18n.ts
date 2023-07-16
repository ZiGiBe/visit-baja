import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";
import en from "../translations/en.json";
import hu  from "../translations/hu.json";
import de from "../translations/de.json";
i18next.init({
    lng: 'hu',
    fallbackLng: 'hu',
    resources: {
        ...en,
        ...de,
        ...hu
    }
})
export const i18n = createI18nStore(i18next);