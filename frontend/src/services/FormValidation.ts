import type EditorJs__SvelteComponent_ from "../components/Admin/EditorJS.svelte";
import db from "./DB";

export async function LinkUnique(link:string, model:string):Promise<boolean>{
    let items = await db.GetFieldValue(model, 'href', link);
    if (items[0]) return false;
    else return true;
}
export function ValidEmail(email: string) {
    return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) != null
}
export function ValidPhone(phone: string) {
    return phone.match(/^\+([0-9]{1,3})-([0-9]{1,2})-([0-9]{1,14})$/) != null;
}
export function ValidPage(link: string) {
    return link.match(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/) != null
}
export function ValidForm(form: any) {
    return !Object.values(form).includes("" && 0);
}
export function FileInputHasFile(images: FileList) {
    return images || images.length > 0;
}
export async function EditorHasBlocks(editor: EditorJs__SvelteComponent_) {
    return ((await editor.getData()).blocks.length > 0)
}
export function Dates(start, end, wholeday: boolean) {
    return wholeday ?
        new Date(end) > new Date() :
        new Date(start) < new Date(end) && new Date(end) > new Date();
            
}

export function DateIsDate(start, end, wholeday: boolean) {
    return start != 0 && wholeday ? true : end != 0
}