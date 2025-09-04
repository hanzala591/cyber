"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className=" flex p-4 md:px-8 md:py-4 lg:px-0 lg:py-4">
      <div className="lg:w-[80%] mx-auto min-h-screen bg-gradient-to-b   flex flex-col items-center">
        {/* Header */}
        <section className="max-w-3xl text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Contact <span className="text-[#969696]">Us</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Have questions or need help? Get in touch with us – we’d love to
            hear from you.
          </p>
        </section>

        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="py-6 px-4"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="py-6 px-4"
                />
                <Input
                  type="text"
                  placeholder="Subject"
                  className="py-6 px-4"
                />
                <Textarea
                  placeholder="Your Message"
                  className="py-6 px-4 h-32"
                />
                <Button
                  type="submit"
                  className="w-full py-6 font-semibold text-lg rounded-2xl"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="flex flex-col gap-6 justify-center">
            <Card className="shadow-md rounded-2xl">
              <CardContent className="p-6 flex items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Our Office</h3>
                  <p className="text-gray-600">
                    123 Market Street, Karachi, Pakistan
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md rounded-2xl">
              <CardContent className="p-6 flex items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-gray-600">+92 300 1234567</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md rounded-2xl">
              <CardContent className="p-6 flex items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-gray-600">support@shopease.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
