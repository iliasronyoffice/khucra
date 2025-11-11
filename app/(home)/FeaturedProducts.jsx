"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard1 from "../components/layout/ProductCard1";
import Link from "next/link";
import useCachedFetch from "@/app/utils/useCachedFetch"; // adjust path

export default function FeaturedProducts() {
const { data: products, loading, error } = useCachedFetch(
  `${process.env.NEXT_PUBLIC_API_URL}/products/featured`,
  "featured-products",
  5 * 60 * 1000 // 5 minutes cache
);


  // Swiper progress bar effect
  useEffect(() => {
    const initializeProgressBar = () => {
      const swiper = document.querySelector(".featured-swiper")?.swiper;
      if (!swiper) return;

      const updateProgress = () => {
        const bar = document.getElementById("featured-progress");
        if (!bar) return;

        const totalSlides = products?.length || 0;
        const slidesPerView = swiper.params.slidesPerView;
        const maxIndex = Math.max(totalSlides - slidesPerView, 1);
        const progress = (swiper.activeIndex / maxIndex) * 100;
        bar.style.width = `${progress}%`;
      };

      swiper.on("slideChange", updateProgress);
      swiper.on("init", updateProgress);
    };

    if (!loading && products?.length > 0) {
      setTimeout(initializeProgressBar, 100);
    }
  }, [products, loading]);

  return (
    <div>
      <div className="featured-product-section container mx-auto px-4 py-8">
        <div className="featured-header flex justify-between items-center">
          <h2 className="md:text-3xl text-lg font-bold mb-4 items-center">Featured Products</h2>
          <div className="sell-all-section">
            <span className="flex items-center gap-2 cursor-pointer bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition">
              <span className="bg-white p-1 md:p-2 rounded-md">
                {/* SVG Icon */}
                 
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 15 15"
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
          
              <Link href="/" className="hover:underline text-xs md:text-xl">
                
                See All
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="container mx-auto px-4">
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center">
            <div className="font-semibold"> API Error</div>
            <div>{error}</div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main"></div>
        </div>
      )}

      {/* Product Swiper */}
      {!loading && products?.length > 0 && (
        <div className="container mx-auto px-4 pb-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 6500, disableOnInteraction: false }}
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
            className="featured-swiper"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard1 item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom progress bar */}
          <div className="w-full h-[2px] bg-gray-200 mt-6 relative">
            <div id="featured-progress" className="h-full bg-black w-0 transition-all duration-300"></div>
          </div>
        </div>
      )}

      {/* No Products State */}
      {!loading && products?.length === 0 && !error && (
        <div className="flex justify-center items-center py-10 text-gray-600">
          No featured products found.
        </div>
      )}
    </div>
  );
}
