import Image from "next/image";

import Link from "next/link";

export default function TopSellersCardBox({item}) {
  return (
    <div className="bg-white border border-[#F1F1FE] my-2 shadow-sm rounded-xl hover:shadow-2xl duration-300 relative group cursor-pointer">
      {/* Product Image */}
      <div className=" p-1 flex justify-center items-center  relative">
        <Image
          src={item.img}
          alt={item.title}
          width={80}
          height={80}
          className=" object-cover bg-white rounded-full shadow-sm p-3"
        />
      </div>

      <div className="text-part px-4 pb-4">
        <h4 className="text-xl font-semibold mt-1">{item.title}</h4>

        {/* Rating */}
        <div className="flex items-center text-yellow-400 text-xs py-2">
          ★★★★★ <span className="text-gray-400 ml-1">5.0 avg.rating</span>
        </div>
        <div className="visit-btn bg-gray-100 rounded-xl">
          <Link href={"/"} className="uppercase">
            <div className="visit-section flex justify-between p-2 ">
              <div className="text-sm font-medium">Visit Store</div>
              <div className="svg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8.74228e-07"
                    y="20"
                    width="20"
                    height="20"
                    rx="2.66667"
                    transform="rotate(-90 8.74228e-07 20)"
                    fill="white"
                  />
                  <path
                    d="M15 5.83333C15 6.08333 14.9167 6.25 14.75 6.41667L6.41667 14.75C6.08333 15.0833 5.58333 15.0833 5.25 14.75C4.91667 14.4167 4.91667 13.9167 5.25 13.5833L13.5833 5.25C13.9167 4.91667 14.4167 4.91667 14.75 5.25C14.9167 5.41667 15 5.58333 15 5.83333Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M14.9997 5.83317L14.9997 13.3332C14.9997 13.8332 14.6663 14.1665 14.1663 14.1665C13.6663 14.1665 13.333 13.8332 13.333 13.3332L13.333 6.6665L6.66634 6.6665C6.16634 6.6665 5.83301 6.33317 5.83301 5.83317C5.83301 5.33317 6.16634 4.99984 6.66634 4.99984L14.1663 4.99984C14.6663 4.99984 14.9997 5.33317 14.9997 5.83317Z"
                    fill="#1F1F1F"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
