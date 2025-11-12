"use client";
import React from "react";

export default function OrderSummary() {
  return (
    <div className="border border-purple-200 shadow-lg rounded-2xl p-4 bg-white">
      {/* Header */}
      <h3 className="text-base font-semibold border-b border-gray-200 pb-2 mb-4">
        Order Summary
      </h3>

      {/* Summary Details */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-700">
          <span>Products Selected</span>
          <span className="text-red-500 font-medium">01</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span>৳1,20000</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Shipping Fee</span>
          <span>৳140</span>
        </div>

        {/* Voucher */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full">
          <input
            type="text"
            placeholder="Enter voucher code"
            className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
          <button className="bg-main cursor-pointer text-white text-sm px-5 py-2 rounded-xl hover:bg-purple-700 transition-colors w-full sm:w-auto">
            Apply
          </button>
        </div>
      </div>

      <hr className="my-5 border-gray-300" />

      {/* Total */}
      <div className="flex justify-between text-base font-semibold text-gray-800 mb-6">
        <span>Total</span>
        <span>৳1,20140</span>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-red-500 text-white px-2 py-2 my-3 rounded-xl font-medium uppercase flex items-center justify-between gap-2 hover:bg-red-600 transition-colors">
        <span className="font-bold"> Proceed to Checkout</span>
        <span className="bg-white text-black p-1.5 rounded-md">
          <svg
            width="16"
            height="16"
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
      </button>
    </div>
  );
}
