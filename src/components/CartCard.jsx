import React from "react";

export default function CartCard() {
  return (
    <div className="flex items-center py-5 border-b border-b-gray-200 lg:gap-3 gap-1">
      <img src="/img/samsungsvg.svg" className="lg:size-28 size-24" alt="" />
      <div className="flex w-full lg:flex-row flex-col lg:items-center lg:gap-4 gap-2">
        <div className="flex flex-col lg:gap-4 gap-2">
          <p className="text-base font-semibold">AirPods Max Silver</p>
          <p className="text-sm font-normal">#25139526913984</p>
        </div>
        <div className="flex flex-1 w-full items-center gap-4 ">
          <div className="text-2xl cursor-pointer">-</div>
          <div
            className="p-2 border border-gray-200 text-base h-8 w-10 flex items-center justify-center
        "
          >
            1
          </div>
          <div className="text-2xl cursor-pointer">+</div>
          <div className="text-xl font-medium mx-4 lg:mx-0">$1399</div>
          <div className="text-xl cursor-pointer">X</div>
        </div>
      </div>
    </div>
  );
}
