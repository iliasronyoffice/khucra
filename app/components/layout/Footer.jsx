import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import payment_image from "../../../public/payment_image.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="px-5 sm:px-10 lg:px-32 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Logo & About */}
        <div>
          <Link href="/" className="block">
            <Image
              src={logo}
              alt="Khucra Logo"
              priority
              className="w-28 md:w-32 lg:w-40 object-contain dark:invert"
            />
          </Link>
          <p className="mt-4 text-sm">
            Khucra is a trusted e-commerce marketplace in Bangladesh, offering
            diverse products, secure payments, and nationwide delivery.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Shipping & Delivery
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Refund & Return Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Support Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Coupon
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Special Offers
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Today Deals
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Flash Deals
              </Link>
            </li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="font-semibold mb-4">My Account</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Login
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Order History
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                My Wishlist
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Track Order
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Affiliate Partner
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-sm">
            {/* Address */}
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24.0005" rx="12" fill="white" />
                  <path
                    d="M11.7856 4.28577C8.5958 4.28577 6 6.89957 6 10.1131C6 14.6793 11.2418 19.3939 11.4648 19.5919C11.553 19.6708 11.6671 19.7145 11.7855 19.7146C11.9038 19.7147 12.018 19.6713 12.1064 19.5925C12.3294 19.3939 17.5712 14.6793 17.5712 10.1131C17.5712 6.89957 14.9754 4.28577 11.7856 4.28577ZM11.7856 13.2856C10.0133 13.2856 8.57138 11.8437 8.57138 10.0714C8.57138 8.29904 10.0133 6.85714 11.7856 6.85714C13.5579 6.85714 14.9998 8.29904 14.9998 10.0714C14.9998 11.8437 13.5579 13.2856 11.7856 13.2856Z"
                    fill="#19073B"
                  />
                </svg>
              </span>
              <p>
                House # 05, Road # 11, Block C, Bosila City Developers Ltd,
                Dhaka-1207
              </p>
            </li>

            {/* Phone */}
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24.0005" rx="12" fill="white" />
                  <path
                    d="M17.9447 15.0473L16.1267 13.2293C15.4775 12.58 14.3737 12.8398 14.114 13.6838C13.9192 14.2682 13.2699 14.5929 12.6855 14.463C11.3869 14.1383 9.63386 12.4502 9.30922 11.0867C9.11443 10.5023 9.50401 9.85301 10.0884 9.65825C10.9324 9.39853 11.1922 8.29474 10.5429 7.64545L8.72486 5.82745C8.20543 5.37295 7.42629 5.37295 6.97178 5.82745L5.73814 7.0611C4.50449 8.35967 5.868 11.8009 8.91965 14.8525C11.9713 17.9042 15.4125 19.3327 16.7111 18.0341L17.9447 16.8004C18.3993 16.281 18.3993 15.5018 17.9447 15.0473Z"
                    fill="#19073B"
                  />
                </svg>
              </span>
              <Link href="tel:01902916420" className="hover:text-white">
                01902916420
              </Link>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24.0005" rx="12" fill="white" />
                  <path
                    d="M18.7715 7.71472L14.4582 12.0002L18.7715 16.2858C18.8495 16.1228 18.8968 15.9426 18.8968 15.7502V8.25024C18.8968 8.05783 18.8495 7.87769 18.7715 7.71472ZM17.6468 7.00024H5.92456C5.73214 7.00024 5.552 7.04755 5.38903 7.12552L10.9019 12.6106C11.3893 13.098 12.182 13.098 12.6694 12.6106L18.1823 7.12552C18.0193 7.04755 17.8392 7.00024 17.6468 7.00024ZM4.79984 7.71472C4.72187 7.87769 4.67456 8.05783 4.67456 8.25024V15.7502C4.67456 15.9427 4.72187 16.1228 4.79984 16.2858L9.11314 12.0002L4.79984 7.71472Z"
                    fill="#19073B"
                  />
                  <path
                    d="M13.8701 12.5894L13.2597 13.1997C12.4476 14.0119 11.126 14.0119 10.3138 13.1997L9.70344 12.5894L5.39014 16.8749C5.55311 16.9529 5.73325 17.0002 5.92566 17.0002H17.6479C17.8403 17.0002 18.0204 16.9529 18.1834 16.8749L13.8701 12.5894Z"
                    fill="#19073B"
                  />
                </svg>
              </span>
              <Link href="mailto:info@khucra.com" className="hover:text-white">
                info@khucra.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm flex-none  lg:flex justify-between items-center px-5 sm:px-10 lg:px-32 ">
        <div>© {new Date().getFullYear()} Khucra — All Rights Reserved.</div>
        <div className="payment-image">
        
          <Image
            src={payment_image}
            alt="payment Metods"
            width={350}
            height={20}
            className="w-full h-auto rounded-t-xl object-cover"
          />
        </div>
      </div>
    </footer>
  );
}
