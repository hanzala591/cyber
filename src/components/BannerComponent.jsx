"use client";
import React from "react";
import Slider from "react-slick";
import Banner from "./Banner";

export default function BannerComponent() {
  var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
      <div className="lg:hidden block">
        <Slider {...settings}>
          <Banner
            bgColor={"#FFFFFF"}
            path={"/img/IphoneTab.svg"}
            description={
              "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            }
            title={"Popular Products"}
            textColor="black"
          />
          <Banner
            bgColor={"#F9F9F9"}
            path={"/img/IphoneTab.svg"}
            description={
              "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            }
            title={"Ipad Pro"}
            textColor="black"
          />
          <Banner
            bgColor={"#EAEAEA"}
            path={"/img/samsungsvg.svg"}
            description={
              "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            }
            title={"Samsung Galaxy "}
            textColor="black"
          />
          <Banner
            bgColor={"#2C2C2C"}
            path={"/img/maclaptop.svg"}
            description={
              "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
            }
            title={"Macbook Pro"}
            textColor="white"
          />
        </Slider>
      </div>
      <div className="lg:grid grid-cols-4 hidden  ">
        <Banner
          bgColor={"#FFFFFF"}
          path={"/img/IphoneTab.svg"}
          description={
            "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
          }
          title={"Popular Products"}
          textColor="black"
        />
        <Banner
          bgColor={"#F9F9F9"}
          path={"/img/IphoneTab.svg"}
          description={
            "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
          }
          title={"Ipad Pro"}
          textColor="black"
        />
        <Banner
          bgColor={"#EAEAEA"}
          path={"/img/samsungsvg.svg"}
          description={
            "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
          }
          title={"Samsung Galaxy "}
          textColor="black"
        />
        <Banner
          bgColor={"#2C2C2C"}
          path={"/img/maclaptop.svg"}
          description={
            "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
          }
          title={"Macbook Pro"}
          textColor="white"
        />
      </div>
    </div>
  );
}
