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

export default function FilterComponent({ setFilterItems, categories }) {
  return (
    <div className="hidden lg:flex">
      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-bold hover:no-underline">
            Category
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
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
                />
                <Label htmlFor={`cat-${index}`}>{category}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
