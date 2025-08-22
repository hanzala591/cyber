"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";

const brands = [
  {
    id: "apple",
    label: "Apple",
  },
  {
    id: "samsung",
    label: "Samsung",
  },
  {
    id: "Xiaomi",
    label: "Xiaomi",
  },
  {
    id: "poco",
    label: "Poco",
  },
  {
    id: "Oppo",
    label: "Oppo",
  },
  {
    id: "documents",
    label: "Documents",
  },
];

export default function FilterComponent({ setFilterItems }) {
  return (
    <div className="hidden lg:flex">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">
            Brand
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {brands.map((brand, index) => {
              return (
                <div className="flex gap-2 items-center" key={index}>
                  <Checkbox
                    id={`${brand.id}`}
                    onCheckedChange={(e) => {
                      if (e === true) {
                        setFilterItems((prev) => {
                          return [...prev, brand.id];
                        });
                      } else {
                        setFilterItems((prev) => {
                          const val = prev.filter((value, index) => {
                            return brand.id !== value;
                          });
                          return val;
                        });
                      }
                    }}
                  />
                  <Label htmlFor={`${brand.id}`}>{brand.label}</Label>
                </div>
              );
            })}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">
            Battery capacity
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">
            Screen type
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">
            Screen diagonal
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">
            Protection class
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">
            Built-in memory
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance"></AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
