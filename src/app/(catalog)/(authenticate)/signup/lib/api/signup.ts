"use server"
import prisma from "@/lib/prisma";
import { RegisterSchema } from "../model/register";

import { Argon2id } from "oslo/password"
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";

export async function createAccount(values: RegisterSchema) {
    try {
        const existsUser = await prisma.user.findFirst({
            where: {
                username: values.username
            }
        })

        if (existsUser) {
            return { error: "User already exists", success: false }
        }

        const hashedPassword = await new Argon2id().hash(values.password)


        const user = await prisma.user.create({
            data: {
                hashedPassword,
                username: values.username
            }
        })


        const session = await lucia.createSession(user.id, {})
        const sessionCookie = await lucia.createSessionCookie(session.id)

        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        return { success: true }

    } catch (err) {
        return { error: "Something went wrong", success: false }
    }

}