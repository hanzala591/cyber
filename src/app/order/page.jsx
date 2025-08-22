import OrderStep from "@/components/OrderStep";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Pencil } from "lucide-react";

export default function page() {
  return (
    <div className="lg:w-[80%] mx-auto flex flex-col p-4 md:px-8 py-8 lg:px-0 lg:py-12">
      <OrderStep />
      <div className="py-8">
        <h6 className="text-xl font-semibold mb-5">Select Address</h6>
        <div className="grid my-2 ">
          <RadioGroup defaultValue="option-one">
            <div className="flex gap-2 bg-[#F6F6F6] p-4 rounded">
              <RadioGroupItem
                value="option-one"
                id="option-one"
                className="mt-1"
              />
              <div className="flex-1 flex justify-between">
                <Label htmlFor="option-one">
                  <div className="text-xl">
                    <div>
                      <p>2118 Thornridge</p>
                    </div>
                    <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                    <p>(209) 555-0104</p>
                  </div>
                </Label>
                <Pencil className="self-center cursor-pointer" />
              </div>
              <div className="self-center ml-3 text-2xl cursor-pointer">X</div>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
