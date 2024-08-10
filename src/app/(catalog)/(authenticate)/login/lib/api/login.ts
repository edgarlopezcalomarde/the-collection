"use server"

import prisma from "@/lib/prisma"
import { LoginSchema } from "../model/login"
import { Argon2id } from "oslo/password"
import { lucia } from "@/lib/lucia"
import { cookies } from "next/headers"

export async function login(values: LoginSchema) {
    try {
        const existsUser = await prisma.user.findFirst({
            where: {
                username: values.username
            }
        })

        if (!existsUser) {
            return { error: "Invalid Credentials", success: false }
        }

        const isPassword = await new Argon2id().verify(existsUser.hashedPassword, values.password)

        if (!isPassword) {
            return { error: "Invalid Credentials", success: false }
        }


        const session = await lucia.createSession(existsUser.id, {})
        const sessionCookie = await lucia.createSessionCookie(session.id)

        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        return { success: true }

    } catch (err) {
        return { error: "Something went wrong", success: false }
    }

}