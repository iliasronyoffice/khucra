"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import product1 from "../../public/products/product1.png";
import product2 from "../../public/products/product2.png";
import product3 from "../../public/products/product3.png";
import product4 from "../../public/products/product4.png";
import product5 from "../../public/products/product5.png";
import product6 from "../../public/products/product6.png";
import product7 from "../../public/products/product7.png";
import product8 from "../../public/products/product8.png";
import { useEffect } from "react";
import ProductCard1 from "../components/layout/ProductCard1";
import best_deal from "../../public/best-deal-bg.png";

export default function BestDeals() {
  useEffect(() => {
    const swiper = document.querySelector(".featured-swiper")?.swiper;
    if (!swiper) return;

    swiper.on("slideChange", () => {
      const progress =
        (swiper.activeIndex / (products.length - swiper.params.slidesPerView)) *
        100;
      const bar = document.getElementById("featured-progress");
      if (bar) bar.style.width = `${progress}%`;
    });
  }, []);

   const products = [
     {
       id: 1,
       slug:"galaxy-s22-ultra",
       title: "Galaxy S22 Ultra",
       img: product1,
       category: "Mobile & Accessories",
       sold: "20",
       seller: "Gadget Haat",
       price: 60000,
       oldPrice: 65000,
       discount: "-15%",
     },
     {
       id: 2,
       slug:"2ghz-router",
       title: "2Ghz Router",
       img: product2,
       category: "Internet & Web",
       sold: "65",
       seller: "Tech Has",
       price: 1200,
     },
     {
       id: 3,
       slug:"cat-carrier-bag",
       title: "Cat Carrier Bag",
       img: product3,
       category: "Pet Accessories",
       sold: "32",
       seller: "Petly",
       price: 2000,
       tag: "New",
     },
     {
       id: 4,
       slug:"smart-hand-fan",
       title: "Smart Hand Fan",
       img: product4,
       category: "Electronics",
       sold: "100",
       seller: "Electro Boom",
       price: 400,
     },
     {
       id: 5,
       slug:"hand-scissor",
       title: "Hand Scissor",
       img: product5,
       category: "Home Appliance",
       sold: "32",
       seller: "Kacha Haat BD",
       price: 120,
       oldPrice: 160,
       discount: "-25%",
     },
     {
       id: 6,
       slug:"vr-box",
       title: "VR BOX 2.0",
       img: product6,
       category: "Gadget & Accessories",
       sold: "22",
       seller: "Tech Has",
       price: 1500,
     },
     {
       id: 7,
       slug:"television",
       title: "Television",
       img: product7,
       category: "tech & Accessories",
       sold: "22",
       seller: "Tech Has",
       price: 1500,
     },
     {
       id: 8,
       slug:"telivision2",
       title: "Television 2",
       img: product8,
       category: "tech & Accessories",
       sold: "22",
       seller: "Tech Has",
       price: 1500,
     },
   ];
  
  return (
    <div className="relative container mx-auto px-4 pt-12 mb-[300px]">
      <div className="w-full h-[170px] sm:h-[250px] md:h-[225px] lg:h-[317px] xl:h-[409px] 2xl:h-[490px] flex justify-center overflow-hidden rounded-2xl">
        <Image
          src={best_deal}
          alt="Best Deal"
          className="object-contain object-cover"
          fill
        />

        {/* Floating Timer Box */}
        <div className="absolute top-0  left-1/2 -translate-x-1/2 px-4 py-2 flex flex-col items-center">
          <div className="border border-red-400 text-red-500 text-[13px] font-medium px-3 pt-[3px] rounded-full">
            Offer Ends In:
          </div>
          <p className="text-black text-sm md:text-[15px] lg:text-[32px] xl:text-[45px] sm:text-2xl font-bold tracking-wider pt-3 md:pt-5">
            03d: 07h: 04m: 42s
          </p>
        </div>

        {/* Section Title */}
        <div className="absolute top-[100px] md:top-[108px]  lg:top-[139px] xl:top-[180px] 2xl:top-[220px] sm:top-[100px] w-full text-center">
          <h2 className="text-2xl md:text-2xl lg:text-5xl sm:text-4xl font-bold uppercase text-black ">
            BEST DEALS OF THE WEEK!
          </h2>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 pb-12 absolute w-full left-0 top-[60%]">
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 6500 }}
            spaceBetween={20}
            slidesPerView={6}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            pagination={false}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="featured-swiper"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard1 item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 border border-gray-200 hover:shadow-xl">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 border border-gray-200 hover:shadow-xl">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

   
    </div>
  );
}