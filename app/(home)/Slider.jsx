"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import slider1 from "../../public/slider1.jpg";
import slider2 from "../../public/slider2.jpg";
import slider3 from "../../public/slider3.jpg";
import rightside from "../../public/right_side.jpg";

export default function Slider() {
  const sliders = [slider1, slider2, slider3];

  // refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 container mx-auto px-2 my-4">
      {/* Left Slider - Main Banner */}
      <div className="md:col-span-9 relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation will be assigned in onBeforeInit so refs are used reliably
          onBeforeInit={(swiper) => {
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevRef.current;
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          loop={true}
          speed={600}
          className="rounded-lg overflow-hidden shadow-md relative"
        >
          {sliders.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[150px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt={`slider banner ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 60vw"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons (only once) */}
          <button
            ref={prevRef}
            aria-label="Previous slide"
            className="custom-nav-btn absolute left-3 top-1/2 -translate-y-1/2 z-20 w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] "
            type="button"
          >
            {/* left arrow SVG */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            ref={nextRef}
            aria-label="Next slide"
            className="custom-nav-btn absolute right-3 top-1/2 -translate-y-1/2 z-20 w-[20px] h-[20px] lg:w-[40px] lg:h-[40px]"
            type="button"
          >
            {/* right arrow SVG */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Swiper>
      </div>

      {/* Right Side */}
      <div className="md:col-span-3 hidden md:block space-y-4">
        <div className="relative w-full h-[280px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden">
          <Image
            src={rightside}
            alt="Daraz App"
            fill
            className="object-cover object-center rounded-lg"
            sizes="(max-width:768px) 100vw, 25vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
