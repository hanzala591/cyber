import Link from "next/link";
import React from "react";

export default function CategoryCard({ path, name }) {
  return (
    <Link href="/products">
      <div className="w-[150px] h-[100px] flex items-center rounded-xl card justify-center bg-[#EDEDED]">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={path} className="size-10" />
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
}
