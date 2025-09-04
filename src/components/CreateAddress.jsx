"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSelector } from "react-redux";
export default function CreateAddress({ setAllAddress }) {
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const address = {
      userId: user._id,
      city,
      street,
      number,
    };
    const res = await fetch("/api/address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(address),
    });
    const data = await res.json();
    if (res.ok) {
      setAllAddress(data.address);
      setCity("");
      setStreet("");
      setNumber("");
    }
  };

  return (
    <div className="items-center">
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <div className="border my-4 border-dotted relative">
              <div className="bg-black flex items-center justify-center cursor-pointer text-white rounded-full w-6 h-6 text-xl absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2">
                +
              </div>
            </div>
            <div className="flex items-center my-3 text-sm justify-center">
              Add New Address
            </div>{" "}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Your Address</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="street">Street</Label>
              <Input
                id="street"
                placeholder="Enter your street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="number">Number</Label>
              <Input
                id="number"
                type="number"
                placeholder="Enter house number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <DialogFooter>
              <Button type="submit">Create Address</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
