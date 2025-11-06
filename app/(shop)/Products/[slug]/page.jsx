"use client";

import { useState, useEffect, useRef } from "react";
import phone_main from "@/public/phone_main.png";
import gallery1 from "@/public/gallery1.png";
import gallery2 from "@/public/gallery2.png";
import gallery3 from "@/public/gallery3.png";
import seller_logo from "@/public/seller_logo.png";
import Image from "next/image";
import Link from "next/link";
import Details from "@/app/(pages)/Details";
import DeliveryAndSeller from "@/app/(pages)/DeliveryAndSeller";
import ImageGallery from "@/app/(pages)/ImageGallery";
import Description from "@/app/components/layout/Description";
import YouMayAlsoLike from "@/app/components/layout/YouMayAlsoLike";
import Breadcrumb from "@/app/components/layout/Breadcrumb";

export default function Page({ params }) {
  const [slug, setSlug] = useState("");
   useEffect(() => {
    // Get params
    const getParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };
    getParams();
  }, [params]);
    // Gallery images array
  const galleryImages = [
    { id: 1, src: gallery1, alt: "Phone Front View" },
    { id: 2, src: gallery2, alt: "Phone Side View" },
    { id: 3, src: gallery3, alt: "Phone Back View" },
    { id: 4, src: phone_main, alt: "Phone Main View" },
    { id: 5, src: gallery1, alt: "Phone Display" },
    { id: 6, src: gallery2, alt: "Phone Features" },
    { id: 7, src: gallery3, alt: "Phone Camera" },
    { id: 8, src: phone_main, alt: "Phone Design" },
    { id: 9, src: gallery3, alt: "new Camera" },
    { id: 10, src: gallery3, alt: "latest Camera" },
  ];
  

  return (
    <section className="p-6 min-h-screen container mx-auto">
     <Breadcrumb></Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
        {/* Images Section - Left Side */}
        <ImageGallery galleryImages = {galleryImages}></ImageGallery>

        {/* Details */}
        <Details/>

        {/* Delivery & Seller Info - Right Side */}
        <DeliveryAndSeller seller_logo={seller_logo}/>
      </div>
      <Description></Description>
      <YouMayAlsoLike></YouMayAlsoLike>
    </section>
  );
}
