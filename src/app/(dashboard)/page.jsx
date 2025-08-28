"use client";
import BannerComponent from "@/components/BannerComponent";
import CategoryCard from "@/components/CategoryCard";
import ProductsComponent from "@/components/ProductsComponent";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { catories } from "@/constants/category";
import { setProduct } from "@/redux/slices/productsSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const products = useSelector((state) => state.products.products);
  const [activeCategory, setActiveCategory] = useState("newarrival");
  return (
    <div>
      {/* Hero Section */}
      <section>
        {/*Hero Section 1 */}
        <div className="w-full bg-[#211C24] h-[630px] md:h-[500px] overflow-hidden">
          <div className="lg:w-[80%]  h-full mx-auto ">
            <div className="md:mx-8 lg:mx-0 px-4 grid md:grid-cols-2 grid-cols-1 h-full lg:px-0">
              <div className="flex flex-col justify-center text-center items-center md:items-start md:text-left">
                <p className="text-2xl text-[#909090]">Pro.Beyond.</p>
                <h6 className="text-6xl mt-1 text-white font-extralight ">
                  IPhone 14 <span className="font-semibold"> Pro</span>
                </h6>
                <p className="text-xl mt-2 font-extralight text-[#909090]">
                  Created to change everything for the better. For everyone
                </p>
                <Link href="/products">
                  <Button
                    variant="transparentwhite"
                    className="mt-4"
                    size="transparent"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
              <div className="relative ">
                <img
                  src="/img/iphone-image.png"
                  className="
                absolute 
             left-1/2 -translate-x-1/2 -bottom-3.5
             md:right-0 md:bottom-0 md:left-auto md:translate-x-0
             lg:w-[330px] lg:h-[450px] 
             md:w-[300px] md:h-[450px] 
             w-[200px] h-[250px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/*Hero Section 2 */}
        <div className="grid  grid-cols-1 md:grid-cols-2">
          {/* left side */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* left side top */}
            <div className="md:col-span-2 col-span-1 md:order-1 order-3">
              <div className="flex  flex-col md:flex-row md:overflow-hidden gap-3  py-9 md:py-0 md:h-[200px] items-center">
                <img
                  src="/img/playstation.svg"
                  className="-ml-13 -mt-3 md:h-[220px] h-[150px] "
                />
                <div className=" text-center md:text-left md:mr-4">
                  <h3 className="text-black lg:text-3xl text-2xl  font-bold">
                    Playstation 5
                  </h3>
                  <p className="text-[#909090] mt-2 md:text-sm  sm:text-xs">
                    Incredibly powerful CPUs, GPUs, and an SSD with integrated
                    I/O will redefine your PlayStation experience.
                  </p>
                </div>
              </div>
            </div>
            {/* left side bottom */}
            <div className="md:order-2 order-1 bg-[#EDEDED]">
              {/* left sdie bottom first */}
              <div className="flex  flex-col md:flex-row md:overflow-hidden gap-3  py-9 md:py-0 md:h-[200px] items-center">
                <img
                  src="/img/headphone.svg"
                  className="md:-ml-32 md:h-[200px] h-[150px] "
                />
                <div className=" text-center md:text-left md:mr-4">
                  <h3 className="text-xl sm:text-2xl font-light">
                    Apple AirPods <span className="font-semibold"> Max</span>
                  </h3>
                  <p className="text-[#909090] md:text-sm  sm:text-xs mt-2">
                    Computational audio. Listen, it's powerful
                  </p>
                </div>
              </div>
            </div>
            {/* left side bottom second */}
            <div className="bg-[#353535] md:order-3 order-2">
              <div className="flex  flex-col md:flex-row md:overflow-hidden gap-3  py-9 md:py-0 md:h-[200px] items-center">
                <img
                  src="/img/visionpro.svg"
                  className="md:-ml-36  md:h-[140px] lg:h-[160px] "
                />
                <div className=" text-center md:text-left md:mr-4">
                  <h3 className="text-white lg:text-lg  font-light">
                    Apple Vision <span className="font-semibold"> Pro</span>
                  </h3>
                  <p className="text-[#909090] md:text-sm  sm:text-xs mt-2">
                    An immersive way to experience entertainment{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="bg-[#EDEDED]">
            <div className="flex flex-col md:flex-row md:overflow-hidden gap-3   py-9 md:py-0 md:h-full  items-center">
              <img
                src="/img/maclaptop.svg"
                className="order-1 md:order-2 md:-mr-[220px] md:h-[300px] h-[120px] "
              />
              <div className="order-2 md:order-1 text-center md:text-left md:m-6 m-2">
                <h3 className=" lg:text-3xl text-2xl  font-light">
                  Macbook <span className="font-semibold">Air</span>
                </h3>
                <p className="text-[#909090] md:text-sm  sm:text-xs mt-2">
                  The new 15‑inch MacBook Air makes room for more of what you
                  love with a spacious Liquid Retina display.{" "}
                </p>
                <Link href="/products">
                  <Button
                    variant="transparentblack"
                    className="mt-4"
                    size="transparent"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section>
        {/* Catories */}
        <div className="bg-[#FAFAFA]">
          <div className="lg:w-[80%] mx-auto flex flex-col p-4 md:px-8 py-8 lg:px-0 lg:py-12">
            <Carousel
              opts={{
                align: "start",
              }}
            >
              <div className="flex justify-between  items-center mb-2">
                <p className="font-semibold">Browse By Category</p>
                <div className="flex gap-2">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </div>
              <CarouselContent>
                {Array.from({ length: catories.length }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="sm:basis-1/4 lg:basis-1/6"
                  >
                    <CategoryCard
                      name={catories[index].name}
                      path={catories[index].path}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious /> */}
              {/* <CarouselNext /> */}
            </Carousel>
          </div>
        </div>

        {/* Products  */}
        <div className="lg:w-[80%] mx-auto flex flex-col p-4 md:px-8 py-8 lg:px-0 lg:py-12">
          <div className="flex gap-4 py-6">
            <div
              className={`cursor-pointer  ${
                activeCategory === "newarrival"
                  ? "font-bold border-b-4 border-black"
                  : "font-semibold"
              } `}
              onClick={(e) => {
                setActiveCategory("newarrival");
              }}
            >
              New Arrival
            </div>
            <div
              className={`cursor-pointer  ${
                activeCategory === "bestSeller"
                  ? "font-bold border-b-4 border-black"
                  : "font-semibold"
              } `}
              onClick={(e) => {
                setActiveCategory("bestSeller");
              }}
            >
              Best Seller
            </div>
            <div
              className={`cursor-pointer  ${
                activeCategory === "feturredProducts"
                  ? "font-bold border-b-4 border-black"
                  : "font-semibold"
              } `}
              onClick={(e) => {
                setActiveCategory("feturredProducts");
              }}
            >
              Featured Products
            </div>
          </div>
          <ProductsComponent displayedProducts={8} products={products} />
        </div>
        {/* Banners */}
        <BannerComponent />

        {/* Discount up to - 50% */}
        <div className="lg:w-[80%] mx-auto flex flex-col p-4 md:px-8 py-8 lg:px-0 lg:py-12">
          <h4 className="font-[500] text-2xl mb-8">Discounts up to -50%</h4>
          <ProductsComponent displayedProducts={4} products={products} />
        </div>

        {/* Banner Section */}
        <div className="h-[448px] overflow-hidden bg-gradient-to-r from-[#2E2E2E] to-[#000000] relative">
          <img
            src="/img/BnnertwoTabfirst.svg"
            className="h-[192px] w-[237px] ml-5 absolute -left-48 -top-16 lg:left-3 lg:top-0"
          />
          <img
            src="/img/bannerlaptop.svg"
            className="w-[345px] h-[262px] absolute -top-20 left-1/2 -translate-x-1/2  lg:hidden"
          />
          <img
            src="/img/Bannertwotab.svg"
            className="w-[345px] h-[262px] absolute lg:bottom-0 lg:left-0 hidden lg:block"
          />
          <div className="absolute w-full px-4 text-center flex justify-center items-center flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h3 className="lg:text-7xl text-5xl font-sans font-thin text-white">
              Big Summer <span className="font-medium font-sf">Sale</span>{" "}
            </h3>
            <p className="text-base  text-[#787878] mt-2">
              Commodo fames vitae vitae leo mauris in. Eu consequat.
            </p>
            <Link href="/products">
              <Button variant="transparentwhite" className="py-5 px-8 mt-8">
                Shop Now
              </Button>
            </Link>
          </div>
          <img
            src="/img/Bannertwoiphone.svg"
            className="absolute  right-0 -top-20 lg:w-[120px] lg:h-[366px]  w-[80px] h-[245px] -rotate-12  "
          />
          <img
            src="/img/BannertwoWatch.svg"
            className="absolute lg:bottom-0 lg:right-0  -right-48 -bottom-10"
          />
        </div>
      </section>
    </div>
  );
}
