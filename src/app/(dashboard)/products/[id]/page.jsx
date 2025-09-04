import BreadCrum from "@/components/BreadCrum";
import CartControls from "@/components/CartControls";
import ProductGallery from "@/components/ProductGallery";
import ProductsComponent from "@/components/ProductsComponent";
import ProductSpecificationCard from "@/components/ProductSpecificationCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SPECIFICATIONS } from "@/constants/category";
import Product from "@/models/Product";
import { ChevronDown } from "lucide-react";
import React from "react";

export default async function page({ params }) {
  const response = await fetch("http://localhost:3000/api/products");
  const productsData = await response.json();
  const products = productsData.products;
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const product = data.product;
  return (
    <div className="w-full">
      <div className="lg:w-[80%] mx-auto flex flex-col p-4 lg:px-0 py-6">
        <BreadCrum product={product} />
        <div className="lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-[15%_80%] gap-8 lg:items-center justify-center">
              <div className="flex order-2 lg:order-1 flex-row items-center justify-center lg:flex-col gap-4">
                <ProductGallery
                  productUrl={product ? product?.image : "/img/product1.svg"}
                />
                <ProductGallery
                  productUrl={product ? product?.image : "/img/product1.svg"}
                />
                <ProductGallery
                  productUrl={product ? product?.image : "/img/product1.svg"}
                />
                <ProductGallery
                  productUrl={product ? product?.image : "/img/product1.svg"}
                />
              </div>
              <img
                src={product ? product?.image : "/img/product5.svg"}
                className="lg:size-[516px] size-[330px] order-1 lg:order-2"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-4xl">
                {product ? product?.name : "Apple iPhone 14 Pro Max"}
              </h1>
              <div className="flex gap-4 items-center ">
                <p className="font-medium text-3xl">
                  {product ? `${product?.price}` : "$1399"}
                </p>
                <p className="font-normal text-2xl text-[#A0A0A0] line-through">
                  {product ? `${product?.price + product.discount}` : "$1499"}
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <p>Select color :</p>
                <div className="w-8 h-8 bg-black rounded-full"></div>
                <div className="w-8 h-8 bg-purple-800 rounded-full"></div>{" "}
                <div className="w-8 h-8 bg-red-900 rounded-full"></div>{" "}
                <div className="w-8 h-8 bg-yellow-800 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center ">
                <div className="border border-gray-500 py-4 rounded-lg text-gray-500">
                  128GB
                </div>
                <div className="border border-gray-500 py-4 rounded-lg text-gray-500">
                  256GB
                </div>
                <div className="border border-gray-500 py-4 rounded-lg text-gray-500">
                  512GB
                </div>
                <div className="border border-black py-4 rounded-lg text-black">
                  128GB
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {SPECIFICATIONS.map((specification, index) => (
                  <ProductSpecificationCard
                    key={index}
                    url={specification.url}
                    label={specification.label}
                    value={specification.value}
                  />
                ))}
              </div>
              <p>
                Enhanced capabilities thanks toan enlarged display of 6.7
                inchesand work without rechargingthroughout the day. Incredible
                photosas in weak, yesand in bright lightusing the new systemwith
                two cameras more...
              </p>
              <CartControls />
              <div className="grid grid-cols-3 gap-4">
                <div className="flex lg:flex-row flex-col gap-4  items-center justify-center">
                  <img
                    src="/icons/truck.svg"
                    className="size-12 p-3 rounded bg-[#F6F6F6] text-[#797979]"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p>Free Delivery</p>
                    <p>1-2 day</p>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-4  items-center justify-center">
                  <img
                    src="/icons/shop.svg"
                    className="size-12 p-3 rounded bg-[#F6F6F6] text-[#797979]"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p>In Stock</p>
                    <p>Today</p>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-4  items-center justify-center">
                  <img
                    src="/icons/verify.svg"
                    className="size-12 p-3 rounded bg-[#F6F6F6] text-[#797979]"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p>Guaranteed</p>
                    <p>1 year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-8 py-6 bg-[#FAFAFA]">
        <div className="lg:w-[80%] mx-auto flex flex-col p-4 lg:px-0 py-6">
          <div className="lg:px-10 px-6 px py-12 flex gap-8 flex-col bg-white">
            <h3 className="text-2xl font-medium">Details</h3>
            <p className="text-sm font-light">
              Just as a book is judged by its cover, the first thing you notice
              when you pick up a modern smartphone is the display. Nothing
              surprising, because advanced technologies allow you to practically
              level the display frames and cutouts for the front camera and
              speaker, leaving no room for bold design solutions. And how good
              that in such realities Apple everything is fine with displays.
              Both critics and mass consumers always praise the quality of the
              picture provided by the products of the Californian brand. And
              last year's 6.7-inch Retina panels, which had ProMotion, caused
              real admiration for many.
            </p>
            <div className="flex flex-col gap-7">
              <h3 className="font-medium text-2xl">Screen</h3>
              <div className="flex flex-col gap-8">
                <div className="flex justify-between text-2xl font-normal border-b pb-2">
                  <p>Screen diagonal</p>
                  <p>6.7"</p>
                </div>
                <div className="flex justify-between text-2xl font-normal border-b pb-2">
                  <p>The screen resolution</p>
                  <p>2796x1290</p>
                </div>
                <div className="flex justify-between text-2xl font-normal border-b pb-2">
                  <p>The screen resolution</p>
                  <p>2796x1290</p>
                </div>
                <div className="flex justify-between text-2xl font-normal border-b pb-2">
                  <p>Additionally</p>
                  <p className="lg:w-44 w-28">
                    Dynamic IslandAlways-On displayHDR displayTrue ToneWide
                    color (P3)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[80%] mx-auto flex flex-col p-4 lg:px-0 py-6">
        <div className="flex flex-col gap-8 py-8">
          <h1 className="text-2xl font-medium">Reviews</h1>
          <div className="grid grid-cols-1 lg:grid-cols-[20%_1fr] gap-20">
            <div className="p-8 flex gap-4 items-center justify-center rounded-2xl flex-col bg-[#FAFAFA]">
              <p className="font-medium text-6xl">4.8</p>
              <p className="text-sm">of 125 reviews</p>
              <div className="flex gap-3">
                <img src="/icons/fullstar.svg" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-[20%_1fr] gap-8 items-center ">
              <p>Excellent</p>
              <Progress value={50} className=" w-full" />
              <p>Good</p>
              <Progress value={14} className="w-full" /> <p>Average</p>
              <Progress value={14} className="w-full" /> <p>Below Average</p>
              <Progress value={14} className="w-full " />
            </div>
          </div>
          <input
            type="text"
            placeholder="Leave comment"
            className="w-full py-3 px-3 border rounded mt-3 border-gray-300"
          />
          <div className="flex gap-6 flex-col">
            <div className="flex items-start gap-5 rounded-sm bg-[#FAFAFA] px-7 py-6">
              <img
                src="/img/Userpic1.svg"
                className="rounded-full mt-1.5"
                alt=""
              />
              <div className="flex flex-col">
                <div className="flex  justify-between">
                  <h4 className="lg:text-2xl text-base font-bold">
                    Grace Carey
                  </h4>
                  <p className="font-medium text-sm">24 January,2023</p>
                </div>
                <img
                  src="/icons/fullstar.svg"
                  className="w-4 h-4 my-1"
                  alt=""
                />

                <p className="font-light text-sm text-[#7E7E7E] justify-evenly">
                  I was a bit nervous to be buying a secondhand phone from
                  Amazon, but I couldn’t be happier with my purchase!! I have a
                  pre-paid data plan so I was worried that this phone wouldn’t
                  connect with my data plan, since the new phones don’t have the
                  physical Sim tray anymore, but couldn’t have been easier! I
                  bought an Unlocked black iPhone 14 Pro Max in excellent
                  condition and everything is PERFECT. It was super easy to set
                  up and the phone works and looks great. It truly was in
                  excellent condition. Highly recommend!!!🖤
                </p>
              </div>
            </div>
            <Button
              className="w-fit self-center px-12 py-5 text-black"
              variant="transparentwhite"
            >
              View More
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-8">
          <p className="text-2xl font-medium">Related Products</p>
          <ProductsComponent
            displayedProducts={4}
            columns={4}
            products={products}
          />
        </div>
      </div>
    </div>
  );
}
