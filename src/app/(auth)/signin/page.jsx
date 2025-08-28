"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signinSchema } from "@/lib/validation";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { signinUser } from "@/redux/slices/authSlice";

export default function SignIn() {
  const currentPath = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useForm({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      username: "",
    },
  });

  async function onSubmit({ email, password }) {
    dispatch(signinUser({ email, password }));
    router.push("/");
  }
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="lg:w-[30%] w-[90%]">
        <div className="w-full text-white grid grid-cols-2 items-center justify-center gap-4 p-1.5 mb-6 bg-gray-600 rounded-lg">
          <Link href="/signin">
            <div
              className={
                currentPath.includes("signin")
                  ? `bg-black text-center shadow rounded-lg p-2 cursor-pointer`
                  : "cursor-pointer text-center"
              }
            >
              SignIn
            </div>
          </Link>
          <Link href="/signup">
            <div
              className={
                currentPath.includes("signup")
                  ? `bg-black text-center shadow rounded p-2 cursor-pointer`
                  : "cursor-pointer text-center"
              }
            >
              SignUp
            </div>
          </Link>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="py-5 px-4"
                      placeholder="rai@gmail.com"
                      {...field}
                    />
                  </FormControl>

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
                    <Input
                      className="py-5 px-4"
                      placeholder="Password must be 6 digits"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full cursor-pointer py-5 px-4">
              SignIn
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
