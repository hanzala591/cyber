"use client";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { NavInput } from "./ui/NavInput";

function Navbar() {
  return (
    <nav className="shadow border-b">
      <div className="lg:w-[80%] mx-auto flex p-4 md:px-8 md:py-4 lg:px-0 lg:py-4">
        <div className="flex gap-4 items-center justify-between w-full">
          <h3 className="font-bold ">cyber</h3>
          <div className="relative  hidden lg:block w-full max-w-sm lg:mr-5">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <NavInput type="text" placeholder="Search" className="pl-9" />
          </div>
        </div>
        <div className="hidden lg:flex gap-5 justify-between items-center w-full">
          <div className="flex gap-5 font-semibold">
            <Link href="/" className="text-black">
              Home
            </Link>
            <Link href="/about" className="text-gray-600">
              About
            </Link>
            <Link href="/contact-us" className="text-gray-600">
              Contact Us
            </Link>
            <Link href="/blog" className="text-gray-600">
              Blog
            </Link>
          </div>

          <div className="flex gap-5">
            <Heart />
            <ShoppingCart />
            <User />
          </div>
        </div>
        <div>
          <img
            src="/img/Burger.svg"
            className="block lg:hidden"
            width={50}
            height={50}
            alt=""
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
