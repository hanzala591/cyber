import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div>
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
                <Pencil className="self-center cursor-pointer font-black fill-black" />
              </div>
              <div className="self-center ml-3 text-2xl cursor-pointer">X</div>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="border my-4 border-dotted relative">
        <div className="bg-black flex items-center justify-center cursor-pointer text-white rounded-full w-6 h-6 text-xl absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2">
          +
        </div>
      </div>
      <div className="flex items-center my-3 text-sm justify-center">
        Add New Address
      </div>
      <div className="flex gap-3 mt-10 mb-4 justify-end">
        <Link href="/order">
          <Button
            variant="transparentwhite"
            className="px-12 py-6 text-black font-semibold"
          >
            Back
          </Button>
        </Link>
        <Link href="/order/shipping">
          <Button className="px-12 py-6 font-semibold rounded">Next</Button>
        </Link>{" "}
      </div>
    </div>
  );
}
