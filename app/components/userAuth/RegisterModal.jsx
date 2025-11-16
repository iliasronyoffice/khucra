"use client";
import Link from "next/link";
import { useState } from "react";
import DeleteIcon from "@/app/components/icons/DeleteIcon";
import EyeOpen from "../icons/EyeOpen";
import EyeClose from "../icons/EyeClose";
import LockIcon from "../icons/LockIcon";
import PhoneIcon from "../icons/PhoneIcon";
import EmailIcon from "../icons/EmailIcon";
import SignUpIcon from "../icons/SignUpIcon";

export default function RegisterModal({ open, onClose, onSwitch }) {
  const [usePhone, setUsePhone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  if (!open) return null;

  return (
    <div className="fixed  inset-0 bg-black/60  flex items-center justify-center z-[999]">
      <div className="bg-gradient-to-b from-[#EBEBFE] to-white  w-80 2xl:w-[28%] md:w-[40%] lg:w-[40%] rounded-2xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-xl bg-red-500 rounded-2xl p-3"
        >
         <DeleteIcon></DeleteIcon>
        </button>
        <div className="text-center">
          <div className="bg-white rounded-md p-4 inline-flex justify-center items-center">
           <SignUpIcon width={50} height={50}></SignUpIcon>
          </div>
          <h3 className="text-3xl font-bold text-main py-5">Create Account</h3>
          <p className="text-md pb-5">
            Sign up to enjoy exclusive deals and faster checkout
          </p>
        </div>
        <div className="w-full">
          {/* Full Name */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 mb-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full focus:outline-none"
            />
          </div>
          {/* Toggle Button */}
          {!usePhone ? (
            <span
              className="text-red-500 text-md flex justify-end pb-2 cursor-pointer"
              onClick={() => setUsePhone(true)}
            >
              *Use Number Instead
            </span>
          ) : (
            <span
              className="text-red-500 text-md flex justify-end py-2 cursor-pointer"
              onClick={() => setUsePhone(false)}
            >
              *Use Email Instead
            </span>
          )}

          {/* Email input field */}
          {!usePhone && (
            <div className="email-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 mb-3">
            <EmailIcon width={20} height={15}></EmailIcon>


              <input
                type="email"
                placeholder="Email"
                className="w-full focus:outline-none"
              />
            </div>
          )}

          {/* Phone input field */}
          {usePhone && (
            <div className="phone-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 mb-3">
             <PhoneIcon width={20} height={20}></PhoneIcon>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* password input field  */}
        <div className="password-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 mb-4">
          {/* Lock Icon */}
         <LockIcon width={15} height={20}></LockIcon>

          {/* Password Input */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full focus:outline-none"
          />

          {/* Toggle Eye Icon */}
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer"
          >
            {!showPassword ? (
              //  SHOW password icon
           <EyeOpen width={24} height={24}></EyeOpen>
            ) : (
              //  HIDE password icon
              <EyeClose width={24} height={24}></EyeClose>
            )}
          </span>
        </div>
        {/*confirm password input field  */}
        <div className="password-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 mb-4">
          {/* Lock Icon */}
         <LockIcon width={15} height={20}></LockIcon>

          {/* confirm Password Input */}
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full focus:outline-none"
          />

          {/* Toggle Eye Icon */}
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            className="cursor-pointer"
          >
            {!showConfirm ? (
              //  SHOW password icon
              <EyeOpen width={24} height={24}></EyeOpen>
            ) : (
              //  HIDE password icon
          <EyeClose width={24} height={24}></EyeClose>
            )}
          </span>
        </div>

        <Link href={"/"} className="flex justify-end items-end text-main pb-3">
          Forget Password?
        </Link>

        <button
          type="submit"
          className="w-full bg-main text-white py-3 rounded-xl cursor-pointer"
        >
          Sign Up
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?
          <button
            className="text-main font-semibold"
            onClick={onSwitch} // Switch to Register
          >
            <span className="text-red-500 text-md py-4 px-2 cursor-pointer"> Log In</span>
          </button>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-dashed border-gray-300"></div>

          <span className="px-3 text-gray-500 text-sm">Or Login with</span>

          <div className="flex-1 border-t border-dashed border-gray-300"></div>
        </div>

        <div className="social-login grid grid-cols-3 gap-4">
          <div className="social bg-gray-300 rounded-2xl p-4 flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2464 10.2611L13.0892 10.2607C12.729 10.2607 12.437 10.5527 12.437 10.9129V13.5188C12.437 13.8789 12.729 14.1709 13.0892 14.1709H17.6828C17.1798 15.4763 16.241 16.5696 15.0432 17.2642L17.0019 20.6549C20.1439 18.8378 22.0015 15.6494 22.0015 12.0801C22.0015 11.5719 21.9641 11.2086 21.8892 10.7996C21.8322 10.4888 21.5624 10.2611 21.2464 10.2611Z"
                fill="#167EE6"
              />
              <path
                d="M11.9975 18.0866C9.74946 18.0866 7.78694 16.8583 6.73291 15.0408L3.34229 16.9951C5.06775 19.9856 8.3001 21.9994 11.9975 21.9994C13.8113 21.9994 15.5228 21.511 16.9972 20.66V20.6553L15.0384 17.2645C14.1425 17.7842 13.1057 18.0866 11.9975 18.0866Z"
                fill="#12B347"
              />
              <path
                d="M17.0006 20.6593V20.6547L15.0419 17.2639C14.1459 17.7835 13.1092 18.086 12.001 18.086V21.9988C13.8148 21.9988 15.5264 21.5104 17.0006 20.6593Z"
                fill="#0F993E"
              />
              <path
                d="M5.91424 12.0001C5.91424 10.892 6.21664 9.85536 6.73617 8.95944L3.34555 7.00513C2.48979 8.47483 2.00146 10.1817 2.00146 12.0001C2.00146 13.8186 2.48979 15.5254 3.34555 16.9951L6.73617 15.0408C6.21664 14.1449 5.91424 13.1082 5.91424 12.0001Z"
                fill="#FFD500"
              />
              <path
                d="M11.9975 5.91326C13.4635 5.91326 14.81 6.43416 15.8618 7.30063C16.1212 7.51436 16.4984 7.49893 16.736 7.26125L18.5824 5.4149C18.8521 5.14523 18.8328 4.70382 18.5448 4.45391C16.7826 2.92515 14.4898 2.00049 11.9975 2.00049C8.3001 2.00049 5.06775 4.01429 3.34229 7.00479L6.73291 8.9591C7.78694 7.14154 9.74946 5.91326 11.9975 5.91326Z"
                fill="#FF4B26"
              />
              <path
                d="M15.8652 7.30063C16.1247 7.51436 16.5019 7.49893 16.7395 7.26126L18.5859 5.4149C18.8555 5.14523 18.8363 4.70382 18.5483 4.45391C16.7861 2.92511 14.4933 2.00049 12.001 2.00049V5.91326C13.4669 5.91326 14.8135 6.43416 15.8652 7.30063Z"
                fill="#D93F21"
              />
            </svg>
          </div>
          <div className="social bg-gray-300 rounded-2xl p-4 flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 12C23 17.4905 18.9773 22.0414 13.7188 22.8664V15.1797H16.2818L16.7695 12H13.7188V9.93664C13.7188 9.06652 14.145 8.21875 15.5114 8.21875H16.8984V5.51172C16.8984 5.51172 15.6395 5.29688 14.4359 5.29688C11.9235 5.29688 10.2812 6.81969 10.2812 9.57656V12H7.48828V15.1797H10.2812V22.8664C5.02273 22.0414 1 17.4905 1 12C1 5.92508 5.92508 1 12 1C18.0749 1 23 5.92508 23 12Z"
                fill="#1877F2"
              />
              <path
                d="M16.2818 15.1797L16.7695 12H13.7188V9.9366C13.7188 9.0667 14.1449 8.21875 15.5114 8.21875H16.8984V5.51172C16.8984 5.51172 15.6396 5.29688 14.4361 5.29688C11.9235 5.29688 10.2812 6.81969 10.2812 9.57656V12H7.48828V15.1797H10.2812V22.8663C10.8413 22.9542 11.4153 23 12 23C12.5847 23 13.1587 22.9542 13.7188 22.8663V15.1797H16.2818Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="social bg-gray-300 rounded-2xl p-4 flex justify-center items-center">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11.4975" cy="11.4823" r="9.23527" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2851 6.40775C13.8493 6.40775 13.335 6.50938 12.7424 6.71265C12.1497 6.91598 11.7225 7.01769 11.461 7.01779C11.2577 7.01779 10.8466 6.92769 10.2277 6.7475C9.60887 6.56731 9.08155 6.47722 8.64575 6.47722C7.62306 6.47722 6.77615 6.9073 6.10502 7.76747C5.4339 8.6272 5.09833 9.73989 5.09833 11.1055C5.10096 11.8614 5.2125 12.613 5.4295 13.337C5.66833 14.1282 5.99889 14.8888 6.41443 15.6032C6.85605 16.3759 7.30058 16.9555 7.74802 17.3419C8.1954 17.7283 8.64571 17.9215 9.09897 17.9215C9.40115 17.9215 9.79485 17.8213 10.2801 17.6208C10.7653 17.4203 11.1909 17.3201 11.5569 17.3201C11.923 17.3201 12.3719 17.416 12.9036 17.6078C13.4352 17.7997 13.8521 17.8956 14.1543 17.8955C14.5378 17.8955 14.9214 17.7502 15.3048 17.4596C15.6883 17.169 16.0718 16.7303 16.4553 16.1434C16.6981 15.7768 16.9179 15.3954 17.1134 15.0016C17.2893 14.6479 17.4365 14.2806 17.5536 13.9033C17.0248 13.7466 16.5541 13.3718 16.1416 12.779C15.7316 12.1948 15.5152 11.4968 15.5227 10.7832C15.5244 10.2991 15.6331 9.82138 15.8409 9.38415C16.053 8.92795 16.4815 8.42682 17.1265 7.88075C16.7139 7.36933 16.2781 6.99593 15.8191 6.76054C15.3436 6.52138 14.8173 6.40036 14.2851 6.40775H14.2851ZM14.1369 3.04337C13.0968 3.28129 12.3515 3.7229 11.9012 4.36819C11.4509 5.01314 11.2199 5.77718 11.2083 6.6603C11.6616 6.63713 12.0248 6.56447 12.2979 6.44232C12.598 6.30121 12.8698 6.10627 13.0997 5.86718C13.4576 5.51909 13.7396 5.10062 13.9278 4.63815C14.1021 4.19656 14.1893 3.78986 14.1893 3.41807C14.1893 3.35997 14.1863 3.30191 14.1805 3.24358C14.1726 3.17557 14.158 3.10852 14.1369 3.04337ZM11.5 0C17.8513 0 23 5.14855 23 11.5001C23 17.8515 17.8513 23 11.5 23C5.14873 23 0 17.8515 0 11.5001C0 5.14859 5.14873 4.64272e-05 11.5 4.64272e-05V0Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
