import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="lg:w-[80%] mx-auto flex flex-col p-4 md:px-8 py-8 lg:px-0 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[45%_1fr_1fr] gap-10 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-extrabold  tracking-wide text-2xl">
              cyber
            </Link>
            <p>
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li className="font-semibold cursor-pointer text-xl">Services</li>
              <li className="cursor-pointer">Bonus program</li>
              <li className="cursor-pointer">Gift cards</li>
              <li className="cursor-pointer">Credit and payment</li>
              <li className="cursor-pointer">Service contracts</li>
              <li className="cursor-pointer">Non-cash account</li>
              <li className="cursor-pointer">Payment</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li className="font-semibold cursor-pointer text-xl">
                Assistance to the buyer
              </li>
              <li className="cursor-pointer">Find an order</li>
              <li className="cursor-pointer">Terms of delivery</li>
              <li className="cursor-pointer">Exchange and return of goods</li>
              <li className="cursor-pointer">Guarantee</li>
              <li className="cursor-pointer">Frequently asked questions</li>
              <li className="cursor-pointer">Terms of use of the site</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-3 md:gap-8 mt-4 justify-center md:justify-start">
          <Twitter />
          <Facebook />
          <Instagram />
          <Linkedin />
        </div>
      </div>
    </footer>
  );
}
