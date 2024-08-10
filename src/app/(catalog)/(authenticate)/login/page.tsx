import { Button, Card, Container, Input, InputLabel, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import LoginForm from './lib/components/login-form'

function LoginPage() {
    return (
        <div className='w-full px-4 sm:px-0 flex justify-center items-center'>
            <Card className='sm:max-w-[500px] w-full border rounded shadow p-8 flex flex-col gap-4'>

                <Text className='text-center text-2xl' variant='gradient' fw={800} >The Collection</Text>

                <div className='py-12'>
                    <LoginForm />
                </div>

                <Link href="/signup" className='text-medium underline text-blue-600 text-center text-sm'>You do not have an account yet, create one</Link>
            </Card>
        </div>
    )
}

export default LoginPage
