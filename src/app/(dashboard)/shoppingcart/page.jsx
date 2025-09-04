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
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart.cart);
  const allProducts = useSelector((state) => state.products.products);
  const cartProductsDetails = cart.map((cartProduct) => {
    const productDetails = allProducts.find(
      (currentProduct) => cartProduct?.productId === currentProduct?._id
    );
    return {
      ...productDetails,
      quantity: cartProduct?.quantity,
    };
  });
  const totalPrice = cartProductsDetails.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className="lg:w-[80%]  mx-auto flex flex-col p-4 md:px-8 py-8 lg:px-0 lg:py-12">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="">
          <h1 className="text-2xl text-bold">Shopping Cart</h1>
          {cartProductsDetails.map((product, index) => {
            return <CartCard product={product} key={index} />;
          })}
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
                  <div> ${(totalPrice - totalPrice * 0.15).toFixed(2)}</div>
                </div>
                <div className="text-base flex justify-between ">
                  <div>Estimated Tax</div>
                  <div className="font-semibold">
                    ${(totalPrice * 0.05).toFixed(2)}
                  </div>
                </div>{" "}
                <div className="text-base flex justify-between font-medium">
                  <div>Estimated shipping & Handling</div>
                  <div className="font-semibold">
                    ${(totalPrice * 0.1).toFixed(2)}
                  </div>
                </div>
                <div className="text-base flex justify-between font-semibold">
                  <div>Total</div>
                  <div>${totalPrice}</div>
                </div>
              </div>
              <Link href="order">
                <Button type="submit" className="w-full py-7 cursor-pointer">
                  Checkout
                </Button>
              </Link>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
