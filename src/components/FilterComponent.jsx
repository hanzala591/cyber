"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";
import { ArrowLeft } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function FilterComponent({
  setFilterItems,
  filterItems,
  categories,
  setDrawerState,
  lowestPrice,
  setLowestPrice,
  highestPrice,
  setHighestPrice,
}) {
  const [low, setLow] = useState(lowestPrice);
  const [hight, setHight] = useState(highestPrice);
  return (
    <div className="px-4 lg:px-0 w-full">
      <div className="lg:hidden flex gap-1.5 items-center pt-4">
        <ArrowLeft
          onClick={() => {
            setDrawerState((prevState) => ({
              ...prevState,
              isOpen: false,
            }));
          }}
        />
        <div className="text-2xl font-medium">Filters</div>
      </div>
      <div className="lg:hidden flex gap-1.5 items-center pt-0">
        <Accordion
          type="single"
          collapsible
          className="w-full pt-3"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg py-1 font-bold hover:no-underline">
              Price{" "}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-1 text-balance ">
              <div
                className="flex justify-between px-1
              "
              >
                <span className="font-normal text-sm text-gray-400">From</span>
                <span className="font-normal text-sm text-gray-400">To</span>
              </div>
              <div className="flex justify-between items-center gap-24 px-0.5">
                <Input
                  placeholder="10"
                  type="number"
                  onChange={(event) => setLow(event.target.value)}
                  value={low}
                />
                -
                <Input
                  placeholder="30"
                  type="number"
                  onChange={(event) => setHight(event.target.value)}
                  value={hight}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full "
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg py-1 font-bold hover:no-underline">
            Category{" "}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1 text-balance ">
            {[...categories].map((category, index) => (
              <div className="flex gap-2 items-center" key={index}>
                <Checkbox
                  id={`cat-${index}`}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFilterItems((prev) => [...prev, category]);
                    } else {
                      setFilterItems((prev) =>
                        prev.filter((item) => item !== category)
                      );
                    }
                  }}
                  checked={filterItems?.includes(category)}
                />
                <Label htmlFor={`cat-${index}`}>{category}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        className="w-full mt-4 lg:hidden"
        onClick={() => {
          setHighestPrice(hight);
          setLowestPrice(low);
        }}
      >
        Apply
      </Button>
    </div>
  );
}
