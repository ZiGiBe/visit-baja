import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";
import { en } from "../translations/en";
import { hu } from "../translations/hu";
import { de } from "../translations/de";
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