import prisma from "@/lib/prisma";
import { type NextRequest } from "next/server";
import { ZodError } from "zod";
import { productSchema } from "../schemas/product";

export async function GET() {
    const products = await prisma.product.findMany()
    return Response.json({
        message: "Successfull operation",
        data: products
    })
}


export async function POST(req: NextRequest) {

    try {
        const body = await req.json()
        const parsedData = productSchema.parse(body)

        const newProduct = await prisma.product.create({
            data: parsedData
        })

        return Response.json({
            message: "Successfull operation",
            data: newProduct
        })

    } catch (err) {
        if (err instanceof ZodError) {
            return new Response(JSON.stringify({
                data: err.errors
            }), {
                status: 500
            })
        }

        return new Response(JSON.stringify({
            message: "Wrong operation",
            data: "Unexpected Error"
        }), {
            status: 500
        })
    }

}