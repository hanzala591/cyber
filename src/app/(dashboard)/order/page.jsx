"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import CreateAddress from "@/components/CreateAddress";
import { setSelectedAddress } from "@/redux/slices/orderSlice";

export default function page() {
  const user = useSelector((state) => state.auth.user);
  const [allAddress, setAllAddress] = useState([]);
  const selectedAddress = useSelector(
    (state) => state.order.order.selectedAddress
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchAddress() {
      const res = await fetch(`/api/address/${user._id}`);
      const data = await res.json();
      dispatch(setAllAddress(data.address));
    }
    fetchAddress();
  }, []);
  const onChangeAddress = (value) => {
    dispatch(setSelectedAddress(allAddress[value]));
  };
  const deleteAddress = async (addressId) => {
    const res = await fetch(`/api/address/${addressId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const data = await res.json();
      setAllAddress(data.address);
    }
  };
  return (
    <div>
      <div>
        <h6 className="text-xl font-semibold mb-5">Select Address</h6>
        <div className="grid my-2 ">
          <RadioGroup onValueChange={onChangeAddress}>
            <div className="flex flex-col gap-4">
              {allAddress &&
                allAddress.map((address, index) => {
                  return (
                    <div
                      className="flex gap-3 bg-[#F6F6F6] p-4 rounded"
                      key={index}
                    >
                      <RadioGroupItem
                        value={index}
                        id={index}
                        className="mt-1"
                      />
                      <div className="flex-1 flex justify-between">
                        <Label htmlFor="option-one">
                          <div className="text-xl">
                            <div>
                              <p>{address.city}</p>
                            </div>
                            <p>{address.street}</p>
                            <p>{address.number}</p>
                          </div>
                        </Label>
                        <div className="flex gap-2">
                          <Pencil className="self-center cursor-pointer font-black fill-black" />
                          <div
                            className="self-center ml-3 text-2xl cursor-pointer"
                            onClick={() => {
                              deleteAddress(address._id);
                            }}
                          >
                            X
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="w-full">
        <CreateAddress setAllAddress={setAllAddress} />
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
        {selectedAddress ? (
          <Link href="/order/shipping">
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
