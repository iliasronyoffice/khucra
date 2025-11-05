"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import brand1 from "../../public/brand1.png";
import brand2 from "../../public/brand2.png";
import brand3 from "../../public/brand3.png";
import brand4 from "../../public/brand4.png";
import brand5 from "../../public/brand5.png";
import brand6 from "../../public/brand6.png";
import brand7 from "../../public/brand1.png";
import brand8 from "../../public/brand3.png";

import { useEffect } from "react";

import BrandCard from "../components/layout/BrandCard";

export default function OurBrands() {
  useEffect(() => {
    const swiper = document.querySelector(".seller-swiper")?.swiper;
    if (!swiper) return;

    swiper.on("slideChange", () => {
      const progress =
        (swiper.activeIndex /
          (top_sellers.length - swiper.params.slidesPerView)) *
        100;
      const bar = document.getElementById("brand-progress");
      if (bar) bar.style.width = `${progress}%`;
    });
  }, []);

  const top_sellers = [
    {
      id: 1,
      title: "Walton",
      img: brand1,
    },
    {
      id: 2,
      title: "Samsung",
      img: brand2,
    },
    {
      id: 3,
      title: "Hitachi",
      img: brand3,
    },
    {
      id: 4,
      title: "Singer",
      img: brand4,
    },
    {
      id: 5,
      title: "Sony",
      img: brand5,
    },
    {
      id: 6,
      title: "Lg",
      img: brand6,
    },
    {
      id: 7,
      title: "Walton 2",
      img: brand1,
    },
    {
      id: 8,
      title: "Hitachi 2",
      img: brand3,
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="top-seller-product-section container mx-auto px-4 py-8">
        <div className="top-seller-header ">
          <div className="featured-title">
            <h2 className="text-3xl font-bold mb-4">Our Top Sellers</h2>
          </div>
        </div>
      </div>

      {/* top_sellers Grid - to be implemented */}

      <div className="container mx-auto px-4 md:px-0 mb-10 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 6500 }}
          spaceBetween={20}
          slidesPerView={6}
          navigation={{
            nextEl: ".custom-seller-next",
            prevEl: ".custom-seller-prev",
          }}
          pagination={false}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="seller-swiper"
        >
          {top_sellers.map((item) => (
            <SwiperSlide key={item.id}>
              <BrandCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-seller-prev absolute left-0 top-1/2 -translate-y-1/2 translate-x-0 md:-translate-x-4 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 border border-gray-200 hover:shadow-xl">
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button className="custom-seller-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 md:translate-x-4 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 border border-gray-200 hover:shadow-xl">
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Bottom Indicator Line */}
        <div className="w-full h-[3px] bg-gray-200 mt-6 rounded-2xl">
          <div
            id="brand-progress"
            className="h-full bg-black w-0 rounded-2xl"
          ></div>
        </div>
      </div>
    </div>
  );
}
