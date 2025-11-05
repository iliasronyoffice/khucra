"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import product1 from "../../public/products/product1.png";
import product2 from "../../public/products/product2.png";
import product3 from "../../public/products/product3.png";
import product4 from "../../public/products/product4.png";
import product5 from "../../public/products/product5.png";
import product6 from "../../public/products/product6.png";
import product7 from "../../public/products/product7.png";
import product8 from "../../public/products/product8.png";
import { useEffect } from "react";
import ProductCard1 from "../components/layout/ProductCard1";

export default function CategoryWiseProducts() {
  // Selected category IDs
  const selectedCategoryIds = [1, 2, 4, 5];

  // Category data with names
  const categories = [
    { id: 1, name: "Mobile & Accessories" },
    { id: 2, name: "Internet & Web" },
    { id: 3, name: "Pet Accessories" },
    { id: 4, name: "Electronics" },
    { id: 5, name: "Home Appliance" },
    { id: 6, name: "Gadget & Accessories" },
    { id: 7, name: "Tech & Accessories" },
  ];

  const products = [
    {
      id: 1,
      title: "Galaxy S22 Ultra",
      img: product1,
      category: "Mobile & Accessories",
      categoryId: 1,
      sold: "20",
      seller: "Gadget Haat",
      price: 60000,
      oldPrice: 65000,
      discount: "-15%",
    },
    {
      id: 2,
      title: "2Ghz Router",
      img: product2,
      category: "Internet & Web",
      categoryId: 2,
      sold: "65",
      seller: "Tech Has",
      price: 1200,
    },
    {
      id: 3,
      title: "Cat Carrier Bag",
      img: product3,
      category: "Pet Accessories",
      categoryId: 3,
      sold: "32",
      seller: "Petly",
      price: 2000,
      tag: "New",
    },
    {
      id: 4,
      title: "Smart Hand Fan",
      img: product4,
      category: "Electronics",
      categoryId: 4,
      sold: "100",
      seller: "Electro Boom",
      price: 400,
    },
    {
      id: 5,
      title: "Hand Scissor",
      img: product5,
      category: "Home Appliance",
      categoryId: 5,
      sold: "32",
      seller: "Kacha Haat BD",
      price: 120,
      oldPrice: 160,
      discount: "-25%",
    },
    {
      id: 6,
      title: "VR BOX 2.0",
      img: product6,
      category: "Gadget & Accessories",
      categoryId: 6,
      sold: "22",
      seller: "Tech Has",
      price: 1500,
    },
    {
      id: 7,
      title: "Television",
      img: product7,
      category: "Tech & Accessories",
      categoryId: 7,
      sold: "22",
      seller: "Tech Has",
      price: 1500,
    },
    {
      id: 8,
      title: "Wireless Headphones",
      img: product8,
      category: "Mobile & Accessories",
      categoryId: 1,
      sold: "45",
      seller: "Audio Tech",
      price: 2500,
      oldPrice: 3000,
      discount: "-17%",
    },
    {
      id: 9,
      title: "5G Router",
      img: product1,
      category: "Internet & Web",
      categoryId: 2,
      sold: "28",
      seller: "NetPro",
      price: 1800,
    },
    {
      id: 10,
      title: "Dog Bed",
      img: product2,
      category: "Pet Accessories",
      categoryId: 3,
      sold: "15",
      seller: "Petly",
      price: 1500,
      tag: "Hot",
    },
    {
      id: 11,
      title: "Smart Watch",
      img: product3,
      category: "Electronics",
      categoryId: 4,
      sold: "75",
      seller: "Tech Gear",
      price: 3500,
      oldPrice: 4000,
      discount: "-13%",
    },
    {
      id: 12,
      title: "Blender",
      img: product4,
      category: "Home Appliance",
      categoryId: 1,
      sold: "40",
      seller: "Home Pro",
      price: 2200,
    },

     {
      id: 13,
      title: "Galaxy S22 Ultra",
      img: product1,
      category: "Mobile & Accessories",
      categoryId: 1,
      sold: "20",
      seller: "Gadget Haat",
      price: 60000,
      oldPrice: 65000,
      discount: "-15%",
    },
    {
      id: 14,
      title: "2Ghz Router",
      img: product2,
      category: "Internet & Web",
      categoryId: 2,
      sold: "65",
      seller: "Tech Has",
      price: 1200,
    },
    {
      id: 15,
      title: "Cat Carrier Bag",
      img: product3,
      category: "Pet Accessories",
      categoryId: 1,
      sold: "32",
      seller: "Petly",
      price: 2000,
      tag: "New",
    },
    {
      id: 16,
      title: "Smart Hand Fan",
      img: product4,
      category: "Electronics",
      categoryId: 1,
      sold: "100",
      seller: "Electro Boom",
      price: 400,
    },
    {
      id: 17,
      title: "Hand Scissor",
      img: product5,
      category: "Home Appliance",
      categoryId: 2,
      sold: "32",
      seller: "Kacha Haat BD",
      price: 120,
      oldPrice: 160,
      discount: "-25%",
    },
    {
      id: 18,
      title: "VR BOX 2.0",
      img: product6,
      category: "Gadget & Accessories",
      categoryId: 1,
      sold: "22",
      seller: "Tech Has",
      price: 1500,
    },
    {
      id: 19,
      title: "Television",
      img: product7,
      category: "Tech & Accessories",
      categoryId: 2,
      sold: "22",
      seller: "Tech Has",
      price: 1500,
    },
    {
      id: 20,
      title: "Wireless Headphones",
      img: product8,
      category: "Mobile & Accessories",
      categoryId: 1,
      sold: "45",
      seller: "Audio Tech",
      price: 2500,
      oldPrice: 3000,
      discount: "-17%",
    },
    {
      id: 21,
      title: "5G Router",
      img: product1,
      category: "Internet & Web",
      categoryId: 2,
      sold: "28",
      seller: "NetPro",
      price: 1800,
    },
    {
      id: 22,
      title: "Dog Bed",
      img: product2,
      category: "Pet Accessories",
      categoryId: 2,
      sold: "15",
      seller: "Petly",
      price: 1500,
      tag: "Hot",
    },
    {
      id: 23,
      title: "Smart Watch",
      img: product3,
      category: "Electronics",
      categoryId: 1,
      sold: "75",
      seller: "Tech Gear",
      price: 3500,
      oldPrice: 4000,
      discount: "-13%",
    },
    {
      id: 24,
      title: "Blender",
      img: product4,
      category: "Home Appliance",
      categoryId: 2,
      sold: "40",
      seller: "Home Pro",
      price: 2200,
    },
  ];

  // Filter categories based on selected IDs
  const selectedCategories = categories.filter(category => 
    selectedCategoryIds.includes(category.id)
  );

  // Get products for each category
  const getProductsByCategory = (categoryId) => {
    return products.filter(product => product.categoryId === categoryId);
  };

  // Initialize progress bars for each swiper
  useEffect(() => {
    selectedCategories.forEach((category) => {
      const swiper = document.querySelector(`.category-swiper-${category.id}`)?.swiper;
      if (!swiper) return;

      swiper.on("slideChange", () => {
        const productsInCategory = getProductsByCategory(category.id);
        const progress =
          (swiper.activeIndex / (productsInCategory.length - swiper.params.slidesPerView)) *
          100;
        const bar = document.getElementById(`category-progress-${category.id}`);
        if (bar) bar.style.width = `${Math.min(progress, 100)}%`;
      });
    });
  }, [selectedCategories]);

  return (
    <div>
      {selectedCategories.map((category) => {
        const categoryProducts = getProductsByCategory(category.id);
        
        if (categoryProducts.length === 0) return null;

        return (
          <div key={category.id} className="category-product-section container mx-auto px-4 py-8">
            <div className="category-header flex justify-between items-center">
              <div className="category-title">
                <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
              </div>
              <div className="see-all-section">
                <span className="flex items-center gap-2 cursor-pointer bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition">
                  <span className="bg-white p-2 rounded-md">
                    <svg
                      width="10"
                      height="10"
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
                  <Link href={`/category/${category.id}`} className="hover:underline">
                    See All
                  </Link>
                </span>
              </div>
            </div>

            <div className="container mx-auto px-4 pb-12">
              <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 6500 }}
                spaceBetween={20}
                slidesPerView={6}
                navigation={false}
                pagination={false}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 5 },
                  1280: { slidesPerView: 6 },
                }}
                className={`category-swiper-${category.id}`}
              >
                {categoryProducts.map((item) => (
                  <SwiperSlide key={item.id}>
                    <ProductCard1 item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Bottom Indicator Line for each category */}
              <div className="w-full h-[2px] bg-gray-200 mt-6">
                <div 
                  id={`category-progress-${category.id}`} 
                  className="h-full bg-black w-0 transition-all duration-300"
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}