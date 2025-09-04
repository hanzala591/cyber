"use client";
import {
  addQuantity,
  removeQuantity,
  removeToCart,
} from "@/redux/slices/cartSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartCard({ product }) {
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(removeToCart(product._id));
  };
  return (
    <div className="flex  items-center py-5 border-b border-b-gray-200 lg:gap-3 gap-1">
      <img
        src={product ? product?.image : "/img/samsungsvg.svg"}
        className="lg:size-28 size-24"
        alt=""
      />
      <div className="flex w-full lg:flex-row lg:justify-between flex-col lg:items-center lg:gap-4 gap-2">
        <div className="flex flex-col lg:gap-4 gap-2">
          <p className="text-base font-semibold">{product?.name}</p>
          <p className="text-sm font-normal">#{product?._id?.slice(0, 6)}</p>
        </div>
        <div className="flex   items-center gap-4 ">
          <div
            className="text-2xl cursor-pointer"
            onClick={() => {
              dispatch(
                removeQuantity({
                  productId: product?._id,
                  quantity: product?.quantity,
                })
              );
            }}
          >
            -
          </div>
          <div
            className="p-2 border border-gray-200 text-base h-8 w-10 flex items-center justify-center
        "
          >
            {product?.quantity}
          </div>
          <div
            className="text-2xl cursor-pointer"
            onClick={() => {
              dispatch(
                addQuantity({
                  productId: product?._id,
                  quantity: product?.quantity,
                })
              );
            }}
          >
            +
          </div>
          <div className="text-xl font-medium mx-4 lg:mx-0">
            ${product?.price}
          </div>
          <div className="text-xl cursor-pointer" onClick={removeItem}>
            X
          </div>
        </div>
      </div>
    </div>
  );
}
