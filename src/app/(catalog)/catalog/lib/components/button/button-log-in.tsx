"use client"
import { Button } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'

function ButtonLogIn() {

    const router = useRouter()

    return (

        <Button onClick={() => router.push("/login")} className="flex-auto flex items-center">
            <div className="pr-1">Log In</div>
        </Button>

    )
}

export default ButtonLogIn
