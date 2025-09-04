"use client";
import { Heart } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ShopingCard({ id, name, category, image, price }) {
  return (
    <div className="px-4 py-6 card rounded-2xl flex flex-col justify-center items-center bg-[#F6F6F6]">
      <Heart className=" self-end cursor-pointer" />
      <img className="size-44 my-4" src={image} />
      <p className="font-bold">{name}</p>
      <p className="font-bold py-2">${price}</p>
      <Link
        href={{
          pathname: `/products/${id}`,
        }}
        className="w-2/3 my-2"
      >
        <Button className="w-full cursor-pointer py-5">Buy Now</Button>
      </Link>
    </div>
  );
}
