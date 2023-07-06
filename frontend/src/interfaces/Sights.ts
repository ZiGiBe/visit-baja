import type { Gallery } from "./Gallery";

export interface Sight{
    id?:number;
    name:string;
    shortdesc:string;
    fulldesc:any;
    href:string;
    gallery:Gallery[];
    createdAt?:string;
    updatedAt?:string;
}