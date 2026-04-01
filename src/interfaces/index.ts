import type { ElementType } from "react";

export interface INAVBARDATA {
 id: number,
 title: string,
 path: string,
}
export interface IUSEFULLINKS {
 id: number,
 title: string,
}
export interface ISOCIALDATA {
 id: string,
 name: string,
 icon: ElementType,
 color: string
}
export interface IProduct {
 title: string,
 slug: string,
 price: number,
 hasDiscount: boolean,
 discountRate: number | null,
 img: string,
 quantity: number,
 category: string,
 inStock: boolean,
}