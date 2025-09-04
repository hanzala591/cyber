"use client";
import React from "react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "@/redux/slices/cartSlice";
import { useParams } from "next/navigation";

export default function CartControls() {
  const dispatch = useDispatch();
  const param = useParams();
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      <Button
        variant="transparentwhite"
        className="w-full py-7 text-black"
        onClick={() => {
          dispatch(removeToCart(param?.id));
        }}
      >
        Add to Wishlist
      </Button>
      <Button
        className="w-full py-7 cursor-pointer"
        onClick={() => {
          dispatch(addToCart(param?.id));
        }}
      >
        Add to Card
      </Button>
    </div>
  );
}
