"use client";
import Link from "next/link";
import { useState } from "react";
import DeleteIcon from "@/app/components/icons/DeleteIcon";
import EyeOpen from "../icons/EyeOpen";
import EyeClose from "../icons/EyeClose";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import LockIcon from "../icons/LockIcon";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import AppleIcon from "../icons/AppleIcon";
import LoginIcon from "../icons/LoginIcon";

export default function LoginModal({ open, onClose, onSwitch }) {
  const [usePhone, setUsePhone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  if (!open) return null;

  return (
    <div className="fixed  inset-0 bg-black/60  flex items-center justify-center z-[999]">
      <div className="bg-gradient-to-b from-[#EBEBFE] to-white  w-80 2xl:w-[28%] md:w-[40%] lg:w-[40%] rounded-2xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-xl bg-red-500 rounded-2xl p-3"
        >
        <DeleteIcon width={10} height={10}></DeleteIcon>
        </button>
        <div className="text-center">
          <div className="bg-white rounded-md p-4 inline-flex justify-center items-center">
           <LoginIcon width={29} height={29}></LoginIcon>
          </div>
          <h3 className="text-3xl font-bold text-main py-5">
            Welcome Back! Log in
          </h3>
          <p className="text-md pb-5">
            Log in to enjoy exclusive deals and faster <br /> checkout
          </p>
        </div>
        <div className="w-full">
          {/* Toggle Button */}
          {!usePhone ? (
            <span
              className="text-red-500 text-md flex justify-end py-2 cursor-pointer"
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
             <PhoneIcon width={24} height={24}></PhoneIcon>

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
            className="cursor-pointer flex justify-center items-center"
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
        <Link href={"/"} className="flex justify-end items-end text-main pb-3">
          Forget Password?
        </Link>

        <button
          type="submit"
          className="w-full bg-main text-white py-3 rounded-xl
           cursor-pointer"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Do not have an account?
          <button
            className="text-main font-semibold"
            onClick={onSwitch} // Switch to Register
          >
            <span className="text-red-500 text-md py-4 px-2 cursor-pointer">Sign Up</span>
          </button>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-dashed border-gray-300"></div>

          <span className="px-3 text-gray-500 text-sm">Or Login with</span>

          <div className="flex-1 border-t border-dashed border-gray-300"></div>
        </div>

        <div className="social-login grid grid-cols-3 gap-4">
          <div className="social bg-gray-300 rounded-2xl p-4 flex justify-center items-center">
         <GoogleIcon width={24} height={24}></GoogleIcon>
          </div>
          <div className="social bg-gray-300 rounded-2xl p-4 flex justify-center items-center">
          <FacebookIcon width={24} height={24}></FacebookIcon>
          </div>
          <div className="social bg-gray-300 rounded-2xl p-4 flex justify-center items-center">
           <AppleIcon width={24} height={24}></AppleIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
