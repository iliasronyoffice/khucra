import Image from "next/image";
import Link from "next/link";

export default function BrandCard({ item }) {
  return (
    <Link href={"/"} className="block">
      <div className="border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl duration-300 overflow-hidden cursor-pointer group">
        
        {/* Image Section */}
        <div className="relative w-full aspect-square">
          <Image
            src={item?.img}
            alt={item?.title}
            fill
            className="object-cover rounded-2xl group-hover:scale-105 duration-300"
          />

          {/* Title */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%] bg-white rounded-xl px-3 py-2 shadow-sm text-center">
            <h3 className="text-sm font-semibold text-gray-800 group-hover:text-primary uppercase truncate">
              {item?.title}
            </h3>
          </div>
        </div>

      </div>
    </Link>
  );
}
