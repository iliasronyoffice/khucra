"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoClose, IoFilterSharp } from "react-icons/io5";
import product1 from "@/public/products/product1.png";
import product2 from "@/public/products/product2.png";
import product3 from "@/public/products/product3.png";
import product4 from "@/public/products/product4.png";
import product5 from "@/public/products/product5.png";
import product6 from "@/public/products/product6.png";
import product7 from "@/public/products/product7.png";
import product8 from "@/public/products/product8.png";
import ProductCard1 from "@/app/components/layout/ProductCard1";
import Breadcrumb from "@/app/components/layout/Breadcrumb";

export default function Search() {
  const [showFilter, setShowFilter] = useState(false);

  const products = [
    {
      id: 1,
      slug: "galaxy-s22-ultra",
      title: "Galaxy S22 Ultra",
      img: product1,
      category: "Mobile & Accessories",
      sold: "20",
      seller: "Gadget Haat",
      price: 60000,
      oldPrice: 65000,
      discount: "-15%",
    },
    {
      id: 2,
      slug: "2ghz-router",
      title: "2Ghz Router",
      img: product2,
      category: "Internet & Web",
      sold: "65",
      seller: "Tech Has",
      price: 1200,
    },
    {
      id: 3,
      slug: "cat-carrier-bag",
      title: "Cat Carrier Bag",
      img: product3,
      category: "Pet Accessories",
      sold: "32",
      seller: "Petly",
      price: 2000,
      tag: "New",
    },
    {
      id: 4,
      slug: "smart-hand-fan",
      title: "Smart Hand Fan",
      img: product4,
      category: "Electronics",
      sold: "100",
      seller: "Electro Boom",
      price: 400,
    },
    {
      id: 5,
      slug: "hand-scissor",
      title: "Hand Scissor",
      img: product5,
      category: "Home Appliance",
      sold: "32",
      seller: "Kacha Haat BD",
      price: 120,
      oldPrice: 160,
      discount: "-25%",
    },
    {
      id: 6,
      slug: "vr-box",
      title: "VR BOX 2.0",
      img: product6,
      category: "Gadget & Accessories",
      sold: "22",
      seller: "Tech Has",
      price: 1500,
    },
    {
      id: 7,
      slug: "television",
      title: "Television",
      img: product7,
      category: "tech & Accessories",
      sold: "22",
      seller: "Tech Has",
      price: 1500,
    },
    {
      id: 8,
      slug: "telivision2",
      title: "Television 2",
      img: product8,
      category: "tech & Accessories",
      sold: "22",
      seller: "Tech Has",
      price: 1500,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <Breadcrumb />

      <div className="flex flex-col lg:flex-row gap-6 relative">
        {/* ======= Sidebar (desktop only) ======= */}
        <aside className="hidden lg:block w-full lg:w-1/4 bg-white border border-gray-200 rounded-2xl shadow-sm p-4 space-y-6">
          <SidebarContent />
        </aside>

        {/* ======= Product Grid ======= */}
        <section className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
            {/* Title */}
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Search Product Name
            </h2>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {/* Mobile filter icon */}
              <button
                onClick={() => setShowFilter(true)}
                className="lg:hidden p-2 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center gap-1"
              >
                <IoFilterSharp size={18} />
                <span className="text-sm">Filter</span>
              </button>

              {/* Sort dropdown */}
              <select className="border rounded-md px-3 py-1 text-sm text-gray-700 w-full sm:w-auto lg:block">
                <option>Best Match</option>
                <option>Lowest Price</option>
                <option>Highest Price</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard1 key={product.id} item={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={`w-8 h-8 rounded-md text-sm ${
                  num === 1
                    ? "bg-purple-600 text-white"
                    : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </section>

        {/* ======= Mobile Slide-in Sidebar ======= */}
        {showFilter && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end lg:hidden">
            <div className="bg-white w-4/5 h-full shadow-xl p-4 animate-slideIn overflow-y-auto">
              <div className="flex items-center justify-between mb-4 border-b pb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  Filter Options
                </h3>
                <button
                  onClick={() => setShowFilter(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <IoClose size={20} />
                </button>
              </div>

              <SidebarContent />
            </div>
          </div>
        )}
      </div>

     
    </div>
  );
}

/* ========= Sidebar Filter Content ========= */
function SidebarContent() {
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
                width: `${((maxPrice - minPrice) / 100000) * 100}%`
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
                  top: "50%"
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
                  top: "50%"
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
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">৳</span>
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
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">৳</span>
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

/* ========= Reusable Filter Card ========= */
function FilterCard({ title, children }) {
  return (
    <div className="border border-gray-200 rounded-xl p-3">
      <details open>
        <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between">
          {title}
          <span className="text-gray-400">⌄</span>
        </summary>
        {children}
      </details>
    </div>
  );
}