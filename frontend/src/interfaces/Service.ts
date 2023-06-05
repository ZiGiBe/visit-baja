import type { Gallery } from "./Gallery";

export interface Service {
    id?:number;
    name: string;
    address: string;
    description: string;
    href: string;
    isRestaurant: boolean;
    gallery: Gallery[];
    createdAt?: string;
    updatedAt?: string;
}