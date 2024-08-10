"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm, Form, Controller } from "react-hook-form"
import toast from "react-hot-toast";
import { registerSchema, RegisterSchema } from "../model/register";
import { createAccount } from "../api/signup";
import { useRouter } from "next/navigation";



function RegisterForm() {
    const router = useRouter();

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


    async function onSubmit(values: RegisterSchema) {

        const response = await createAccount(values)

        if (response.success) {
            toast.success("User created successfully!! 😉")
            router.push("/")
        } else {
            toast.error(response.error ?? "")
        }


    }
}

export default RegisterForm
