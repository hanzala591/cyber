import React from "react";

export default function ProductGallery({productUrl}) {
  return (
    <img
      src={productUrl}
      className="lg:size-20 size-16"
      alt=""
    />
  );
}
