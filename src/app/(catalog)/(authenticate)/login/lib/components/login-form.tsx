"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm, Form, Controller } from "react-hook-form"
import toast from "react-hot-toast";
import { loginSchema, LoginSchema } from "../model/login";
import { login } from "../api/login";
import { useRouter } from "next/navigation";



function LoginForm() {

    const router = useRouter();

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


    async function onSubmit(values: LoginSchema) {
        const response = await login(values)

        if (response.success) {
            toast.success("User successfully log in")
            router.push("/")
        } else {
            toast.error(response.error ?? "")
        }
    }
}

export default LoginForm
