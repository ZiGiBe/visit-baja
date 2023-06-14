export interface Service {
    id?:number;
    name: string;
    address: string;
    phone: string;
    email: string;
    description: string;
    href: string;
    isRestaurant: boolean;
    image: string;
    createdAt?: string;
    updatedAt?: string;
}