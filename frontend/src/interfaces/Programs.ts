export interface Program{
    id: number;
    title: string;
    address:string;
    start: Date;
    end: Date;
    desc: string;
    href: string;
    image: string;
    createdAt?: string;
    updatedAt?: string;
}