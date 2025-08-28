"use client";
import { BadgeDollarSign, MapPin, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export default function OrderStep() {
  const path = usePathname();
  const currentStep = path.split("/").length - 1;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 mb-12">
      {/* First */}
      <div
        className={`flex items-center gap-2 ${
          currentStep === 1 ? " text-black" : " text-gray-400"
        } ${currentStep > 1 && "hidden lg:flex"}`}
      >
        <MapPin
          className={`${
            currentStep === 1 ? "bg-black" : " bg-gray-400"
          } text-white p-2 rounded-full  size-8`}
        />
        <div className="">
          <p className="font-semibold text-base">Step 1</p>
          <p className="font-semibold text-lg">Address</p>
        </div>
      </div>

      {/* Second */}
      <div
        className={`flex items-center gap-2 ${
          currentStep === 2 ? " text-black" : " text-gray-400"
        }`}
      >
        <ShoppingCart
          className={`text-white p-2 size-8 rounded-full ${
            currentStep === 2 ? "bg-black" : "bg-gray-400"
          }`}
        />
        <div className="">
          <p className="font-semibold text-base">Step 2</p>
          <p className="font-semibold text-lg">Shipping</p>
        </div>
      </div>

      {/* Third */}
      <div
        className={`flex items-center gap-2 ${
          currentStep === 3 ? " text-black" : " text-gray-400"
        } ${currentStep === 1 && "hidden lg:flex"}`}
      >
        <BadgeDollarSign
          className={`text-white p-2 size-8 rounded-full ${
            currentStep === 3 ? "bg-black" : "bg-gray-400"
          }`}
        />
        <div>
          <p className="font-semibold text-base">Step 3</p>
          <p className="font-semibold text-lg">Payment</p>
        </div>
      </div>
    </div>
  );
}
