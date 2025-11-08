"use client";

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Slider() {
  const [sliders, setSliders] = useState([]);
  const [rightBanner, setRightBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Fetch slider images
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sliderRes, bannerRes] = await Promise.all([
          fetch("http://localhost/genmart_october/api/v2/sliders"),
          fetch("http://localhost/genmart_october/api/v2/banners-one"),
        ]);

        const sliderData = await sliderRes.json();
        const bannerData = await bannerRes.json();

        if (sliderData?.success && sliderData?.data) {
          setSliders(sliderData.data);
        }
        if (bannerData?.success && bannerData?.data?.length > 0) {
          setRightBanner(bannerData.data[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 container mx-auto px-2 my-4">
      {/* Left: Main Slider */}
      <div className="md:col-span-10 relative">
        {loading ? (
          <div className="flex items-center justify-center h-[150px] md:h-[350px] bg-gray-100 rounded-lg">
            <span className="text-gray-500">Loading...</span>
          </div>
        ) : (
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
            speed={600}
            className="rounded-lg overflow-hidden shadow-md relative"
          >
            {sliders.map((item, index) => (
              <SwiperSlide key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-[150px] md:h-[350px] lg:h-[350px] rounded-lg overflow-hidden">
                    <Image
                      src={item.photo}
                      alt={`slider-${index}`}
                      fill
                      className="object-cover rounded-lg"
                      priority={index === 0}
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 66vw, 60vw"
                    />
                  </div>
                </a>
              </SwiperSlide>
            ))}

            {/* Custom Nav Buttons */}
            <button
              ref={prevRef}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white"
              type="button"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6L9 12L15 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              ref={nextRef}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white"
              type="button"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Swiper>
        )}
      </div>

      {/* Right Side Banner */}
      <div className="md:col-span-2 hidden md:block space-y-4">
        {rightBanner ? (
          <a href={rightBanner.url} target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-[280px] md:h-[350px] lg:h-[350px] rounded-lg overflow-hidden">
              <Image
                src={rightBanner.photo}
                alt="Right Side Banner"
                fill
                className="object-cover object-center rounded-lg"
                sizes="(max-width:768px) 100vw, 25vw"
                priority
              />
            </div>
          </a>
        ) : (
          <div className="w-full h-[280px] md:h-[350px] lg:h-[350px] bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm">No banner available</span>
          </div>
        )}
      </div>
    </div>
  );
}
