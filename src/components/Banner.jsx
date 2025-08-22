import React from "react";
import { Button } from "./ui/button";

export default function Banner({
  bgColor,
  path,
  title,
  description,
  textColor,
}) {
  return (
    <div className={` py-8 px-4`} style={{ backgroundColor: bgColor }}>
      <div className="flex justify-center lg:items-start items-center flex-col gap-5">
        <img src={path} className="size-80" alt="" />
        <h1 className="text-[33px]" style={{ color: textColor }}>
          {title}
        </h1>
        <div className="text-[#909090]">{description}</div>
        <Button
          variant={
            textColor !== "black" ? "transparentwhite" : "transparentblack"
          }
          className="px-8 py-5"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}
