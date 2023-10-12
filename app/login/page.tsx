"use client";

import { useState } from "react";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export default function LoginPage() {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const [loading, setLoading] = useState(false);

    const onLogin = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", values);
            toast.success("Login success");
            router.push("/profile");
        } catch (error: any) {
            toast.error(error?.response?.data?.error || error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#5D5DF5] text-white">
            <Toaster />
            <h1>{loading ? "Processing" : "Login"}</h1>
            <hr />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onLogin)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email" {...field} />
                                </FormControl>
                                <FormDescription className="text-white text-xs">
                                    Please enter your email.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="password" {...field} type="password" />
                                </FormControl>
                                <FormDescription className="text-white text-xs">
                                    Enter your password minimum of 8 characters long
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                    <Link className="mt-4 mx-4 border p-2" href="/signup">Signup</Link>
                </form>
            </Form>
        </div>
    )
}