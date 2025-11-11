"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BrandCard from "../components/layout/BrandCard";
import useCachedFetch from "../utils/useCachedFetch"; 
import { useState } from "react";

export default function OurBrands() {
  const { data: brands, loading, error } = useCachedFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/brands`,
    "brands_cache",
    5 * 60 * 1000 
  );

  const [progress, setProgress] = useState(0);

  if (loading) return <div className="text-center py-8">Loading brands...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="overflow-hidden container mx-auto px-4 py-8">
      <div className="">
        <h2 className="text-lg md:text-3xl font-bold mb-4">Our Brands</h2>
      </div>

      <div className="container mx-auto px-4 md:px-0 mb-10 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 6500 }}
          spaceBetween={20}
          slidesPerView={6}
          navigation={{
            nextEl: ".custom-brands-next",
            prevEl: ".custom-brands-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="brands-swiper"
          onSlideChange={(swiper) => {
            const totalSlides = brands.length;
            const visibleSlides = swiper.params.slidesPerView;
            const currentIndex = swiper.activeIndex;

            // Calculate percentage safely
            const maxIndex = Math.max(totalSlides - visibleSlides, 1);
            const newProgress = Math.min((currentIndex / maxIndex) * 100, 100);
            setProgress(newProgress);
          }}
        >
          {brands.map((item) => (
            <SwiperSlide key={item.id}>
              <BrandCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-brands-prev absolute left-0 top-1/2 -translate-y-1/2 translate-x-0 md:-translate-x-4 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 border border-gray-200 hover:shadow-xl">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="custom-brands-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 md:translate-x-4 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 border border-gray-200 hover:shadow-xl">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom Indicator Line */}
        <div className="w-full h-[3px] bg-gray-200 mt-6 rounded-2xl">
          <div
            className="h-full bg-black w-0 rounded-2xl transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
