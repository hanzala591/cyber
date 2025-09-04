"use client";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NavInput } from "./ui/NavInput";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "@/redux/slices/authSlice";
import { setProducts } from "@/redux/slices/productsSlice";

function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(setProducts(res.products));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const router = useRouter();
  return (
    <nav className="shadow border-b">
      <div className="lg:w-[80%] mx-auto flex p-4 md:px-8 md:py-4 lg:px-0 lg:py-4">
        <div className="flex gap-4 items-center justify-between w-full">
          <Link href="/">
            {" "}
            <h3 className="font-bold ">cyber</h3>
          </Link>
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
            <Link href="/blogs" className="text-gray-600">
              Blog
            </Link>
          </div>

          <div className="flex gap-5">
            <Heart />
            <Link href="/shoppingcart">
              <ShoppingCart />
            </Link>
            <Popover>
              <PopoverTrigger asChild>
                <User />
              </PopoverTrigger>
              <PopoverContent className="w-56 flex flex-col gap-3">
                <Button
                  variant="destructive"
                  className="cursor-pointer"
                  onClick={() => {
                    fetch("/api/auth/signout", {
                      method: "POST",
                    });
                    localStorage.removeItem("user");
                    dispatch(signout());
                    router.replace("/signin");
                  }}
                >
                  Logout
                </Button>
              </PopoverContent>
            </Popover>
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
