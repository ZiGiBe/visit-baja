export interface Service {
    id?:number;
    name: string;
    address: string;
    description: string;
    href: string;
    isRestaurant: boolean;
    createdAt?: string;
    updatedAt?: string;
}