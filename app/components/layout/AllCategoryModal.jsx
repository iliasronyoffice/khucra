"use client";
import { FaBars, FaTimes, FaChevronRight, FaChevronLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function AllCategoryModal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHistory, setMenuHistory] = useState(["main"]);
  const [expandedSections, setExpandedSections] = useState({
    shopByDepartment: false,
    programsFeatures: false,
  });

  // Close menu when clicking outside
 

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const navigateToMenu = (menuId) => {
    setActiveMenu(menuId);
    setMenuHistory((prev) => [...prev, menuId]);
  };

  const navigateBack = () => {
    if (menuHistory.length > 1) {
      const newHistory = [...menuHistory];
      newHistory.pop();
      setActiveMenu(newHistory[newHistory.length - 1]);
      setMenuHistory(newHistory);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMenu("main");
    setMenuHistory(["main"]);
    setExpandedSections({
      shopByDepartment: false,
      programsFeatures: false,
    });
  };

   useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        !e.target.closest("#menu-container") &&
        !e.target.closest("#menu-trigger")
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Menu data structure
  const menuData = {
    main: {
      title: "Browse all categories",
      sections: [
        {
          title: "Digital Content & Devices",
          items: [
            { name: "Prime Video", hasSubmenu: true, menuId: "primeVideo" },
            { name: "Khucra Music", hasSubmenu: true, menuId: "KhucraMusic" },
            {
              name: "Kindle E-readers & Books",
              hasSubmenu: true,
              menuId: "kindle",
            },
            { name: "Khucra Appstore", hasSubmenu: true, menuId: "appstore" },
          ],
        },
        {
          title: "Shop by Department",
          items: [
            { name: "Electronics", hasSubmenu: true, menuId: "electronics" },
            { name: "Computers", hasSubmenu: true, menuId: "computers" },
            { name: "Smart Home", hasSubmenu: true, menuId: "smartHome" },
            { name: "Arts & Crafts", hasSubmenu: true, menuId: "artsCrafts" },
            // Compressed section items
            ...(expandedSections.shopByDepartment
              ? [
                  { name: "Automotive", hasSubmenu: true, menuId: "automotive" },
                  { name: "Baby", hasSubmenu: true, menuId: "baby" },
                  {
                    name: "Beauty and Personal Care",
                    hasSubmenu: true,
                    menuId: "beauty",
                  },
                  {
                    name: "Women's Fashion",
                    hasSubmenu: true,
                    menuId: "womensFashion",
                  },
                  {
                    name: "Men's Fashion",
                    hasSubmenu: true,
                    menuId: "mensFashion",
                  },
                  {
                    name: "Girls' Fashion",
                    hasSubmenu: true,
                    menuId: "girlsFashion",
                  },
                  {
                    name: "Boys' Fashion",
                    hasSubmenu: true,
                    menuId: "boysFashion",
                  },
                  {
                    name: "Health and Household",
                    hasSubmenu: true,
                    menuId: "healthHousehold",
                  },
                  {
                    name: "Home and Kitchen",
                    hasSubmenu: true,
                    menuId: "homeKitchen",
                  },
                  {
                    name: "Industrial and Scientific",
                    hasSubmenu: true,
                    menuId: "industrial",
                  },
                  { name: "Luggage", hasSubmenu: true, menuId: "luggage" },
                  {
                    name: "Movies & Television",
                    hasSubmenu: true,
                    menuId: "moviesTv",
                  },
                  {
                    name: "Pet supplies",
                    hasSubmenu: true,
                    menuId: "petSupplies",
                  },
                  { name: "Software", hasSubmenu: true, menuId: "software" },
                  {
                    name: "Sports and Outdoors",
                    hasSubmenu: true,
                    menuId: "sports",
                  },
                  {
                    name: "Tools & Home Improvement",
                    hasSubmenu: true,
                    menuId: "tools",
                  },
                  {
                    name: "Toys and Games",
                    hasSubmenu: true,
                    menuId: "toys",
                  },
                  {
                    name: "Video Games",
                    hasSubmenu: true,
                    menuId: "videoGames",
                  },
                ]
              : []),
            // Toggle button
            {
              name: expandedSections.shopByDepartment ? "See less" : "See all",
              isToggle: true,
              action: () => toggleSection("shopByDepartment"),
            },
          ],
        },
        {
          title: "Programs & Features",
          items: [
            { name: "Gift Cards", hasSubmenu: true, menuId: "giftCards" },
            { name: "Shop By Interest", hasSubmenu: false },
            { name: "Khucra Live", hasSubmenu: true, menuId: "KhucraLive" },
            {
              name: "International Shopping",
              hasSubmenu: true,
              menuId: "international",
            },
            // Compressed section items
            ...(expandedSections.programsFeatures
              ? [{ name: "Khucra Second Chance", hasSubmenu: false }]
              : []),
            // Toggle button
            {
              name: expandedSections.programsFeatures ? "See less" : "See all",
              isToggle: true,
              action: () => toggleSection("programsFeatures"),
            },
          ],
        },
        {
          title: "Help & Settings",
          items: [
            { name: "Your Account", hasSubmenu: false },
            { name: "English", hasSubmenu: false },
            { name: "United States", hasSubmenu: false },
            { name: "Customer Service", hasSubmenu: false },
            { name: "Sign in", hasSubmenu: false },
          ],
        },
      ],
    },
    primeVideo: {
      title: "Prime Video",
      items: [
        { name: "All Videos", hasSubmenu: false },
        { name: "Included with Prime", hasSubmenu: false },
        { name: "Prime Video Channels", hasSubmenu: false },
        { name: "Rent or Buy", hasSubmenu: false },
        { name: "Your Watchlist", hasSubmenu: false },
        { name: "Purchases & Rentals", hasSubmenu: false },
        { name: "Watch Anywhere", hasSubmenu: false },
        { name: "Getting Started", hasSubmenu: false },
      ],
    },
    electronics: {
      title: "Electronics",
      items: [
        { name: "Accessories & Supplies", hasSubmenu: false },
        { name: "Camera & Photo", hasSubmenu: false },
        { name: "Car & Vehicle Electronics", hasSubmenu: false },
        { name: "Cell Phones & Accessories", hasSubmenu: false },
        { name: "Computers & Accessories", hasSubmenu: false },
        { name: "GPS & Navigation", hasSubmenu: false },
        { name: "Headphones", hasSubmenu: false },
        { name: "Home Audio", hasSubmenu: false },
        { name: "Office Electronics", hasSubmenu: false },
        { name: "Portable Audio & Video", hasSubmenu: false },
        { name: "Security & Surveillance", hasSubmenu: false },
        { name: "Service Plans", hasSubmenu: false },
        { name: "Television & Video", hasSubmenu: false },
        { name: "Video Game Consoles & Accessories", hasSubmenu: false },
        { name: "Video Projectors", hasSubmenu: false },
        { name: "Wearable Technology", hasSubmenu: false },
        { name: "eBook Readers & Accessories", hasSubmenu: false },
      ],
    },
  };

  return (
    <div className="relative">
      {/* Menu Trigger Button */}
      <button 
        id="menu-trigger"
        onClick={() => setIsMenuOpen(true)}
        className="flex items-center gap-1 hover:underline px-2 py-1"
      >
        <FaBars className="text-sm lg:text-base" />
        <span className="text-xs lg:text-sm">All</span>
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0  z-40"></div>
      )}

      {/* Menu Container */}
      <div 
        id="menu-container"
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="bg-[#232F3E] text-white p-4 flex justify-between items-center">
          <h2 className="text-lg font-medium">
            {menuData[activeMenu]?.title || "Browse all categories"}
          </h2>
          <button 
            onClick={closeMenu}
            className="p-1 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Close menu"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="h-full overflow-y-auto pb-16">
          {/* Back Button for Submenus */}
          {activeMenu !== 'main' && (
            <button 
              onClick={navigateBack}
              className="w-full flex items-center gap-2 p-4 text-gray-700 hover:bg-gray-100 border-b border-gray-200"
            >
              <FaChevronLeft className="text-gray-500" />
              <span>Back to main menu</span>
            </button>
          )}

          {/* Menu Sections */}
          <div className="py-2">
            {menuData[activeMenu]?.sections?.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-2">
                {/* Section Title */}
                <div className="px-4 py-2 text-gray-800 font-medium text-sm">
                  {section.title}
                </div>
                
                {/* Section Items */}
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.isToggle ? (
                        <button
                          onClick={item.action}
                          className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 text-sm"
                        >
                          <span>{item.name}</span>
                          {expandedSections.shopByDepartment ? (
                            <FaChevronUp className="text-gray-500" />
                          ) : (
                            <FaChevronDown className="text-gray-500" />
                          )}
                        </button>
                      ) : (
                        <button
                          onClick={() => item.hasSubmenu ? navigateToMenu(item.menuId) : closeMenu()}
                          className={`w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 text-sm ${
                            !item.hasSubmenu ? 'justify-start' : ''
                          }`}
                        >
                          <span>{item.name}</span>
                          {item.hasSubmenu && <FaChevronRight className="text-gray-500" />}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
                
                {/* Section Separator */}
                {sectionIndex < menuData[activeMenu].sections.length - 1 && (
                  <div className="border-t border-gray-200 my-2"></div>
                )}
              </div>
            ))}

            {/* Submenu Items */}
            {menuData[activeMenu]?.items && (
              <ul>
                {menuData[activeMenu].items.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => item.hasSubmenu ? navigateToMenu(item.menuId) : closeMenu()}
                      className={`w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 text-sm ${
                        !item.hasSubmenu ? 'justify-start' : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.hasSubmenu && <FaChevronRight className="text-gray-500" />}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={closeMenu}
          className="absolute bottom-0 left-0 w-full bg-gray-100 border-t border-gray-200 py-3 text-gray-700 text-sm hover:bg-gray-200"
        >
          Back to top
        </button>
      </div>
    </div>
  );
}