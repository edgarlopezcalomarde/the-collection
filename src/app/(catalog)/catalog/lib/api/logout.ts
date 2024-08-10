"use server"

import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";

export async function logout() {
    const sessionCookie = await lucia.createBlankSessionCookie()
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    return { sucess: true }

}