"use client";
import BreadCrum from "@/components/BreadCrum";
import React, { useState } from "react";
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
  return (
    <div className="w-full">
      <div className="lg:w-[80%] mx-auto flex flex-col p-4 md:px-8 lg:px-0 py-6">
        <BreadCrum />
        <div className="grid grid-cols-[25%_1fr] gap-6">
          <FilterComponent setFilterItems={setFilterItems} />
          <div className="">
            <div className="flex justify-between items-center mb-4">
              <p className="text-base flex items-center justify-center">
                Selected Products: {"   "}
                <span className="font-semibold text-xl"> 85</span>
              </p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="By rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <ProductsComponent columns={3} />

            {/* Pagination */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
