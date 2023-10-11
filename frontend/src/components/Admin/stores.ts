import { get, readable, writable } from "svelte/store";
import Header from "@editorjs/header";
import List from "@editorjs/list"
import Delimiter from '@editorjs/delimiter';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import Paragraph from '@editorjs/paragraph';
import Warning from '@editorjs/warning';
import Link from '@editorjs/link'
import Marker from '@editorjs/marker';
import Underline from '@editorjs/underline';
import TextVariantTune from '@editorjs/text-variant-tune';
import Hyperlink from 'editorjs-hyperlink';
import AttachesTool from '@editorjs/attaches';
import Cookies from 'js-cookie'; 
export let jwt = writable(Cookies.get('visitbaja.hu')?Cookies.get('visitbaja.hu') : "");

export const EditorJSTools = readable({
    header: Header,
    list: List,
    delimiter: Delimiter,
    quote:{
        class: Quote,
        config:{
            quotePlaceholder: 'Idézet szövege',
            captionPlaceholder: 'Idézett személy',
        }
    } ,
    table: Table,
    hyperlink:{
        class: Hyperlink,
        config: {
            target: '_blank',
            rel: 'external',
            availableTargets: ['_blank', '_self'],
            availableRels: ['external', 'alternate']
        }
    },
    paragraph:{
        class: Paragraph,
        inlineToolbar: ['italic', 'bold', 'underline', 'marker', 'hyperlink']
    },
    link: Link,
    warning:{
        class: Warning,
        config:{
            titlePlaceholder:"Cím",
            messagePlaceholder: "Üzenet"
        }
    },
    marker: Marker,
    underline: Underline,
    textVariant: TextVariantTune
    
});
export const EditorJSTunes = readable(['textVariant'])
export const EditorJSHun = readable({
    i18n: {
        messages:{
            ui:{
                "blockTunes":{
                    "toggler":{
                        "Click to tune": "Klikkelj a módosításért",
                        "or drag to move": "Vagy húzdd a mozgatásért"
                    },
                },
                "inlineToolbar":{
                    "converter":{
                        "Convert to": "Átalakítás..."
                    },
                },
                "toolbar":{
                    "toolbox":{
                        "Add": "Blokk Hozzáadása"
                    }
                }
            },
            tools:{
                "list":{
                    "Ordered": "Számozott",
                    "Unordered": "Számozatlan"
                },
                "header":{
                    "Heading 1": "1. szintű címsor",
                    "Heading 2": "2. szintű címsor",
                    "Heading 3": "3. szintű címsor",
                    "Heading 4": "4. szintű címsor",
                    "Heading 5": "5. szintű címsor",
                    "Heading 6": "6. szintű címsor"
                },
                "quote":{
                    "Align Left": "Balra igazítás",
                    "Align Center": "Középre igazítás"
                },
                "table": {
                    "Add row above": "Sor beillesztése fölé",
                    "Add row below": "Sor beillesztése alá",
                    "Delete row": "Sor törlése",
                    "With headings": "Fejlécekkel",
                    "Without headings": "Fejlécek nélkül",
                    "Add column to left": "Sor beillesztése balra",
                    "Add column to right": "Sor beillesztése jobbra"
                },
                "hyperlink": {
                    "Save": "Mentés",
                },
            },
            toolNames:{
                "Text": "Szöveg",
                "Link": "Link",
                "Heading": "Címsor",
                "List": "Lista",
                "Delimiter": "Elválasztó",
                "Quote": "Idézet",
                "Table": "Táblázat",
                "Marker": "Kijelölés",
                "Bold": "Félkövér",
                "Underline": "Aláhúzás",
                "Call-out": "Felhívás",
                "Warning": "Figyelmeztetés",
                "Hyperlink": "Hiperhivatkozás"
            },
            blockTunes: {
                "delete": {
                    "Delete": "Blokk törlése",
                    "Click to delete": "Blokk törlése"
                },
                "moveUp":{
                    "Move up": "Feljebb tolás"
                },
                "moveDown":{
                    "Move down": "Lejebb tolás"
                },
                "textVariant":{
                    "Call-out": "Felhívás",
                    "Citation": "Idézés",
                    "Details": "Részletek"
                }
            }
        }
        
    }
})