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

  // Fetch with caching and timeout
  const fetchWithCache = async (url, cacheKey, timeout = 5000) => {
    // Check cache first
    const cached = localStorage.getItem(cacheKey);
    const cacheTime = localStorage.getItem(`${cacheKey}-time`);
    
    // Use cache if less than 30 minutes old
    if (cached && cacheTime && Date.now() - cacheTime < 30 * 60 * 1000) {
      return JSON.parse(cached);
    }

    // Fetch with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          "Accept": "application/json",
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Cache successful response
      if (data?.success) {
        localStorage.setItem(cacheKey, JSON.stringify(data));
        localStorage.setItem(`${cacheKey}-time`, Date.now());
      }
      
      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      
      // Fallback to cache even if expired when fetch fails
      if (cached) {
        console.warn(`Using cached data for ${cacheKey} due to fetch error:`, error.message);
        return JSON.parse(cached);
      }
      throw error;
    }
  };

  // Fetch slider images with caching
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sliderData, bannerData] = await Promise.all([
          fetchWithCache(
            "http://localhost/genmart_october/sliders", 
            "slider-data",
            6000
          ),
          fetchWithCache(
            "http://localhost/genmart_october/banners-one", 
            "banner-data",
            6000
          ),
        ]);

        if (sliderData?.success && sliderData?.data) {
          setSliders(sliderData.data);
        } else {
          console.warn("Invalid slider data format:", sliderData);
        }

        if (bannerData?.success && bannerData?.data?.length > 0) {
          setRightBanner(bannerData.data[0]);
        } else {
          console.warn("Invalid banner data format:", bannerData);
        }

      } catch (error) {
        console.error("Error fetching data:", error);
        
        // Final fallback - try to use any available cache
        const cachedSlider = localStorage.getItem("slider-data");
        const cachedBanner = localStorage.getItem("banner-data");
        
        if (cachedSlider) {
          const sliderData = JSON.parse(cachedSlider);
          if (sliderData?.success && sliderData?.data) {
            setSliders(sliderData.data);
          }
        }
        
        if (cachedBanner) {
          const bannerData = JSON.parse(cachedBanner);
          if (bannerData?.success && bannerData?.data?.length > 0) {
            setRightBanner(bannerData.data[0]);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Clear cache function (useful for development)
  const clearCache = () => {
    localStorage.removeItem("slider-data");
    localStorage.removeItem("slider-data-time");
    localStorage.removeItem("banner-data");
    localStorage.removeItem("banner-data-time");
    console.log("Slider cache cleared");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 container mx-auto px-2 my-4">
      {/* Debug button - only in development */}
      {/* {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={clearCache}
            className="bg-red-500 text-white px-3 py-1 rounded text-xs opacity-50 hover:opacity-100"
            title="Clear cache"
          >
            Clear Cache
          </button>
        </div>
      )} */}

      {/* Left: Main Slider */}
      <div className="md:col-span-10 relative">
        {loading ? (
          <div className="flex items-center justify-center h-[150px] 2xl:h-[350px] md:h-[300px] bg-gray-100 rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
              <span className="text-gray-500 text-sm">Loading slider...</span>
            </div>
          </div>
        ) : sliders.length > 0 ? (
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
                  <div className="relative w-full h-[150px] md:h-[300px] lg:h-[300px] 2xl:h-[350px] rounded-lg overflow-hidden">
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
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all duration-200"
              type="button"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6L9 12L15 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              ref={nextRef}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all duration-200"
              type="button"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Swiper>
        ) : (
          <div className="flex items-center justify-center h-[150px] md:h-[350px] bg-gray-100 rounded-lg">
            <span className="text-gray-500">No sliders available</span>
          </div>
        )}
      </div>

      {/* Right Side Banner */}
      <div className="md:col-span-2 hidden md:block space-y-4">
        {rightBanner ? (
          <a href={rightBanner.url} target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-[280px] md:h-[300px] lg:h-[300px] 2xl:h-[350px] rounded-lg overflow-hidden">
              <Image
                src={rightBanner.photo}
                alt="Right Side Banner"
                fill
                className="object-cover object-center rounded-lg hover:scale-105 transition-transform duration-300"
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