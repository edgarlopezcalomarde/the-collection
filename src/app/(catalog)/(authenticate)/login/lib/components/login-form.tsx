"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm, Form, Controller } from "react-hook-form"
import toast from "react-hot-toast";
import { z } from "zod";


const loginSchema = z.object({
    username: z.string(),
    password: z.string()
})

type LoginSchema = z.infer<typeof loginSchema>


function LoginForm() {

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
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


            <Button type="submit" className="w-full">Log In</Button>
        </Form>
    )


    function onSubmit(values: LoginSchema) {
        console.log(values)
    }
}

export default LoginForm
