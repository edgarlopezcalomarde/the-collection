import { Card, Text } from '@mantine/core'
import React from 'react'
import RegisterForm from './lib/components/register-form'
import Link from 'next/link'

function SignUpPage() {
    return (
        <div className='w-full px-4 sm:px-0 flex justify-center items-center'>
            <Card className='sm:max-w-[500px] w-full border rounded shadow p-8 flex flex-col gap-4'>

                <Text className='text-center text-2xl' variant='gradient' fw={800} >The Collection</Text>

                <div className='py-12'>
                    <RegisterForm />
                </div>

                <Link href="/login" className='text-medium underline text-blue-600 text-center text-sm'>Do you have an account? log in</Link>
            </Card>
        </div>
    )
}

export default SignUpPage
