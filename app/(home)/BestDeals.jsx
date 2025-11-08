"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import ProductCard1 from "../components/layout/ProductCard1";
import best_deal from "../../public/best-deal-bg.png";

export default function BestDeals() {
  const [flashDeals, setFlashDeals] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // merged products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

// Countdown effect
useEffect(() => {
  if (!flashDeals.length) return;

  // Assuming you use the *first deal’s* date for countdown
  const endDate = new Date(flashDeals[0].date * 1000).getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance <= 0) {
      clearInterval(timer);
      setTimeLeft("Expired");
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTimeLeft(`${days}d: ${hours}h: ${minutes}m: ${seconds}s`);
  }, 1000);

  return () => clearInterval(timer);
}, [flashDeals]);


  // Fetch flash deals from API
  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v2/flash-deals`;
        const res = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          mode: "cors",
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        console.log("Flash Deals API Response:", data);

        if (data.success && data.data) {
          setFlashDeals(data.data);

          // Merge all deal products into one array
          const merged = data.data.flatMap(
            (deal) => deal.products?.data || []
          );
          setAllProducts(merged);

          setError(null);
        } else {
          throw new Error("Invalid response format from API");
        }
      } catch (err) {
        console.error("Error fetching flash deals:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  useEffect(() => {
    const swiper = document.querySelector(".featured-swiper")?.swiper;
    if (!swiper) return;

    swiper.on("slideChange", () => {
      const progress =
        (swiper.activeIndex /
          (flashDeals.length - swiper.params.slidesPerView)) *
        100;
      const bar = document.getElementById("featured-progress");
      if (bar) bar.style.width = `${progress}%`;
    });
  }, []);

  

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
            {/* 03d: 07h: 04m: 42s */}
            {timeLeft || "Loading..."}
          </p>
        </div>

        {/* Section Title */}
        <div className="absolute top-[100px] md:top-[108px]  lg:top-[139px] xl:top-[180px] 2xl:top-[220px] sm:top-[100px] w-full text-center">
          <h2 className="text-2xl md:text-2xl lg:text-5xl sm:text-4xl font-bold uppercase text-black ">
            {/* BEST DEALS OF THE WEEK! */}
          {flashDeals[0]?.title}
          </h2>
        </div>
      </div>
      {/* Error State */}
      {error && (
        <div className="container mx-auto px-4">
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center">
            <div className="font-semibold">⚠️ API Error</div>
            <div>{error}</div>
          </div>
        </div>
      )}
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-main  rounded-full animate-spin"></div>
        </div>
      )}

      {/* Products Grid */}
      {!loading &&
        !error &&
        allProducts.length > 0 &&
         (
          <div className="container mx-auto px-4 pb-12 absolute w-full left-0 top-[60%]">
            <div className="relative">
              <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 6500 }}
                spaceBetween={20}
                slidesPerView={6}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                  1280: { slidesPerView: 6 },
                }}
                className="featured-swiper"
               >
                {allProducts.map((prod) => (
                  <SwiperSlide key={prod.id}>
                  <ProductCard1
                    item={{
                      id: prod.id,
                      slug: prod.details || prod.slug,
                      title: prod.name,
                      img: prod.image,
                      price: prod.price,
                    }}
                  />
                  </SwiperSlide>
                ))}
              </Swiper>

              
              {/* Custom Navigation Buttons */}
             <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 border border-gray-200 hover:shadow-xl">
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

            <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 border border-gray-200 hover:shadow-xl">
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

            </div>
          </div>
        )}
      {/* No Products State */}
      {!loading && flashDeals.length === 0 && !error && (
        <div className="flex justify-center items-center py-10 text-gray-600">
          No featured products found.
        </div>
      )}
    </div>
  );
}
