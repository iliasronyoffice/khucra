"use client";

import { useState, useEffect, useRef } from "react";
import phone_main from "@/public/phone_main.png";
import gallery1 from "@/public/gallery1.png";
import gallery2 from "@/public/gallery2.png";
import gallery3 from "@/public/gallery3.png";
import seller_logo from "@/public/seller_logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }) {
  const [slug, setSlug] = useState("");
  const [selectedImage, setSelectedImage] = useState(phone_main);
  const swiperRef = useRef(null);

  // Gallery images array
  const galleryImages = [
    { id: 1, src: gallery1, alt: "Phone Front View" },
    { id: 2, src: gallery2, alt: "Phone Side View" },
    { id: 3, src: gallery3, alt: "Phone Back View" },
    { id: 4, src: phone_main, alt: "Phone Main View" },
    { id: 5, src: gallery1, alt: "Phone Display" },
    { id: 6, src: gallery2, alt: "Phone Features" },
    { id: 7, src: gallery3, alt: "Phone Camera" },
    { id: 8, src: phone_main, alt: "Phone Design" },
  ];

  useEffect(() => {
    // Get params
    const getParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };
    getParams();
  }, [params]);

  // Simple navigation functions
  const scrollLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollLeft -= 120;
    }
  };

  const scrollRight = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollLeft += 120;
    }
  };

  return (
    <section className="p-6 min-h-screen container mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Product Details for: {slug}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
        {/* Images Section - Left Side */}
        <div className="lg:col-span-5 ">
          <div className="rounded-2xl shadow-lg p-6 border border-purple-400">
            {/* Main Image */}
            <div className="images mb-6  rounded-xl ">
              <Image
                src={selectedImage}
                alt="Samsung Galaxy S22 Ultra 5G"
                className="w-full h-full object-contain rounded-lg"
                priority
              />
            </div>

            {/* Gallery Section - Custom Scroll */}
            <div className="galleries relative">
              <div
                ref={swiperRef}
                className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth py-2 px-1"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    onClick={() => setSelectedImage(image.src)}
                    className={`flex-shrink-0 group relative border-2 rounded-xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg ${
                      selectedImage === image.src
                        ? "border-purple-500 shadow-md scale-105"
                        : "border-gray-200 hover:border-purple-400"
                    }`}
                  >
                    <div className="w-24 h-24 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          console.log("Image failed to load:", image.src);
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                    <div
                      className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                        selectedImage === image.src
                          ? "border-purple-500 bg-opacity-10"
                          : "border-black bg-opacity-0 group-hover:bg-opacity-5"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Custom Navigation Buttons */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-purple-50 border border-gray-300 hover:border-purple-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 -ml-5"
              >
                <svg
                  className="w-5 h-5 text-gray-600 hover:text-purple-600"
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
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-purple-50 border border-gray-300 hover:border-purple-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 -mr-5"
              >
                <svg
                  className="w-5 h-5 text-gray-600 hover:text-purple-600"
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
        </div>

        {/* Rest of your component remains the same */}
        <div className="lg:col-span-4 space-y-6">
          {/* Product Info Card */}
          <div className=" h-full">
            <h6 className="text-sm text-gray-500 uppercase mb-4">
              Mobile & Accessories
            </h6>

            <div className="icons flex justify-between gap-2">
              <div className="title">
                <h2 className="md:text-3xl text-xl lh-4 font-bold text-gray-800 mb-3 ">
                  Samsung Galaxy s22 Ultra 5G
                </h2>
              </div>
              <div className="icons-all flex flex-row gap-2">
                <div className="compare">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.666667"
                      y="0.666667"
                      width="30.6667"
                      height="30.6667"
                      rx="7.33333"
                      stroke="#19073B"
                      stroke-width="1.33333"
                    />
                    <path
                      d="M7.92594 15.1061H23.417C23.6273 15.1061 23.8376 15.11 24.0478 15.1061H24.0753C24.3112 15.1061 24.5234 14.9587 24.6138 14.7445C24.7042 14.5283 24.6609 14.2689 24.4919 14.0999L23.9574 13.5654L22.6722 12.2802L21.11 10.7179L19.7658 9.37379C19.5477 9.15567 19.3355 8.93361 19.1114 8.71941L19.1016 8.70958C18.8835 8.49145 18.4826 8.47573 18.2684 8.70958C18.0522 8.9454 18.0345 9.31091 18.2684 9.5428L18.8029 10.0773L20.0881 11.3625L21.6504 12.9248L22.9945 14.2689C23.2126 14.4871 23.4249 14.7111 23.6489 14.9233L23.6587 14.9331C23.7983 14.5971 23.9358 14.263 24.0753 13.927H8.58426C8.37399 13.927 8.16372 13.925 7.95345 13.927H7.92594C7.61741 13.927 7.32264 14.1982 7.3364 14.5165C7.35016 14.8368 7.5958 15.1061 7.92594 15.1061ZM24.0793 16.8943H8.58819C8.37792 16.8943 8.16765 16.8904 7.95738 16.8943H7.92987C7.69405 16.8943 7.48182 17.0417 7.39142 17.2559C7.30103 17.4721 7.34426 17.7315 7.51326 17.9005L8.04778 18.435L9.33297 19.7202L10.8952 21.2825L12.2394 22.6266C12.4575 22.8447 12.6698 23.0668 12.8938 23.281L12.9036 23.2908C13.1217 23.5089 13.5226 23.5247 13.7368 23.2908C13.953 23.055 13.9707 22.6895 13.7368 22.4576L13.2023 21.9231L11.9171 20.6379L10.3548 19.0756L9.01069 17.7315C8.79256 17.5133 8.58033 17.2893 8.3563 17.0771L8.34648 17.0673C8.20695 17.4033 8.06939 17.7374 7.92987 18.0734H23.421C23.6312 18.0734 23.8415 18.0754 24.0518 18.0734H24.0793C24.3878 18.0734 24.6826 17.8022 24.6688 17.4839C24.6551 17.1636 24.4094 16.8943 24.0793 16.8943Z"
                      fill="#19073B"
                    />
                  </svg>
                </div>
                <div className="wishlist">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.666667"
                      y="0.666667"
                      width="30.6667"
                      height="30.6667"
                      rx="7.33333"
                      stroke="#19073B"
                      stroke-width="1.33333"
                    />
                    <path
                      d="M16.0563 23.5419L9.76093 16.9863C7.98771 15.1398 8.09937 12.1121 10.0034 10.4127C11.8923 8.7267 14.7564 9.05409 16.249 11.1266L16.5 11.475L16.751 11.1266C18.2437 9.05409 21.1077 8.7267 22.9966 10.4127C24.9006 12.1121 25.0123 15.1398 23.239 16.9863L16.9437 23.5419C16.6986 23.797 16.3014 23.797 16.0563 23.5419Z"
                      stroke="#19073B"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center text-yellow-400 text-sm mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 ml-2 text-sm py-2">
                (4.5/5) 71 Reviews
              </span>
            </div>

            {/* Price Section */}
            <div className="price mb-6">
              <div className="flex items-center gap-2 mb-5">
                <h4 className="text-3xl font-bold text-gray-800">৳60000</h4>
                <del className="text-lg text-gray-500">৳80000</del>
                <span className="text-red-600 font-semibold bg-red-50 px-2 py-1 rounded-lg">
                  -20%
                </span>
              </div>

              {/* Brand */}
              <div className="flex items-center gap-4 mb-5">
                <label className="text-sm font-medium text-gray-700 w-16">
                  Brand:
                </label>
                <span className="text-gray-800 bg-gray-100 px-3 py-1 rounded-lg">
                  samsung
                </span>
              </div>

              {/* Colors */}
              <div className="flex items-start gap-4 mb-6">
                <label className="text-sm font-medium text-gray-700 w-16 mt-1">
                  Color:
                </label>
                <div className="flex gap-3 flex-wrap">
                  {["red", "gray", "black", "white"].map((color) => (
                    <div
                      key={color}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-purple-500 transition-all duration-200 cursor-pointer shadow-sm flex items-center justify-center">
                        <span
                          className={`w-6 h-6 rounded-full ${
                            color === "white"
                              ? "bg-white border border-gray-300"
                              : color === "red"
                              ? "bg-red-500"
                              : color === "gray"
                              ? "bg-gray-500"
                              : "bg-black"
                          }`}
                        ></span>
                      </div>
                      <span className="text-xs text-gray-600 capitalize">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Variants */}
              <div className="flex items-start gap-4 mb-8">
                <label className="text-sm font-medium text-gray-700 w-16 mt-2">
                  Variant:
                </label>
                <div className="flex gap-2 flex-wrap">
                  {["64 GB", "128 GB", "256 GB"].map((variant) => (
                    <button
                      key={variant}
                      className="px-4 py-2 border-2 border-purple-200 bg-purple-50 text-purple-700 rounded-xl text-sm font-medium hover:bg-purple-100 hover:border-purple-300 transition-all duration-200 transform hover:scale-105"
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="qty-addto-cart flex items-center gap-4 mb-6">
                <div className="qty border-2 border-purple-200 bg-white rounded-lg flex items-center shadow-sm">
                  <button className="px-4 py-1 text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded-l-xl transition-colors">
                    -
                  </button>
                  <span className="px-4 py-1 border-l border-r border-purple-200 font-medium">
                    1
                  </span>
                  <button className="px-4 py-1 text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded-r-xl transition-colors">
                    +
                  </button>
                </div>
                <button className="group w-full flex items-center justify-center gap-2 border border-purple-600 text-black px-6 py-1 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.04] hover:shadow-lg active:scale-95">
                  <span className="flex items-center justify-center bg-white/20 group-hover:bg-white/30  rounded-lg backdrop-blur-sm transition">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.9994 10.0928C8.12507 10.0938 7.27741 9.80613 6.60077 9.27882C5.92412 8.75152 5.46034 8.01716 5.28838 7.2008C5.27468 7.11481 5.28077 7.02701 5.30623 6.94348C5.3317 6.85995 5.37593 6.78269 5.43586 6.71706C5.49579 6.65142 5.56999 6.59898 5.65332 6.56337C5.73665 6.52776 5.82711 6.50982 5.91844 6.51081C6.06854 6.50873 6.21448 6.55775 6.32999 6.64905C6.4455 6.74035 6.52299 6.86793 6.54849 7.0088C6.66715 7.54815 6.9771 8.03218 7.42627 8.3796C7.87545 8.72701 8.43649 8.91665 9.01515 8.91665C9.59381 8.91665 10.1549 8.72701 10.604 8.3796C11.0532 8.03218 11.3632 7.54815 11.4818 7.0088C11.5073 6.86793 11.5848 6.74035 11.7003 6.64905C11.8158 6.55775 11.9618 6.50873 12.1119 6.51081C12.2032 6.50982 12.2937 6.52776 12.377 6.56337C12.4603 6.59898 12.5345 6.65142 12.5944 6.71706C12.6544 6.78269 12.6986 6.85995 12.7241 6.94348C12.7495 7.02701 12.7556 7.11481 12.7419 7.2008C12.5689 8.02224 12.1005 8.7605 11.4174 9.2884C10.7342 9.81629 9.87912 10.1008 8.9994 10.0928Z"
                        fill="black"
                      />
                      <path
                        d="M14.6075 18.0001H3.39252C3.13615 18.0004 2.88239 17.951 2.64668 17.855C2.41097 17.759 2.19824 17.6183 2.02142 17.4415C1.84461 17.2647 1.70742 17.0555 1.61818 16.8266C1.52895 16.5977 1.48955 16.3539 1.50236 16.1101L2.01271 5.76618C2.03383 5.30244 2.24226 4.8644 2.59447 4.54352C2.94668 4.22265 3.41544 4.04375 3.90287 4.04419H14.0971C14.5846 4.04375 15.0533 4.22265 15.4055 4.54352C15.7577 4.8644 15.9662 5.30244 15.9873 5.76618L16.4976 16.1101C16.5105 16.3539 16.4711 16.5977 16.3818 16.8266C16.2926 17.0555 16.1554 17.2647 15.9786 17.4415C15.8018 17.6183 15.589 17.759 15.3533 17.855C15.1176 17.951 14.8639 18.0004 14.6075 18.0001ZM3.90287 5.25018C3.73577 5.25018 3.57551 5.31339 3.45735 5.42592C3.3392 5.53844 3.27281 5.69105 3.27281 5.85018L2.76247 16.1701C2.7582 16.2514 2.77133 16.3326 2.80108 16.4089C2.83082 16.4852 2.87655 16.555 2.93549 16.6139C2.99443 16.6728 3.06534 16.7197 3.14391 16.7517C3.22248 16.7837 3.30707 16.8002 3.39252 16.8001H14.6075C14.6929 16.8002 14.7775 16.7837 14.8561 16.7517C14.9347 16.7197 15.0056 16.6728 15.0645 16.6139C15.1234 16.555 15.1692 16.4852 15.1989 16.4089C15.2287 16.3326 15.2418 16.2514 15.2375 16.1701L14.7272 5.82618C14.7272 5.66705 14.6608 5.51444 14.5426 5.40192C14.4245 5.28939 14.2642 5.22618 14.0971 5.22618L3.90287 5.25018Z"
                        fill="black"
                      />
                      <path
                        d="M12.7794 4.64996H11.5193V3.59997C11.5193 2.96346 11.2538 2.35301 10.7811 1.90293C10.3085 1.45284 9.66747 1.19999 8.99907 1.19999C8.33067 1.19999 7.68964 1.45284 7.21701 1.90293C6.74438 2.35301 6.47886 2.96346 6.47886 3.59997V4.64996H5.21875V3.59997C5.21875 2.6452 5.61703 1.72953 6.32598 1.05441C7.03493 0.379282 7.99647 0 8.99907 0C10.0017 0 10.9632 0.379282 11.6722 1.05441C12.3811 1.72953 12.7794 2.6452 12.7794 3.59997V4.64996Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  Add To Cart
                </button>
              </div>

              {/* Buy Now */}
              <div className="buy-now w-full">
                <Link
                  href="/checkout"
                  className="bg-gradient-to-r from-purple-800 to-purple-600 text-white w-full py-1 rounded-lg font-medium hover:from-purple-900 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl block text-center shadow-md"
                >
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery & Seller Info - Right Side */}
        <div className="lg:col-span-3 space-y-6">
          {/* Delivery Options Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h6 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              Delivery Options
              <svg
                className="w-5 h-5 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </h6>

            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">Banani, Dhaka</span>
                </div>
                <button className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
                  change
                </button>
              </div>

              {/* Standard Delivery */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4a1 1 0 001-1v-3a1 1 0 00-1-1h-2.05a2.5 2.5 0 00-4.9 0H3V5a1 1 0 00-1-1z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Standard Delivery
                    </p>
                    <p className="text-xs text-gray-500">4-8 September</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-blue-600">70৳</span>
              </div>

              {/* Cash on Delivery */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Cash on Delivery
                </span>
              </div>

              <hr className="border-gray-200" />

              {/* Return & Warranty */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-800">
                    07 Days Easy Return
                  </span>
                </div>

                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-800">1 Year Warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seller Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="text-lg font-semibold text-gray-800 mb-4 block">
              Sold By
            </label>

            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <Image
                  src={seller_logo}
                  alt="Seller Logo"
                  width={70}
                  height={70}
                  className="object-cover bg-white rounded-full shadow-md p-2 border-2 border-purple-200"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Louis Vuitton</p>
                <button className="text-orange-500 text-sm font-medium flex items-center gap-1 mt-1 hover:text-orange-600 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                  <span>Chat Now</span>
                </button>
              </div>
            </div>

            <hr className="border-gray-200 mb-4" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Seller Ratings</p>
                <div className="flex items-center text-yellow-400 text-sm">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 ml-1">5.00</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600 mb-1">Ship On Time</p>
                  <p className="text-lg font-bold text-green-600">100%</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600 mb-1">Response Rate</p>
                  <p className="text-lg font-bold text-blue-600">90%</p>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-xl font-medium hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 mt-4">
                Visit Store
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.0054 10.414L7.39838 19.021L5.98438 17.607L14.5904 9H7.00538V7H18.0054V18H16.0054V10.414Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
