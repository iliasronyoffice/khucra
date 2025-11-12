"use client";
import Image from "next/image";
import Link from "next/link";
import samsung from "@/public/products/samsung.png";
import Breadcrumb from "@/app/components/layout/Breadcrumb";
import OrderSummary from "@/app/components/layout/OrderSummary";

export default function ViewCart() {
  return (
    <div className="container mx-auto px-3 sm:px-4 py-6 md:py-10">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Title */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold my-2">
          Your Cart
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-5">
          There are <span className="text-red-500 font-medium">02</span>{" "}
          products in your list
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Cart Table */}
        <div className="lg:col-span-8 border border-purple-200 rounded-2xl shadow-md bg-white overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-gray-50">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" className="rounded-2xl" />
              <span>Select All Items</span>
            </label>

            <button className="flex items-center gap-2 text-red-500 text-sm hover:text-red-600">
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1813 3.81799C10.0125 3.81799 9.85068 3.88503 9.73135 4.00436C9.61201 4.1237 9.54497 4.28555 9.54497 4.45432V11.5755C9.52672 11.8973 9.38205 12.1988 9.14249 12.4144C8.90292 12.63 8.58787 12.7423 8.26594 12.7266H3.18802C2.8661 12.7423 2.55104 12.63 2.31148 12.4144C2.07191 12.1988 1.92725 11.8973 1.90899 11.5755V4.45432C1.90899 4.28555 1.84195 4.1237 1.72262 4.00436C1.60328 3.88503 1.44143 3.81799 1.27266 3.81799C1.1039 3.81799 0.942044 3.88503 0.822709 4.00436C0.703373 4.1237 0.636331 4.28555 0.636331 4.45432V11.5755C0.654495 12.2349 0.933232 12.8602 1.4115 13.3145C1.88976 13.7688 2.52857 14.015 3.18802 13.9993H8.26594C8.92539 14.015 9.5642 13.7688 10.0425 13.3145C10.5207 12.8602 10.7995 12.2349 10.8176 11.5755V4.45432C10.8176 4.28555 10.7506 4.1237 10.6313 4.00436C10.5119 3.88503 10.3501 3.81799 10.1813 3.81799ZM10.8176 1.90899H8.27231V0.636331C8.27231 0.467566 8.20527 0.305712 8.08593 0.186377C7.96659 0.0670418 7.80474 0 7.63598 0H3.81799C3.64922 0 3.48737 0.0670418 3.36803 0.186377C3.2487 0.305712 3.18166 0.467566 3.18166 0.636331V1.90899H0.636331C0.467566 1.90899 0.305712 1.97604 0.186377 2.09537C0.0670418 2.21471 0 2.37656 0 2.54533C0 2.71409 0.0670418 2.87594 0.186377 2.99528C0.305712 3.11461 0.467566 3.18166 0.636331 3.18166H10.8176C10.9864 3.18166 11.1483 3.11461 11.2676 2.99528C11.3869 2.87594 11.454 2.71409 11.454 2.54533C11.454 2.37656 11.3869 2.21471 11.2676 2.09537C11.1483 1.97604 10.9864 1.90899 10.8176 1.90899ZM4.45432 1.90899V1.27266H6.99964V1.90899H4.45432Z"
                  fill="#E04533"
                />
                <path
                  d="M5.09298 10.1805V5.72618C5.09298 5.55741 5.02593 5.39556 4.9066 5.27622C4.78726 5.15689 4.62541 5.08984 4.45664 5.08984C4.28788 5.08984 4.12603 5.15689 4.00669 5.27622C3.88735 5.39556 3.82031 5.55741 3.82031 5.72618V10.1805C3.82031 10.3493 3.88735 10.5111 4.00669 10.6304C4.12603 10.7498 4.28788 10.8168 4.45664 10.8168C4.62541 10.8168 4.78726 10.7498 4.9066 10.6304C5.02593 10.5111 5.09298 10.3493 5.09298 10.1805ZM7.6383 10.1805V5.72618C7.6383 5.55741 7.57126 5.39556 7.45192 5.27622C7.33259 5.15689 7.17073 5.08984 7.00197 5.08984C6.8332 5.08984 6.67135 5.15689 6.55202 5.27622C6.43268 5.39556 6.36564 5.55741 6.36564 5.72618V10.1805C6.36564 10.3493 6.43268 10.5111 6.55202 10.6304C6.67135 10.7498 6.8332 10.8168 7.00197 10.8168C7.17073 10.8168 7.33259 10.7498 7.45192 10.6304C7.57126 10.5111 7.6383 10.3493 7.6383 10.1805Z"
                  fill="#E04533"
                />
              </svg>
              Clear All
            </button>
          </div>

          {/* Products Table */}
          <div className="overflow-x-auto   ">
            <table className="w-full text-sm text-left ">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs rounded-2xl">
                <tr>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4 text-center">Unit Price</th>
                  <th className="py-3 px-4 text-center">Quantity</th>
                  <th className="py-3 px-4 text-center">Subtotal</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {[1, 2,3].map((i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4 min-w-[220px]">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <input type="checkbox" />
                        <div className="w-16 h-16 sm:w-20 sm:h-20 relative border rounded-lg overflow-hidden">
                          <Image
                            src={samsung}
                            alt="Samsung Galaxy S22 Ultra"
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 line-clamp-2">
                            Samsung Galaxy S22 Ultra 5G
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Sold by{" "}
                            <Link
                              href="#"
                              className="text-indigo-600 hover:underline"
                            >
                              Louis Vuitton
                            </Link>
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 text-center">
                      <p className="font-semibold text-gray-800">৳60,000</p>
                      <p className="text-gray-400 text-xs line-through">
                        ৳80,000
                      </p>
                      <p className="text-red-500 text-xs">-20%</p>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center">
                        <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden shadow-sm w-fit bg-white">
                          {/* Decrease Button */}
                          <button
                            className="px-3 py-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            –
                          </button>

                          {/* Editable Quantity Input */}
                          <input
                            type="number"
                            min="1"
                            defaultValue="1"
                            className="w-14 px-0 py-2 text-gray-800 font-medium border-x border-gray-200 text-center outline-none focus:ring-0 focus:border-gray-200 appearance-none"
                          />

                          {/* Increase Button */}
                          <button
                            className="px-3 py-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 text-center font-semibold text-gray-800">
                      ৳60,000
                    </td>

                    <td className="py-4 px-4 text-center">
                      <button className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50">
                        <svg
                          width="12"
                          height="14"
                          viewBox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.1813 3.81799C10.0125 3.81799 9.85068 3.88503 9.73135 4.00436C9.61201 4.1237 9.54497 4.28555 9.54497 4.45432V11.5755C9.52672 11.8973 9.38205 12.1988 9.14249 12.4144C8.90292 12.63 8.58787 12.7423 8.26594 12.7266H3.18802C2.8661 12.7423 2.55104 12.63 2.31148 12.4144C2.07191 12.1988 1.92725 11.8973 1.90899 11.5755V4.45432C1.90899 4.28555 1.84195 4.1237 1.72262 4.00436C1.60328 3.88503 1.44143 3.81799 1.27266 3.81799C1.1039 3.81799 0.942044 3.88503 0.822709 4.00436C0.703373 4.1237 0.636331 4.28555 0.636331 4.45432V11.5755C0.654495 12.2349 0.933232 12.8602 1.4115 13.3145C1.88976 13.7688 2.52857 14.015 3.18802 13.9993H8.26594C8.92539 14.015 9.5642 13.7688 10.0425 13.3145C10.5207 12.8602 10.7995 12.2349 10.8176 11.5755V4.45432C10.8176 4.28555 10.7506 4.1237 10.6313 4.00436C10.5119 3.88503 10.3501 3.81799 10.1813 3.81799ZM10.8176 1.90899H8.27231V0.636331C8.27231 0.467566 8.20527 0.305712 8.08593 0.186377C7.96659 0.0670418 7.80474 0 7.63598 0H3.81799C3.64922 0 3.48737 0.0670418 3.36803 0.186377C3.2487 0.305712 3.18166 0.467566 3.18166 0.636331V1.90899H0.636331C0.467566 1.90899 0.305712 1.97604 0.186377 2.09537C0.0670418 2.21471 0 2.37656 0 2.54533C0 2.71409 0.0670418 2.87594 0.186377 2.99528C0.305712 3.11461 0.467566 3.18166 0.636331 3.18166H10.8176C10.9864 3.18166 11.1483 3.11461 11.2676 2.99528C11.3869 2.87594 11.454 2.71409 11.454 2.54533C11.454 2.37656 11.3869 2.21471 11.2676 2.09537C11.1483 1.97604 10.9864 1.90899 10.8176 1.90899ZM4.45432 1.90899V1.27266H6.99964V1.90899H4.45432Z"
                            fill="#E04533"
                          />
                          <path
                            d="M5.09298 10.1805V5.72618C5.09298 5.55741 5.02593 5.39556 4.9066 5.27622C4.78726 5.15689 4.62541 5.08984 4.45664 5.08984C4.28788 5.08984 4.12603 5.15689 4.00669 5.27622C3.88735 5.39556 3.82031 5.55741 3.82031 5.72618V10.1805C3.82031 10.3493 3.88735 10.5111 4.00669 10.6304C4.12603 10.7498 4.28788 10.8168 4.45664 10.8168C4.62541 10.8168 4.78726 10.7498 4.9066 10.6304C5.02593 10.5111 5.09298 10.3493 5.09298 10.1805ZM7.6383 10.1805V5.72618C7.6383 5.55741 7.57126 5.39556 7.45192 5.27622C7.33259 5.15689 7.17073 5.08984 7.00197 5.08984C6.8332 5.08984 6.67135 5.15689 6.55202 5.27622C6.43268 5.39556 6.36564 5.55741 6.36564 5.72618V10.1805C6.36564 10.3493 6.43268 10.5111 6.55202 10.6304C6.67135 10.7498 6.8332 10.8168 7.00197 10.8168C7.17073 10.8168 7.33259 10.7498 7.45192 10.6304C7.57126 10.5111 7.6383 10.3493 7.6383 10.1805Z"
                            fill="#E04533"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <OrderSummary />
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="mt-8 flex justify-center lg:justify-start">
        <Link
          href="/"
          className="bg-[#1a083b] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#2c1570] transition-colors w-full sm:w-auto text-center"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
