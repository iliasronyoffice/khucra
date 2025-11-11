"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SecondBanner() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banners-two`);
        const data = await response.json();
        
        if (data.success && data.data) {
          setBanners(data.data);
        }
      } catch (error) {
        console.error('Error fetching banners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="container mx-auto rounded-xl overflow-hidden mb-6 h-[100px] md:h-[250px] bg-gray-200 animate-pulse">
        {/* Loading skeleton */}
      </div>
    );
  }

  // If no banners found, return null or fallback
  if (banners.length === 0) {
    return null;
  }

  // Single banner layout (your current design)
  if (banners.length === 1) {
    return (
      <div className="container mx-auto rounded-xl overflow-hidden h-[100px] md:h-[250px]">
        <Image
          src={banners[0].photo}
          alt={"banner image"}
          width={1200}
          height={250}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Multiple banners layout (2 or 3 banners)
  const gridClass = banners.length === 2 ? "grid-cols-2" : "grid-cols-3";
  
  return (
    <div className={`grid ${gridClass} gap-5 container mx-auto px-4 mt-8 mb-14`}>
      {banners.map((banner, index) => (
        <div key={index} className={`banner${index + 1} rounded-xl overflow-hidden h-[100px] md:h-[250px]`}>
          <Image
            src={banner.photo}
            alt={`Banner ${index + 1}`}
            width={400}
            height={250}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}