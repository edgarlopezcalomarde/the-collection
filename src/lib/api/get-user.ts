"use server"

import { cookies } from "next/headers";
import { lucia } from "../lucia";
import prisma from "../prisma";


export async function getUser() {

    const sessionId = cookies().get(lucia.sessionCookieName)?.value || null
    if (!sessionId) {
        return null
    }

    const { session, user } = await lucia.validateSession(sessionId)

    if (session && session.fresh) {
        const sessionCookie = await lucia.createSessionCookie(session.id)
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    }

    if (!session) {
        const sessionCookie = await lucia.createBlankSessionCookie()
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    }


    const userFromDb = await prisma.user.findFirst({
        where: {
            id: user?.id
        }
    })

    return userFromDb
}