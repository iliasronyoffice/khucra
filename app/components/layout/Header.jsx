"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { useState } from "react";
import AllCategoryModal from "./AllCategoryModal";
import LoginModal from "../userAuth/LoginModal ";
import RegisterModal from "../userAuth/RegisterModal";
import SearchBarDesktop from "./SearchBarDesktop";
import SearchBarMobile from "./SearchBarMobile";
import CartIcon from "../icons/CartIcon";
import WishlistIcon from "./WishlistIcon";
import UserIcon from "../icons/UserIcon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Books",
    "Home & Kitchen",
    "Toys & Games",
    "Sports & Outdoors",
    "Beauty & Personal Care",
    "Automotive",
    "Health & Wellness",
    "Office Supplies",
    "Pet Supplies",
    "Garden & Outdoors",
    "Music & Instruments",
    "Movies & TV Shows",
    "Video Games",
    "Jewelry",
    "Shoes",
    "Baby Products",
    "Grocery & Gourmet Food",
  ];

  return (
    <>
      <header className="bg-[#131921] text-white sticky top-0 z-50 shadow-md">
        {/* Top Row - Logo and Navigation Icons */}
        <div className="flex items-center justify-between px-2 py-3 lg:p-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src={logo}
                alt="logo"
                priority
                className="w-20 h-auto sm:w-28 md:w-32 lg:w-40 object-contain dark:invert"
              />
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <SearchBarDesktop
            open={open}
            setOpen={setOpen}
            selected={selected}
            setSelected={setSelected}
            categories={categories}
          />

          {/* Right Side Navigation */}
          <div className="flex items-center justify-end gap-3 lg:gap-6 text-xs lg:text-sm">
            {/* User Icon */}
            <div className="cursor-pointer leading-tight text-right">
              <div
                className="font-bold block cursor-pointer"
                onClick={() => setShowLogin(true)}
              >
              <UserIcon width={40} height={40}></UserIcon>
              </div>
            </div>

            {/* Wishlist Icon */}
            <div className="cursor-pointer flex items-center">
             <WishlistIcon width={21} height={19}></WishlistIcon>
            </div>

            {/* Cart Icon */}
            <div className="relative flex items-center cursor-pointer">
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
             <CartIcon width={24} height={24}></CartIcon>
            </div>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <SearchBarMobile
          open={open}
          setOpen={setOpen}
          selected={selected}
          setSelected={setSelected}
          categories={categories}
        />

        {/* Bottom Navigation Menu */}
        <nav className="bg-[#232F3E] text-sm px-1 lg:px-4 py-2 flex items-center gap-3 lg:gap-4 overflow-x-auto whitespace-nowrap">
          <AllCategoryModal />
          <a href="#" className="hover:underline px-2 py-1 text-xs lg:text-sm">
            Become a Seller
          </a>
          <a href="#" className="hover:underline px-2 py-1 text-xs lg:text-sm">
            Track Order
          </a>
          <a href="#" className="hover:underline px-2 py-1 text-xs lg:text-sm">
            Need Help?
          </a>
        </nav>
      </header>
      
      {/* ------------ Modals ------------ */}
      <LoginModal
        open={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitch={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />

      <RegisterModal
        open={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitch={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
      />
    </>
  );
}