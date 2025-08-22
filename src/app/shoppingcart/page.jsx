"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import CartCard from "@/components/CartCard";
import React from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
export default function page() {
  // 1. Define your form.
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="lg:w-[80%]  mx-auto flex flex-col p-4 md:px-8 py-8 lg:px-0 lg:py-12">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="">
          <h1 className="text-2xl text-bold">Shopping Cart</h1>
          <CartCard />
          <CartCard />
        </div>
        <div className="border border-gray-200 rounded-xl  p-8">
          <h1 className="text-base font-bold mb-6">Order Summary</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="discountCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discount code / Promo code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Code"
                        {...field}
                        className="py-6 px-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your bonus card number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Card Number"
                        {...field}
                        className="py-6 px-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-4">
                <div className="text-base flex justify-between font-semibold">
                  <div>Subtotal</div>
                  <div> $2347</div>
                </div>
                <div className="text-base flex justify-between ">
                  <div>Estimated Tax</div>
                  <div className="font-semibold">$50</div>
                </div>{" "}
                <div className="text-base flex justify-between font-medium">
                  <div>Estimated shipping & Handling</div>
                  <div className="font-semibold">$29</div>
                </div>
                <div className="text-base flex justify-between font-semibold">
                  <div>Total</div>
                  <div>$2426</div>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
