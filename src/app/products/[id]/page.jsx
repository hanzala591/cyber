"use client";
import BreadCrum from "@/components/BreadCrum";
import { useParams, usePathname } from "next/navigation";
import React from "react";

export default function page() {
  const params = usePathname().split("/");

  return (
    <div className="w-full">
      <div className="lg:w-[80%] mx-auto flex flex-col p-4 md:px-8 lg:px-0 py-6">
        <BreadCrum pathName={[]} />
        <div className="lg:p-8">
          {/* <img src={image} alt="" className="size-[516px]" /> */}
        </div>
      </div>
    </div>
  );
}
