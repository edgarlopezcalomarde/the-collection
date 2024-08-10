
import prisma from "@/lib/prisma"
import { cache } from "react"

export const getProducts = cache(async () => {
    const products = await prisma.product.findMany()
    return products.map(i => ({ ...i, price: i.price.toNumber() }))
})

