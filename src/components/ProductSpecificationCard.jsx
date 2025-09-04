import React from "react";

export default function ProductSpecificationCard({ label, value, url }) {
  return (
    <div className="rounded bg-[#F4F4F4] text-center py-4">
      <div className="flex gap-3 ml-4">
        <img src={url} alt="" />
        <div className="flex flex-col">
          <p className="text-sm text-left text-[#A7A7A7]">{label}</p>
          <p className="text-sm text-left text-[#4E4E4E]">{value}</p>
        </div>
      </div>
    </div>
  );
}
