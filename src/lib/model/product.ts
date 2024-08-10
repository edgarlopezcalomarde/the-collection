


export interface Product {
    id?: number,
    description: string,
    name: string
    price: number,
    isVisible: boolean
    img: string
}

export type ProductList = Array<Product>