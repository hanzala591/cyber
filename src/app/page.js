"use client";
import CategoryCard from "@/components/CategoryCard";
import ShopingCard from "@/components/ShopingCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { catories } from "@/constants/category";

export default async function Home() {
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
                <Button
                  variant="transparentwhite"
                  className="mt-4"
                  size="transparent"
                >
                  Shop Now
                </Button>
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
                <Button
                  variant="transparentblack"
                  className="mt-4"
                  size="transparent"
                >
                  Shop Now
                </Button>
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

        <div className="lg:w-[80%] mx-auto flex flex-col p-4 md:px-8 py-8 lg:px-0 lg:py-12">
          <div className="flex gap-4 py-6">
            <div className="cursor-pointer font-bold border-b-4 border-black">
              New Arrival
            </div>
            <div className="cursor-pointer font-semibold">Best Seller</div>
            <div className="cursor-pointer font-semibold">
              Featured Products
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productsres.products.map((product, index) => {
              if (index <= 8) {
                return (
                  <ShopingCard
                    key={index}
                    name={product.name}
                    brand={product.brand}
                    image={product.image}
                    price={product.price}
                  />
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
