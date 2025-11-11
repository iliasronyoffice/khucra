"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import samsung from "@/public/products/samsung.png";
import lenovo from "@/public/products/lenovo.png";
import Breadcrumb from "@/app/components/layout/Breadcrumb";

export default function TrackOrder() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [showMobileTabs, setShowMobileTabs] = useState(false);

  const tabs = ["ALL", "TO PAY", "TO SHIP", "TO RECEIVE", "TO REVIEW"];

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 md:py-8">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">My Order</h1>

      {/* Search Bar */}
    <div className="mb-4 md:mb-6 border border-purple-200 rounded-xl sm:rounded-2xl p-2 shadow-sm">
  <div className="relative">
    <input
      type="text"
      placeholder="Search by Order Code, Product Name, Sellers Name"
      className="w-full rounded-lg bg-[#f8f7ff] py-2 md:py-3 pl-9 pr-4 text-xs sm:text-sm focus:outline-none"
    />
    <div className="absolute inset-y-0 left-3 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
        />
      </svg>
    </div>
  </div>
</div>


      {/* Tabs - Mobile Collapsible */}
      <div className="mb-6 md:mb-8">
        {/* Mobile Tab Header */}
        <div className="lg:hidden bg-gray-100 rounded-lg p-3">
          <button
            onClick={() => setShowMobileTabs(!showMobileTabs)}
            className="w-full flex items-center justify-between"
          >
            <span className="text-sm font-medium">Filter: {activeTab}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                showMobileTabs ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Mobile Tabs Dropdown */}
        {showMobileTabs && (
          <div className="lg:hidden bg-white border border-gray-200 rounded-lg mt-2 p-2 shadow-lg">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveTab(tab);
                  setShowMobileTabs(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium mb-1 last:mb-0 ${
                  tab === activeTab
                    ? "bg-[#1a083b] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Desktop Tabs */}
        <div className="hidden lg:inline-flex gap-3 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 rounded-lg text-xs font-medium ${
                tab === activeTab
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Order Items */}
      <div className="space-y-3 sm:space-y-4 md:space-y-6">
        {/* Item 1 */}
        <div className="border-b border-gray-200  p-3 sm:p-4 ">
          {/* Mobile Compact Header */}
          <div className="flex items-center justify-between mb-3 sm:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs font-medium text-green-600">Paid</span>
            </div>
            <span className="text-xs font-semibold text-main">To Receive</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4">
            {/* Product Info */}
            <div className="flex items-start gap-3 lg:w-[45%] xl:w-[40%]">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 relative flex-shrink-0 border border-gray-200 rounded-xl">
                <Image
                  src={samsung}
                  alt="Samsung Galaxy S22Ultra 5G"
                  fill
                  className="object-contain rounded-lg p-1"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-semibold line-clamp-2">
                  Samsung Galaxy S22Ultra 5G.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Sold by:{" "}
                  <Link href="#" className="text-indigo-600 hover:underline">
                    Louis Vuitton
                  </Link>
                </p>
                
                {/* Mobile Price & Delivery */}
                <div className="sm:hidden mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">৳60000</span>
                    <span className="text-xs text-gray-400 line-through">৳80000</span>
                    <span className="text-xs text-red-500">-20%</span>
                  </div>
                  <p className="text-xs text-main font-medium mt-1">Get by 4–8 Sep</p>
                </div>
              </div>
            </div>

            {/* Right side info - Better gap distribution */}
            <div className="flex flex-1 lg:flex-none lg:flex-row lg:items-center lg:justify-between lg:w-[55%] xl:w-[60%] lg:gap-2 xl:gap-4">
              {/* Status */}
              <div className="hidden sm:block min-w-[120px] lg:min-w-[100px] xl:min-w-[120px] text-center">
                <p className="text-sm flex items-center gap-1 text-main font-bold justify-center">
                  • <span>To Receive</span>
                </p>
              </div>

              {/* Price */}
              <div className="hidden sm:block text-center min-w-[100px] lg:min-w-[90px] xl:min-w-[100px]">
                <p className="text-base font-semibold text-gray-800">৳60000</p>
                <p className="text-sm text-gray-400 line-through">৳80000</p>
                <p className="text-xs text-red-500">-20%</p>
              </div>

              {/* Payment Status */}
              <div className="hidden sm:flex flex-col items-center min-w-[100px] lg:min-w-[80px] xl:min-w-[100px]">
                <span className="text-xs bg-green-600 text-white px-3 py-1 rounded-md font-medium">
                  Paid
                </span>
              </div>

              {/* Delivery Date */}
              <div className="hidden sm:block min-w-[120px] lg:min-w-[100px] xl:min-w-[120px] text-center">
                <p className="text-xs text-main font-bold">Get by 4–8 Sep</p>
              </div>

              {/* Action Button */}
              <div className="flex justify-center lg:justify-end min-w-[100px] lg:min-w-[90px] xl:min-w-[100px]">
                <button className="bg-[#1a083b] text-white text-xs px-3 py-2 rounded-md hover:bg-[#2c1570] whitespace-nowrap">
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="border-b border-gray-200  p-3 sm:p-4 ">
          {/* Mobile Compact Header */}
          <div className="flex items-center justify-between mb-3 sm:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-xs font-medium text-red-600">Due</span>
            </div>
            <span className="text-xs font-semibold text-main">To Pay</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4">
            {/* Product Info */}
            <div className="flex items-start gap-3 lg:w-[45%] xl:w-[40%]">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 relative flex-shrink-0 border border-gray-200 rounded-xl">
                <Image
                  src={lenovo}
                  alt="Lenovo Legion Slim 7i Core i7"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-semibold line-clamp-2">
                  Lenovo Legion Slim 7i Core i7 12th Gen RTX 3060.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Sold by:{" "}
                  <Link href="#" className="text-indigo-600 hover:underline">
                    Louis Vuitton
                  </Link>
                </p>
                
                {/* Mobile Price & Delivery */}
                <div className="sm:hidden mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">৳120000</span>
                    <span className="text-xs text-gray-400 line-through">৳140000</span>
                    <span className="text-xs text-red-500">-20%</span>
                  </div>
                  <p className="text-xs text-main font-medium mt-1">Get by 1 Sep</p>
                </div>
              </div>
            </div>

            {/* Right side info - Better gap distribution */}
            <div className="flex flex-1 lg:flex-none lg:flex-row lg:items-center lg:justify-between lg:w-[55%] xl:w-[60%] lg:gap-2 xl:gap-4">
              {/* Status */}
              <div className="hidden sm:block min-w-[120px] lg:min-w-[100px] xl:min-w-[120px] text-center">
                <p className="text-sm flex items-center gap-1 text-main font-bold justify-center">
                  • <span>To Pay</span>
                </p>
              </div>

              {/* Price */}
              <div className="hidden sm:block text-center min-w-[100px] lg:min-w-[90px] xl:min-w-[100px]">
                <p className="text-base font-semibold text-gray-800">৳120000</p>
                <p className="text-sm text-gray-400 line-through">৳140000</p>
                <p className="text-xs text-red-500">-20%</p>
              </div>

              {/* Payment Status */}
              <div className="hidden sm:flex flex-col items-center min-w-[100px] lg:min-w-[80px] xl:min-w-[100px]">
                <span className="text-xs bg-red-600 text-white px-3 py-1 rounded-md font-medium">
                  Due
                </span>
              </div>

              {/* Delivery Date */}
              <div className="hidden sm:block min-w-[120px] lg:min-w-[100px] xl:min-w-[120px] text-center">
                <p className="text-xs text-main font-bold">Get by 1 Sep</p>
              </div>

              {/* Action Button */}
              <div className="flex justify-center lg:justify-end min-w-[100px] lg:min-w-[90px] xl:min-w-[100px]">
                <button className="bg-[#1a083b] text-white text-xs px-3 py-2 rounded-md hover:bg-[#2c1570] whitespace-nowrap">
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="mt-6 md:mt-8 flex justify-center lg:justify-start">
        <button className="bg-[#1a083b] text-white px-6 py-3 rounded-md text-sm hover:bg-[#2c1570] w-full sm:w-auto">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}