"use client";
import { useRef, useState } from "react";
import FilterCard from "./FilterCard";

/* ========= Sidebar Filter Content ========= */
export default function SidebarContent() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);

  const minSliderRef = useRef(null);
  const maxSliderRef = useRef(null);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1000);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1000);
    setMaxPrice(value);
  };

  const handleMinInput = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice);
    setMinPrice(isNaN(value) ? 0 : value);
  };

  const handleMaxInput = (e) => {
    const value = Math.max(Number(e.target.value), minPrice);
    setMaxPrice(isNaN(value) ? 50000 : value);
  };

  return (
    <>
      <h3 className="text-gray-800 font-semibold text-lg border-b pb-3 lg:block hidden">
        Filter Options
      </h3>

      {/* Categories */}
      <FilterCard title="Categories">
        <ul className="mt-2 space-y-1 text-gray-600 text-sm">
          {[
            "Home Appliances",
            "Electronics",
            "Mobiles",
            "Laptop",
            "Toys",
            "Gaming",
          ].map((cat) => (
            <li key={cat} className="flex items-center gap-2">
              <input type="checkbox" id={cat} className="accent-purple-600" />
              <label htmlFor={cat}>{cat}</label>
            </li>
          ))}
        </ul>
      </FilterCard>

      {/* Price Range - SIMPLE DUAL SLIDER */}
      <FilterCard title="Price Range">
        <div className="mt-3">
          {/* Simple Dual Range Slider */}
          <div className="relative py-4">
            {/* Background Track */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2"></div>

            {/* Selected Range */}
            <div
              className="absolute top-1/2 h-2 bg-purple-500 rounded-full transform -translate-y-1/2"
              style={{
                left: `${(minPrice / 100000) * 100}%`,
                width: `${((maxPrice - minPrice) / 100000) * 100}%`,
              }}
            ></div>

            {/* Min Price Slider */}
            <div className="relative">
              <input
                ref={minSliderRef}
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={minPrice}
                onChange={handleMinChange}
                className="absolute w-full h-2 opacity-0 cursor-pointer z-20"
              />
              <div
                className="absolute w-5 h-5 bg-white border-2 border-purple-500 rounded-full shadow cursor-grab z-30 transform -translate-y-1/2 hover:scale-110"
                style={{
                  left: `calc(${(minPrice / 100000) * 100}% - 10px)`,
                  top: "50%",
                }}
              ></div>
            </div>

            {/* Max Price Slider */}
            <div className="relative">
              <input
                ref={maxSliderRef}
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={maxPrice}
                onChange={handleMaxChange}
                className="absolute w-full h-2 opacity-0 cursor-pointer z-20"
              />
              <div
                className="absolute w-5 h-5 bg-white border-2 border-purple-500 rounded-full shadow cursor-grab z-30 transform -translate-y-1/2 hover:scale-110"
                style={{
                  left: `calc(${(maxPrice / 100000) * 100}% - 10px)`,
                  top: "50%",
                }}
              ></div>
            </div>
          </div>

          {/* Price Labels */}
          <div className="flex justify-between text-xs text-gray-500 mt-2 mb-4">
            <span>৳0</span>
            <span>৳100,000</span>
          </div>

          {/* Price Inputs */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  ৳
                </span>
                <input
                  type="number"
                  value={minPrice}
                  onChange={handleMinInput}
                  className="w-full border border-gray-300 rounded-lg py-2 pl-8 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="0"
                  max="100000"
                />
              </div>
            </div>
            <span className="text-gray-500 text-sm">to</span>
            <div className="flex-1">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  ৳
                </span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={handleMaxInput}
                  className="w-full border border-gray-300 rounded-lg py-2 pl-8 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="0"
                  max="100000"
                />
              </div>
            </div>
          </div>
        </div>
      </FilterCard>

      {/* Brand */}
      <FilterCard title="Brand">
        <ul className="mt-2 space-y-1 text-sm text-gray-600 max-h-32 overflow-y-auto pr-2">
          {["Samsung", "Walton", "Lenovo", "HP", "Asus", "Xiaomi"].map(
            (brand) => (
              <li key={brand} className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-600" />
                <span>{brand}</span>
              </li>
            )
          )}
        </ul>
      </FilterCard>

      {/* Rating */}
      <FilterCard title="Rating">
        <div className="mt-2 space-y-1 text-sm">
          {[5, 4, 3, 2, 1].map((r) => (
            <div key={r} className="flex items-center gap-1 text-yellow-500">
              {"★".repeat(r)}
              <span className="text-gray-500 ml-1">& up</span>
            </div>
          ))}
        </div>
      </FilterCard>

      {/* Color Family */}
      <FilterCard title="Color Family">
        <ul className="mt-2 space-y-1 text-gray-600 text-sm">
          {["Black", "White", "Blue", "Gray", "Green"].map((color) => (
            <li key={color} className="flex items-center gap-2">
              <input type="checkbox" className="accent-purple-600" />
              <span>{color}</span>
            </li>
          ))}
        </ul>
      </FilterCard>

      {/* Deals & Offers */}
      <FilterCard title="Deals & Offers">
        <ul className="mt-2 space-y-1 text-gray-600 text-sm">
          {["Flash Sale", "Free Delivery", "Discount", "Buy 1 Get 1"].map(
            (deal) => (
              <li key={deal} className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-600" />
                <span>{deal}</span>
              </li>
            )
          )}
        </ul>
      </FilterCard>

      {/* Warranty */}
      <FilterCard title="Warranty Type">
        <ul className="mt-2 space-y-1 text-gray-600 text-sm">
          {["No Warranty", "6 Months", "1 Year", "2 Years"].map((type) => (
            <li key={type} className="flex items-center gap-2">
              <input type="checkbox" className="accent-purple-600" />
              <span>{type}</span>
            </li>
          ))}
        </ul>
      </FilterCard>
    </>
  );
}