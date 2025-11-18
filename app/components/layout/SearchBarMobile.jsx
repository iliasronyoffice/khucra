"use client";

import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export default function SearchbarMobile({ 
  open, 
  setOpen, 
  selected, 
  setSelected, 
  categories 
}) {
  return (
    <div className="lg:hidden flex items-center px-2 pb-2">
      <div className="flex flex-1 w-full">
        <div className="relative inline-block text-left">
          {/* Small button */}
          <button
            onClick={() => setOpen(!open)}
            className="bg-gray-100 border border-gray-300 rounded-l-md flex items-center justify-between text-black hover:bg-gray-200 py-3 px-3 text-xs w-16"
          >
            <span className="truncate">{selected}</span>
            <IoMdArrowDropdown className="ml-1 text-black" />
          </button>

          {/* Dropdown list */}
          {open && (
            <ul className="absolute left-0 mt-1 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10 overflow-y-auto max-h-80">
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => {
                    setSelected(cat);
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black text-xs"
                >
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="text"
          placeholder="Search Khucra"
          className="flex-1 px-3 py-2 text-black text-sm focus:outline-none bg-white w-full"
        />
        <button className="bg-yellow-400 px-3 py-2 rounded-r-md hover:bg-yellow-500 flex items-center justify-center">
          <FaSearch className="text-black text-sm" />
        </button>
      </div>
    </div>
  );
}