import { Lucia } from "lucia"

import { PrismaAdapter } from "@lucia-auth/adapter-prisma"
import prisma from "./prisma"



const adapter = new PrismaAdapter(prisma.session, prisma.user)

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        name: "eddy-auth-cookie",
        expires: true,
        attributes: {
            secure: process.env.NODE_ENV === "production"
        }
    }
})