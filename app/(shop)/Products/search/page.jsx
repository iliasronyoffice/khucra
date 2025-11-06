"use client";
import { useState } from "react";
import Image from "next/image";

export default function Search() {
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });


  const products = [
    {
      id: 1,
      slug:"galaxy-s22-ultra",
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
      slug:"2ghz-router",
      title: "2Ghz Router",
      img: product2,
      category: "Internet & Web",
      sold: "65",
      seller: "Tech Has",
      price: 1200,
    },
    {
      id: 3,
      slug:"cat-carrier-bag",
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
      slug:"smart-hand-fan",
      title: "Smart Hand Fan",
      img: product4,
      category: "Electronics",
      sold: "100",
      seller: "Electro Boom",
      price: 400,
    },
    {
      id: 5,
      slug:"hand-scissor",
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
      slug:"vr-box",
      title: "VR BOX 2.0",
      img: product6,
      category: "Gadget & Accessories",
      sold: "22",
      seller: "Tech Has",
      price: 1500,
    },
    {
      id: 7,
      slug:"television",
      title: "Television",
      img: product7,
      category: "tech & Accessories",
      sold: "22",
      seller: "Tech Has",
      price: 1500,
    },
    {
      id: 8,
      slug:"telivision2",
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
      <p className="text-sm text-gray-500 mb-4">
        Home / <span className="text-gray-800 font-medium">All Categories</span>
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filter Sidebar */}
        <aside className="w-full lg:w-1/4 border rounded-2xl p-4 space-y-6 bg-white shadow-sm">
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Categories</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              {["Home Appliances", "Electronics", "Mobiles", "Laptop", "Toys"].map((cat) => (
                <li key={cat} className="flex items-center gap-2">
                  <input type="checkbox" id={cat} className="accent-purple-600" />
                  <label htmlFor={cat}>{cat}</label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Price Range</h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                className="border rounded-md w-20 px-2 py-1 text-sm"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: e.target.value })
                }
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                className="border rounded-md w-20 px-2 py-1 text-sm"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: e.target.value })
                }
              />
            </div>
          </div>

          {/* Brand */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Brand</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              {["Samsung", "Walton", "Lenovo", "HP", "Asus"].map((brand) => (
                <li key={brand} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-purple-600" />
                  <span>{brand}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rating */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Rating</h3>
            {[5, 4, 3, 2].map((r) => (
              <div key={r} className="flex items-center gap-1 text-yellow-500 text-sm">
                {"★".repeat(r)}
                <span className="text-gray-500 ml-1">& up</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Search Product Name</h2>
            <select className="border rounded-md px-3 py-1 text-sm text-gray-700">
              <option>Best Match</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl bg-white shadow-sm hover:shadow-md transition p-3 relative"
              >
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {product.tag}
                  </span>
                )}
                <div className="aspect-square relative mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {product.name}
                </h4>
                <p className="text-purple-700 font-semibold mt-1">
                  {product.price}
                </p>
              </div>
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
      </div>
    </div>
  );
}
