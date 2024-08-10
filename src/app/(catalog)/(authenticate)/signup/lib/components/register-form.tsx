"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm, Form, Controller } from "react-hook-form"
import toast from "react-hot-toast";
import { z } from "zod";


const registerSchema = z.object({
    username: z.string(),
    password: z.string()
})

type RegisterSchema = z.infer<typeof registerSchema>


function RegisterForm() {

    const form = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    return (
        <Form
            control={form.control}
            onSubmit={(e) => onSubmit(e.data)}
            onError={(e) => toast.error("Wrong")}
            className="flex flex-col gap-4"
        >
            <Controller
                name="username"
                control={form.control}
                render={({ field }) => {
                    return <TextInput {...field} label="Username:" />
                }}
            />

            <Controller
                name="password"
                control={form.control}
                render={({ field }) => {
                    return <PasswordInput {...field} label="Password:" />
                }}
            />

            <Button type="submit" className="w-full">Create Account</Button>
        </Form>
    )


    function onSubmit(values: RegisterSchema) {
        console.log(values)
    }
}

export default RegisterForm
