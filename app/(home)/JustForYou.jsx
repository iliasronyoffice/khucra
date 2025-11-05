"use client";

import Image from "next/image";
import Link from "next/link";

import product1 from "../../public/products/product1.png";
import product2 from "../../public/products/product2.png";
import product3 from "../../public/products/product3.png";
import product4 from "../../public/products/product4.png";
import product5 from "../../public/products/product5.png";
import product6 from "../../public/products/product6.png";
import product7 from "../../public/products/product7.png";
import product8 from "../../public/products/product8.png";
import product9 from "../../public/products/2ghz.png";
import product10 from "../../public/products/automatic_switch.png";
import product11 from "../../public/products/defender.png";
import product12 from "../../public/products/funny_plush.png";
import product13 from "../../public/products/headphone.png";
import product14 from "../../public/products/Helicopter.png";
import product15 from "../../public/products/intelcore.png";
import product16 from "../../public/products/lenovo.png";
import product17 from "../../public/products/meter.png";
import product18 from "../../public/products/mobile_stand.png";
import product19 from "../../public/products/R5.png";
import product20 from "../../public/products/Rc.png";
import product21 from "../../public/products/Rx.png";
import product22 from "../../public/products/salnotes.png";
import product23 from "../../public/products/slide_sandal.png";
import product24 from "../../public/products/smart_pet.png";
import product25 from "../../public/products/walton_ac.png";
import product26 from "../../public/products/watch.png";

import { useEffect, useState } from "react";
import ProductCard1 from "../components/layout/ProductCard1";

export default function JustForYou() {
const allProducts = [
  {
    id: 1,
    title: "Galaxy S22 Ultra",
    slug: "galaxy-s22-ultra",
    img: product1,
    category: "Mobile & Accessories",
    sold: "20",
    seller: "Gadget Haat",
    price: 60000,
    oldPrice: 65000,
    discount: "-15%",
    tag: "New Arrivals",
  },
  {
    id: 2,
    title: "2Ghz Router",
    slug: "2ghz-router",
    img: product2,
    category: "Internet & Web",
    sold: "65",
    seller: "Tech Has",
    price: 1200,
    tag: "New Arrivals",
  },
  {
    id: 3,
    title: "Cat Carrier Bag",
    slug: "cat-carrier-bag",
    img: product3,
    category: "Pet Accessories",
    sold: "32",
    seller: "Petly",
    price: 2000,
    tag: "New Arrivals",
  },
  {
    id: 4,
    title: "Smart Hand Fan",
    slug: "smart-hand-fan",
    img: product4,
    category: "Electronics",
    sold: "100",
    seller: "Electro Boom",
    price: 400,
    tag: "New Arrivals",
  },
  {
    id: 5,
    title: "Hand Scissor",
    slug: "hand-scissor",
    img: product5,
    category: "Home Appliance",
    sold: "32",
    seller: "Kacha Haat BD",
    price: 120,
    oldPrice: 160,
    discount: "-25%",
    tag: "New Arrivals",
  },
  {
    id: 6,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0",
    img: product6,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "New Arrivals",
  },
  {
    id: 7,
    title: "Television",
    slug: "television",
    img: product7,
    category: "tech & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Trending Now",
  },
  {
    id: 8,
    title: "Television",
    slug: "television-2",
    img: product8,
    category: "tech & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Top Picks",
  },
  {
    id: 9,
    title: "Galaxy S22 Ultra",
    slug: "galaxy-s22-ultra-2",
    img: product9,
    category: "Mobile & Accessories",
    sold: "20",
    seller: "Gadget Haat",
    price: 60000,
    oldPrice: 65000,
    discount: "-15%",
    tag: "Top Picks",
  },
  {
    id: 10,
    title: "2Ghz Router",
    slug: "2ghz-router-2",
    img: product10,
    category: "Internet & Web",
    sold: "65",
    seller: "Tech Has",
    price: 1200,
    tag: "Top Picks",
  },
  {
    id: 11,
    title: "Cat Carrier Bag",
    slug: "cat-carrier-bag-2",
    img: product11,
    category: "Pet Accessories",
    sold: "32",
    seller: "Petly",
    price: 2000,
    tag: "Top Picks",
  },
  {
    id: 12,
    title: "Smart Hand Fan",
    slug: "smart-hand-fan-2",
    img: product12,
    category: "Electronics",
    sold: "100",
    seller: "Electro Boom",
    price: 400,
    tag: "Top Picks",
  },
  {
    id: 13,
    title: "Hand Scissor",
    slug: "hand-scissor-2",
    img: product13,
    category: "Home Appliance",
    sold: "32",
    seller: "Kacha Haat BD",
    price: 120,
    oldPrice: 160,
    discount: "-25%",
    tag: "Top Picks",
  },
  {
    id: 14,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-2",
    img: product14,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Top Picks",
  },
  {
    id: 15,
    title: "Television",
    slug: "television-3",
    img: product15,
    category: "tech & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Top Picks",
  },
  {
    id: 16,
    title: "Television",
    slug: "television-4",
    img: product16,
    category: "tech & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Top Picks",
  },
  {
    id: 17,
    title: "Galaxy S22 Ultra",
    slug: "galaxy-s22-ultra-3",
    img: product17,
    category: "Mobile & Accessories",
    sold: "20",
    seller: "Gadget Haat",
    price: 60000,
    oldPrice: 65000,
    discount: "-15%",
    tag: "Top Picks",
  },
  {
    id: 18,
    title: "2Ghz Router",
    slug: "2ghz-router-3",
    img: product18,
    category: "Internet & Web",
    sold: "65",
    seller: "Tech Has",
    price: 1200,
    tag: "Best Selling",
  },
  {
    id: 19,
    title: "Cat Carrier Bag",
    slug: "cat-carrier-bag-3",
    img: product19,
    category: "Pet Accessories",
    sold: "32",
    seller: "Petly",
    price: 2000,
    tag: "Best Selling",
  },
  {
    id: 20,
    title: "Smart Hand Fan",
    slug: "smart-hand-fan-3",
    img: product20,
    category: "Electronics",
    sold: "100",
    seller: "Electro Boom",
    price: 400,
    tag: "Best Selling",
  },
  {
    id: 21,
    title: "Hand Scissor",
    slug: "hand-scissor-3",
    img: product22,
    category: "Home Appliance",
    sold: "32",
    seller: "Kacha Haat BD",
    price: 120,
    oldPrice: 160,
    discount: "-25%",
    tag: "Best Selling",
  },
  {
    id: 22,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-3",
    img: product22,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Best Selling",
  },
  {
    id: 23,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-4",
    img: product23,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Best Selling",
  },
  {
    id: 24,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-5",
    img: product24,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Best Selling",
  },
  {
    id: 25,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-6",
    img: product25,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Best Selling",
  },
  {
    id: 26,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-7",
    img: product26,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Best Selling",
  },
  {
    id: 27,
    title: "Galaxy S22 Ultra",
    slug: "galaxy-s22-ultra-4",
    img: product1,
    category: "Mobile & Accessories",
    sold: "20",
    seller: "Gadget Haat",
    price: 60000,
    oldPrice: 65000,
    discount: "-15%",
    tag: "New Arrivals",
  },
  {
    id: 28,
    title: "2Ghz Router",
    slug: "2ghz-router-4",
    img: product2,
    category: "Internet & Web",
    sold: "65",
    seller: "Tech Has",
    price: 1200,
    tag: "New Arrivals",
  },
  {
    id: 29,
    title: "Cat Carrier Bag",
    slug: "cat-carrier-bag-4",
    img: product3,
    category: "Pet Accessories",
    sold: "32",
    seller: "Petly",
    price: 2000,
    tag: "New Arrivals",
  },
  {
    id: 30,
    title: "Smart Hand Fan",
    slug: "smart-hand-fan-4",
    img: product4,
    category: "Electronics",
    sold: "100",
    seller: "Electro Boom",
    price: 400,
    tag: "New Arrivals",
  },
  {
    id: 31,
    title: "Hand Scissor",
    slug: "hand-scissor-4",
    img: product5,
    category: "Home Appliance",
    sold: "32",
    seller: "Kacha Haat BD",
    price: 120,
    oldPrice: 160,
    discount: "-25%",
    tag: "New Arrivals",
  },
  {
    id: 32,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-8",
    img: product6,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "New Arrivals",
  },
  {
    id: 33,
    title: "Television",
    slug: "television-5",
    img: product7,
    category: "tech & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Trending Now",
  },
  {
    id: 34,
    title: "Television",
    slug: "television-6",
    img: product8,
    category: "tech & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Top Picks",
  },
  {
    id: 35,
    title: "Galaxy S22 Ultra",
    slug: "galaxy-s22-ultra-5",
    img: product9,
    category: "Mobile & Accessories",
    sold: "20",
    seller: "Gadget Haat",
    price: 60000,
    oldPrice: 65000,
    discount: "-15%",
    tag: "Top Picks",
  },
  {
    id: 36,
    title: "2Ghz Router",
    slug: "2ghz-router-5",
    img: product10,
    category: "Internet & Web",
    sold: "65",
    seller: "Tech Has",
    price: 1200,
    tag: "Top Picks",
  },
  {
    id: 37,
    title: "Cat Carrier Bag",
    slug: "cat-carrier-bag-5",
    img: product11,
    category: "Pet Accessories",
    sold: "32",
    seller: "Petly",
    price: 2000,
    tag: "Top Picks",
  },
  {
    id: 38,
    title: "Smart Hand Fan",
    slug: "smart-hand-fan-5",
    img: product12,
    category: "Electronics",
    sold: "100",
    seller: "Electro Boom",
    price: 400,
    tag: "Top Picks",
  },
  {
    id: 39,
    title: "Hand Scissor",
    slug: "hand-scissor-5",
    img: product13,
    category: "Home Appliance",
    sold: "32",
    seller: "Kacha Haat BD",
    price: 120,
    oldPrice: 160,
    discount: "-25%",
    tag: "Top Picks",
  },
  {
    id: 40,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-9",
    img: product14,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Top Picks",
  },
  {
    id: 41,
    title: "Television",
    slug: "television-7",
    img: product15,
    category: "tech & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Top Picks",
  },
  {
    id: 42,
    title: "Television",
    slug: "television-8",
    img: product16,
    category: "tech & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Top Picks",
  },
  {
    id: 43,
    title: "Galaxy S22 Ultra",
    slug: "galaxy-s22-ultra-6",
    img: product17,
    category: "Mobile & Accessories",
    sold: "20",
    seller: "Gadget Haat",
    price: 60000,
    oldPrice: 65000,
    discount: "-15%",
    tag: "Top Picks",
  },
  {
    id: 44,
    title: "2Ghz Router",
    slug: "2ghz-router-6",
    img: product18,
    category: "Internet & Web",
    sold: "65",
    seller: "Tech Has",
    price: 1200,
    tag: "Best Selling",
  },
  {
    id: 45,
    title: "Cat Carrier Bag",
    slug: "cat-carrier-bag-6",
    img: product19,
    category: "Pet Accessories",
    sold: "32",
    seller: "Petly",
    price: 2000,
    tag: "Best Selling",
  },
  {
    id: 46,
    title: "Smart Hand Fan",
    slug: "smart-hand-fan-6",
    img: product20,
    category: "Electronics",
    sold: "100",
    seller: "Electro Boom",
    price: 400,
    tag: "Best Selling",
  },
  {
    id: 47,
    title: "Hand Scissor",
    slug: "hand-scissor-6",
    img: product22,
    category: "Home Appliance",
    sold: "32",
    seller: "Kacha Haat BD",
    price: 120,
    oldPrice: 160,
    discount: "-25%",
    tag: "Best Selling",
  },
  {
    id: 48,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-10",
    img: product22,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Best Selling",
  },
  {
    id: 49,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-11",
    img: product23,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Best Selling",
  },
  {
    id: 50,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-12",
    img: product24,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Best Selling",
  },
  {
    id: 51,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-13",
    img: product25,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Best Selling",
  },
  {
    id: 52,
    title: "VR BOX 2.0",
    slug: "vr-box-2-0-14",
    img: product26,
    category: "Gadget & Accessories",
    sold: "22",
    seller: "Tech Has",
    price: 1500,
    tag: "Best Selling",
  },
];


  const tabs = ["Top Picks", "New Arrivals", "Best Selling", "Trending Now"];
  const [activeTab, setActiveTab] = useState("New Arrivals");
  const [visibleCount, setVisibleCount] = useState(10);

  // FIXED: Show all products since filtering by tag doesn't make sense with current data
  // const filteredProducts = allProducts;
  // OR if you want actual filtering, add appropriate tags to products:
  const filteredProducts = allProducts.filter(
    (p) => p.tag === activeTab || p.category.includes(activeTab)
  );

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-5">
          <h2 className="text-xl sm:text-xl md:text-3xl font-semibold">
            Just For You
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 bg-gray-100 p-1 rounded-xl w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setVisibleCount(10);
                }}
                className={`px-4 py-1 rounded-lg text-sm font-medium w-auto
          ${
            activeTab === tab
              ? "bg-white text-black shadow-md"
              : "text-gray-700 hover:bg-gray-200"
          }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {visibleProducts.map((item) => (
            <ProductCard1 key={item.id} item={item} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 bg-red-500 text-white px-2 py-2 rounded-xl hover:bg-red-600 transition"
            >
              {/* Your SVG */}
              <span className="bg-white p-2 rounded-md">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 15 15"
                  className=""
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
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
