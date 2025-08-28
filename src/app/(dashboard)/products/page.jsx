"use client";
import BreadCrum from "@/components/BreadCrum";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import FilterComponent from "@/components/FilterComponent";
import ProductsComponent from "@/components/ProductsComponent";

export default function Category() {
  const [filterItems, setFilterItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const categories = new Set(products.map((product) => product.category));

  useEffect(() => {
    if (filterItems.length > 0) {
      const filtered = products.filter((product) =>
        filterItems.includes(product.category)
      );
      setFilterProducts(filtered);
    } else {
      setFilterProducts(products);
    }
  }, [filterItems, products]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setFilterProducts(res.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full">
      <div className="lg:w-[80%] mx-auto flex flex-col p-4 md:px-8 lg:px-0 py-6">
        <BreadCrum />
        <div className="grid lg:grid-cols-[25%_1fr] gap-6 w-full">
          <FilterComponent
            setFilterItems={setFilterItems}
            categories={categories}
          />
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-base flex items-center justify-center">
                Selected Products:{" "}
                <span className="font-semibold text-xl">
                  {filterProducts.length}
                </span>
              </p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="By rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <ProductsComponent columns={3} products={filterProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}
