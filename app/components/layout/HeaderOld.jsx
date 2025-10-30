"use client";

import Link from "next/link";
import {
  FaSearch,
  FaBars,
} from "react-icons/fa";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#131921] text-white">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left - Logo */}
        <div className="flex items-center gap-8 w-40">
          <Link href="/" className="text-2xl font-bold text-yellow-400">
            <Image
              className="dark:invert"
              src={logo}
              alt="logo"
              width={100}
              height={20}
              priority
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 mx-4">
          <select className="hidden sm:block bg-gray-100 text-gray-700 text-sm px-2 border-r border-gray-300 rounded-l-md">
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Books</option>
          </select>
          <input
            type="text"
            placeholder="Search Khucra"
            className="flex-1 px-3 py-3
             text-black text-sm focus:outline-none bg-white"
          />
          <button className="bg-yellow-400 px-3 py-2 rounded-r-md hover:bg-yellow-500">
            <FaSearch className="text-black" />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6 sm:text-lg text-xs">
           <div className="cursor-pointer leading-tight">
              <Link href='/' className="font-bold">Need help?</Link>  
          </div>
           <div className="cursor-pointer leading-tight">
              <Link href='/' className="font-bold uppercase">Sign in</Link>  
          </div>
          <div className="cursor-pointer leading-tight">
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.81758 17.8006L2.26312 9.93389C0.135253 7.71812 0.269249 4.0849 2.55405 2.04556C4.82073 0.0223831 8.25762 0.415254 10.0488 2.90229L10.35 3.3204L10.6511 2.90229C12.4424 0.415254 15.8792 0.0223831 18.146 2.04556C20.4308 4.0849 20.5648 7.71812 18.4368 9.93389L10.8824 17.8006C10.5884 18.1068 10.1116 18.1068 9.81758 17.8006Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

         

          <div className="relative flex items-center cursor-pointer">
         
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full px-1">
              0
            </span>
            <p className="hidden sm:block font-bold text-sm ml-2">
              <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1717 22.4796H3.82729C2.73661 22.4796 1.88922 21.5263 2.01181 20.4386L3.79886 9.34618C3.87216 8.6963 4.41939 8.20508 5.07089 8.20508H16.9293C17.5808 8.20508 18.1281 8.6963 18.2014 9.34618L19.9884 20.4386C20.1098 21.527 19.2624 22.4796 18.1717 22.4796Z"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.36719 10.873V5.65177C7.36719 3.63485 8.99499 2 11.0032 2C13.0114 2 14.6392 3.63485 14.6392 5.65177V10.873"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.21875 10.873H8.51196"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.4844 10.873H15.7769"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              
             
            </svg>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <nav className="bg-[#232F3E] text-sm px-4 py-2 flex items-center gap-4 overflow-x-auto">
        <button className="flex items-center gap-1 hover:underline">
          <FaBars /> All
        </button>
        <a href="#" className="hover:underline">
          Today Deals
        </a>
        <a href="#" className="hover:underline">
          Registry
        </a>
        <a href="#" className="hover:underline">
          Prime Video
        </a>
        <a href="#" className="hover:underline">
          Gift Cards
        </a>
        <a href="#" className="hover:underline">
          Customer Service
        </a>
        <a href="#" className="hover:underline">
          Sell
        </a>
      </nav>
    </header>
  );
}
