"use client"

import { Button } from '@mantine/core'
import React from 'react'
import { logout } from '../../api/logout';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

function ButtonLogOut() {


    const router = useRouter();
    return (
        <Button onClick={async () => {
            const res = await logout();
            if (res) {
                toast.success("Bye Bye see you tomorrow !! 😉")
                router.push("/")
            } else {
                toast.error("Something Wrong")
            }

        }}>Log Out</Button>
    )
}

export default ButtonLogOut
