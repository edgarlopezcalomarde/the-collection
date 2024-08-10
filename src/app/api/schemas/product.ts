import { z } from "zod";


export const productSchema = z.object({
    name: z.string(),
    description: z.string(),
    img: z.string(),
    price: z.number(),
    isVisible: z.boolean()
})

