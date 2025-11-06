"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import product1 from "@/public/products/product1.png";
import product2 from "@/public/products/product2.png";
import product3 from "@/public/products/product3.png";
import product4 from "@/public/products/product4.png";
import product5 from "@/public/products/product5.png";
import product6 from "@/public/products/product6.png";
import product7 from "@/public/products/product7.png";
import product8 from "@/public/products/product8.png";
import { useEffect } from "react";
import ProductCard1 from "../../components/layout/ProductCard1";

export default function YouMayAlsoLike() {
  useEffect(() => {
    const swiper = document.querySelector(".you-may-also-like-swiper")?.swiper;
    if (!swiper) return;

    swiper.on("slideChange", () => {
      const progress =
        (swiper.activeIndex / (products.length - swiper.params.slidesPerView)) *
        100;
      const bar = document.getElementById("you-make-also-like-progress");
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
    <div>
      <div className="featured-product-section container mx-auto px-4 py-8">
        <div className="featured-header flex justify-between items-center ">
          <div className="featured-title">
            <h2 className="text-3xl font-bold mb-4">You May Also Like</h2>
          </div>
          <div className="sell-all-section ">
            <span className="flex items-center gap-2 cursor-pointer bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition">
              <span className="bg-white p-2 rounded-md">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 15 15"
                  className=""
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1.25C15 1.625 14.875 1.875 14.625 2.125L2.125 14.625C1.625 15.125 0.875001 15.125 0.375001 14.625C-0.124999 14.125 -0.124999 13.375 0.375001 12.875L12.875 0.375C13.375 -0.125 14.125 -0.125 14.625 0.375C14.875 0.625 15 0.875001 15 1.25Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M15 1.25L15 12.5C15 13.25 14.5 13.75 13.75 13.75C13 13.75 12.5 13.25 12.5 12.5L12.5 2.5L2.5 2.5C1.75 2.5 1.25 2 1.25 1.25C1.25 0.500002 1.75 1.58749e-06 2.5 1.55471e-06L13.75 1.06295e-06C14.5 1.03017e-06 15 0.500001 15 1.25Z"
                    fill="#1F1F1F"
                  />
                </svg>
              </span>
              <Link href="/" className=" hover:underline">
                See All
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Products Grid - to be implemented */}

      <div className="container mx-auto px-4 pb-12">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 6500 }}
          spaceBetween={20}
          slidesPerView={6}
          navigation={false}
          pagination={false}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="you-may-also-like-swiper"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
             <ProductCard1 item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Indicator Line */}
        <div className="w-full h-[2px] bg-gray-200 mt-6">
          <div id="you-make-also-like-progress" className="h-full bg-black w-0"></div>
        </div>
      </div>
    </div>
  );
}
