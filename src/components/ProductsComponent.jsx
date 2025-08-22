"use client";
import React, { useEffect, useState } from "react";
import ShopingCard from "./ShopingCard";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";

export default function ProductsComponent({ displayedProducts, columns }) {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  console.log(products);
  useEffect(() => {
    let products = [];
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/products");
      const productsres = await res.json();
      products = productsres.products;
    }
    fetchData();
  }, []);

  return (
    <div
      className={`grid grid-cols-2  ${
        columns === 3 ? "md:grid-cols-3" : "lg:grid-cols-4"
      } gap-4`}
    >
      {products ? (
        products.map((product, index) => {
          if (index < displayedProducts || index < products.length) {
            return (
              <ShopingCard
                key={index}
                name={product.name}
                category={product.category}
                image={product.image}
                price={product.price}
                id={product._id}
              />
            );
          }
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}
