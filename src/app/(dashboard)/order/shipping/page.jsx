"use client";
import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedAddress,
  setSelectedShipmentMethod,
} from "@/redux/slices/orderSlice";
export default function () {
  useEffect(() => {
    dispatch(setSelectedShipmentMethod("freeshipment"));
  }, []);

  const selectedShipmentMethod = useSelector(
    (state) => state.order.order.selectedShipmentMethod
  );
  const dispatch = useDispatch();
  const onChangeShipment = (e) => {
    dispatch(setSelectedShipmentMethod(e));
  };
  return (
    <div>
      <div>
        <h6 className="text-xl font-semibold mb-5">Shipment Method</h6>
      </div>
      <RadioGroup defaultValue="freeshipment" onValueChange={onChangeShipment}>
        <div className="flex gap-4 flex-col">
          {/* Free Shipment */}
          <div className="flex flex-col lg:flex-row gap-3 rounded-xl cursor-pointer border border-gray-300 p-6">
            <RadioGroupItem
              value="freeshipment"
              id="freeshipment"
              className="mt-1 selection:text-red-600"
            />
            <Label htmlFor="freeshipment" className="w-full cursor-pointer">
              <div className="flex justify-between w-full text-base">
                <div className="flex flex-col lg:flex-row gap-3">
                  <p> Free</p>
                  <p>Regularly Shipment</p>
                </div>
                <div>17 oct 2023</div>
              </div>
            </Label>
          </div>
          {/* Fast Shipment */}
          <div className="flex flex-col lg:flex-row gap-3 rounded-xl cursor-pointer border border-gray-300 p-6">
            <RadioGroupItem
              value="fastshipment"
              id="fastshipment"
              className="mt-1 selection:text-red-600"
            />
            <Label htmlFor="fastshipment" className="w-full cursor-pointer">
              <div className="flex justify-between w-full text-base">
                <div className="flex flex-col lg:flex-row gap-3">
                  <p>$8.50</p>
                  <p>Get your delivery as soon as possible</p>
                </div>
                <div>1 Oct, 2023</div>
              </div>
            </Label>
          </div>
          {/* Date Shipment */}
          <div className="flex flex-col lg:flex-row gap-3 rounded-xl cursor-pointer border border-gray-300 p-6">
            <RadioGroupItem
              value="dateshipment"
              id="dateshipment"
              className="mt-1 selection:text-red-600"
            />
            <Label htmlFor="dateshipment" className="w-full cursor-pointer">
              <div className="flex justify-between w-full text-base">
                <div className="flex flex-col lg:flex-row gap-3">
                  <p>Schedule</p>
                  <p>Pick a date when you want to get your delivery</p>
                </div>
                <div>17 oct 2023</div>
              </div>
            </Label>
          </div>
        </div>
      </RadioGroup>
      <div className="flex gap-3 mt-10 mb-4 justify-end">
        <Link href="/order">
          <Button
            variant="transparentwhite"
            className="px-12 py-6 text-black font-semibold"
          >
            Back
          </Button>
        </Link>
        {selectedShipmentMethod ? (
          <Link href="/order/shipping/payment">
            <Button className="px-12 py-6 font-semibold rounded">Next</Button>
          </Link>
        ) : (
          <Button className="px-12 py-6 font-semibold rounded" disabled>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
