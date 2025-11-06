"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Description() {
  const pathname = usePathname();

  const tabs = [
    { label: "Description", href: "/description" },
    { label: "Specification", href: "/specification" },
    { label: "Reviews (71)", href: "/reviews" },
    { label: "Question & Answer", href: "/question-answer" },
  ];

  return (
    <div className="container mx-auto 2xl:px-0 px-4 py-12">
      <section className="rounded-2xl border border-gray-300 shadow-md bg-white overflow-hidden">
        {/* Tabs Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6  py-4">
          {tabs.map((tab, i) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={i}
                href={tab.href}
                className={`text-base md:text-sm font-medium px-5 py-1 rounded-full transition-all duration-300 shadow-sm ${
                  isActive
                    ? "bg-main text-white shadow-lg scale-105"
                    : "text-main bg-white hover:bg-main/10"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        {/* Description Section */}
        <div className="p-6 md:p-10 leading-relaxed text-gray-700 text-justify">
          <h2 className="text-2xl font-semibold text-main mb-4">
            Samsung Galaxy S22 Ultra 5G
          </h2>
          <p className="mb-4">
            Experience the power of innovation with the <b>Samsung Galaxy S22 Ultra 5G</b>. Designed for performance and style, this flagship smartphone combines cutting-edge technology with premium design.
          </p>
          <p className="mb-4">
            Featuring a stunning <b>6.8-inch Dynamic AMOLED 2X display</b>, the S22 Ultra delivers breathtaking visuals with a smooth 120Hz refresh rate. Powered by the <b>Snapdragon 8 Gen 1</b> processor (or Exynos 2200 in some regions), it ensures ultra-fast performance, efficient multitasking, and seamless 5G connectivity.
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>6.8 Edge QHD+ Dynamic AMOLED 2X, 120Hz display</li>
            <li>Snapdragon 8 Gen 1 / Exynos 2200 processor</li>
            <li>Quad rear camera: 108MP + 12MP + 10MP + 10MP</li>
            <li>Front camera: 40MP</li>
            <li>S Pen built-in with ultra-low latency</li>
            <li>5G connectivity for faster downloads</li>
            <li>5000mAh battery with 45W fast charging</li>
            <li>Storage: 128GB / 256GB / 512GB / 1TB</li>
            <li>RAM: 8GB / 12GB</li>
          </ul>
          <p className="mb-4">
            For productivity lovers, the <b>S Pen</b> is integrated for the first time in the Galaxy S series, making note-taking and creativity effortless. With up to 12GB RAM and a massive 5000mAh battery, the Galaxy S22 Ultra 5G is built for those who demand top-tier performance and design.
          </p>
          <p>
            <b>What’s in the Box?</b> Samsung Galaxy S22 Ultra 5G, USB Type-C Cable, SIM Ejector Tool, Documentation.
          </p>
        </div>
      </section>
    </div>
  );
}
