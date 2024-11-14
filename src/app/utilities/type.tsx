import { StaticImageData } from "next/image";

export type cateblog = {
    id:number;
    title:string;
    description:string;
    image?: string[] | StaticImageData | undefined;
    blog: string;
    category: string
}



export type detailblog = {
    id:number;
    title:string;
    description:string;
    moredetail:string;
    image?: string | StaticImageData | undefined
    blog: string;
    category: string
}