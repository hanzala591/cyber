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
import { Drawer, Button, Text } from "rizzui";
import FilterComponent from "@/components/FilterComponent";
import ProductsComponent from "@/components/ProductsComponent";

export default function Category() {
  const [filterItems, setFilterItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [lowestPrice, setLowestPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(4000);
  const categories = new Set(products?.map((product) => product.category));
  const [drawerSate, setDrawerState] = useState({
    isOpen: false,
    size: "full",
  });
  useEffect(() => {
    if (filterItems.length > 0) {
      let filtered = products?.filter((product) =>
        filterItems.includes(product?.category)
      );
      filtered = filtered?.filter(
        (product) =>
          product?.price > lowestPrice && product?.price < highestPrice
      );
      setFilterProducts(filtered);
    } else {
      setFilterProducts(products);
    }
  }, [filterItems, products, highestPrice, lowestPrice]);

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
          <div className="hidden lg:flex">
            <FilterComponent
              setFilterItems={setFilterItems}
              categories={categories}
            />
          </div>
          <div>
            <div className="flex gap-4 justify-between items-center mb-4">
              <p className="hidden text-base lg:flex items-center justify-center">
                Selected Products:{" "}
                <span className="font-semibold text-xl">
                  {filterProducts?.length}
                </span>
              </p>
              <div className="flex-1 lg:hidden">
                <Button
                  variant="outline"
                  onClick={() =>
                    setDrawerState((prevState) => ({
                      ...prevState,
                      isOpen: true,
                      size: "full",
                    }))
                  }
                  className="w-full text-left h-9 items-start justify-start"
                >
                  Filters
                </Button>
                <Drawer
                  isOpen={drawerSate.isOpen}
                  size={drawerSate.size}
                  onClose={() =>
                    setDrawerState((prevState) => ({
                      ...prevState,
                      isOpen: false,
                    }))
                  }
                >
                  <FilterComponent
                    setFilterItems={setFilterItems}
                    filterItems={filterItems}
                    categories={categories}
                    setDrawerState={setDrawerState}
                    lowestPrice={lowestPrice}
                    setLowestPrice={setLowestPrice}
                    highestPrice={highestPrice}
                    setHighestPrice={setHighestPrice}
                  />
                </Drawer>
              </div>
              <div className="flex-1 lg:flex-0">
                <Select className="w-full">
                  <SelectTrigger className="w-full">
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
            </div>
            <p className="lg:hidden text-base block my-2">
              Selected Products:{" "}
              <span className="font-semibold text-xl">
                {filterProducts?.length}
              </span>
            </p>
            <ProductsComponent columns={3} products={filterProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}
