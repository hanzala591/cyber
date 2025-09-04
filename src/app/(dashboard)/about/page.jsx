"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className=" flex p-4 md:px-8 md:py-4 lg:px-0 lg:py-4">
      <div className="lg:w-[80%] mx-auto min-h-screen bg-gradient-to-b  flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full max-w-6xl text-center py-16 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
            About <span className="text-[#969696]">Cyber</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your one-stop destination for modern, stylish, and affordable
            shopping experiences. We bring the best products to your doorstep.
          </p>
        </section>

        {/* Mission Section */}
        <section className="w-full max-w-6xl grid md:grid-cols-2 gap-10 px-6 py-12">
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600">
                At ShopEase, our mission is to make online shopping simple,
                seamless, and enjoyable. We believe everyone deserves access to
                quality products at fair prices.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Values
              </h2>
              <p className="text-gray-600">
                We prioritize trust, quality, and customer satisfaction. Every
                product is handpicked and verified to give you the best shopping
                experience possible.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full max-w-6xl py-16 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose <span className="text-[#969696]">cyber</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <Card className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Get your products delivered quickly and safely to your
                  doorstep.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
                <p className="text-gray-600">
                  Shop with confidence using our secure and trusted payment
                  gateways.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our support team is available round the clock to help you out.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
