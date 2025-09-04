"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { clearOrder } from "@/redux/slices/orderSlice";
import { clearCart } from "@/redux/slices/cartSlice";

const formSchema = z.object({
  cardholdername: z.string().min(3, {
    message: "Enter Valid card holder name",
  }),
  cardnumber: z.string().min(16, {
    error: "Enter Valid Card number.",
  }),
  expiraydate: z.string().min(3, {
    error: "Enter Valid Card number.",
  }),
  cvv: z.string().min(3, {
    error: "Enter Valid CVV number.",
  }),
});

export default function PaymentPage() {
  const cart = useSelector((state) => state.cart.cart);
  const order = useSelector((state) => state.order.order);
  const allProducts = useSelector((state) => state.products.products);
  const userId = useSelector((state) => state.auth?.user?._id);
  const router = useRouter();
  const dispatch = useDispatch();
  const cartProducts = cart.map((cartProduct, index) => {
    const productDetails = allProducts.find(
      (product) => product?._id === cartProduct?.productId
    );
    return {
      ...productDetails,
      quantity: cartProduct?.quantity,
    };
  });
  const totalPrice = cartProducts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  async function onSubmit(values) {
    const res = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        products: cart,
        address: {
          street: order?.selectedAddress?.street,
          city: order?.selectedAddress?.city,
          number: order.selectedAddress?.number,
        },
        shipmentMethod: order?.selectedShipmentMethod,
        payment: values,
        totalprice: totalPrice,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      router.replace("/");
      dispatch(clearCart());
      dispatch(clearOrder());
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-36">
        <div className="border rounded-xl px-6 py-8 hidden lg:flex flex-col">
          <p className="font-semibold text-xl mb-6">Summary</p>
          <div className="flex flex-col gap-4">
            {cartProducts?.map((product, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-4  items-center p-4 bg-[#F6F6F6] rounded-2xl"
                >
                  <img src={product?.image} alt="" className="w-10 h-10" />
                  <div className="flex w-full justify-between items-center">
                    {" "}
                    <p className="text-base font-medium">{product?.name}</p>
                    <p className="font-bold text-base">
                      ${product?.price * product?.quantity}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <p className="text-sm font-medium">Address</p>
            <p className="text-base font-normal">
              {order?.selectedAddress?.city} {order?.selectedAddress?.street}
            </p>
          </div>
          <div className="flex flex-col gap-1 my-4">
            <p className="text-sm font-medium">Shipment method</p>
            <p className="text-base font-normal uppercase">
              {order?.selectedShipmentMethod}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="text-base font-medium">Subtotal</p>
              <p className="text-base font-medium">
                ${(totalPrice - totalPrice * 0.15).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-base font-normal">Estimated Tax</p>
              <p className="text-base font-medium">
                ${(totalPrice * 0.05).toFixed(2)}
              </p>
            </div>{" "}
            <div className="flex justify-between">
              <p className="text-base font-normal">
                Estimated shipping & Handling
              </p>
              <p className="text-base font-medium">
                ${(totalPrice * 0.1).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-base font-medium">Total</p>
              <p className="text-base font-medium">${totalPrice}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <p className="font-bold text-xl">Payment</p>
            <div className="w-full lg:w-fit flex gap-14">
              <div className="text-sm font-semibold border-b-[2px] cursor-pointer border-black">
                Credit Card
              </div>
              <div className="text-sm font-base cursor-pointer">PayPal</div>
              <div className="text-sm font-base cursor-pointer">
                PayPal Credit
              </div>
            </div>
          </div>

          {/* Credit Card */}
          <div className="my-6 bg-black p-5 rounded-2xl h-[190px] w-[337px]">
            <div className="flex flex-col gap-10">
              <div className="flex">
                <img src="/img/simcard.svg" alt="" />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-2 text-white">
                  <p>2321</p>
                  <p>5333</p>
                  <p>9543</p>
                  <p>2362</p>
                </div>
                <div className="flex justify-between z-10">
                  <p className="text-[#AEAEAE] text-sm font-medium">
                    Cardholder
                  </p>
                  <img src="/img/Mastercard.svg" className="w-8 h-8" alt="" />
                </div>
              </div>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="cardholdername"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Cardholder Name"
                        {...field}
                        className="py-6 px-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cardnumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Card Number"
                        {...field}
                        className="py-6 px-6"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="expiraydate"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Exp. Date"
                          className="py-6 px-6"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="CVV"
                          {...field}
                          className="py-6 px-6"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-3 mt-10 mb-4 justify-end">
                <Link href="/order/shipping">
                  <Button
                    variant="transparentwhite"
                    className="px-12 py-6 text-black font-semibold"
                  >
                    Back
                  </Button>
                </Link>
                <Button
                  type="submit"
                  className="px-12 py-6 font-semibold rounded"
                >
                  Pay
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
