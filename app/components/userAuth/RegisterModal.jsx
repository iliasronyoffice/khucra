"use client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast"; // <-- import
import DeleteIcon from "@/app/components/icons/DeleteIcon";
import EyeOpen from "../icons/EyeOpen";
import EyeClose from "../icons/EyeClose";
import LockIcon from "../icons/LockIcon";
import PhoneIcon from "../icons/PhoneIcon";
import EmailIcon from "../icons/EmailIcon";
import SignUpIcon from "../icons/SignUpIcon";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import AppleIcon from "../icons/AppleIcon";

export default function RegisterModal({ open, onClose, onSwitch }) {
  const [usePhone, setUsePhone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  if (!open) return null;

  // ------------------------
  // SUBMIT HANDLER
  // ------------------------
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    const payload = {
      name,
      email_or_phone: emailOrPhone,
      password,
      password_confirmation: confirmPass,
      register_by: usePhone ? "phone" : "email",
    };

    try {
      const res = await fetch(
        "http://localhost/genmart_october/api/v2/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (data.result) {
        toast.success(data.message || "Registration successful!");
        onClose(); // hide the modal
        // Optionally, reset form
        setName("");
        setEmailOrPhone("");
        setPassword("");
        setConfirmPass("");
      } else {
        // show validation errors
        if (Array.isArray(data.message)) {
          setErrors(data.message);
        } else {
          toast.error(data.message || "Something went wrong!");
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
      <div className="bg-gradient-to-b from-[#EBEBFE] to-white w-80 2xl:w-[28%] md:w-[40%] lg:w-[40%] rounded-2xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-xl bg-red-500 rounded-2xl p-3"
        >
          <DeleteIcon />
        </button>

        <div className="text-center">
          <div className="bg-white rounded-md p-4 inline-flex justify-center items-center">
            <SignUpIcon width={50} height={50} />
          </div>
          <h3 className="text-3xl font-bold text-main py-5">Create Account</h3>
          <p className="text-md pb-5">
            Sign up to enjoy exclusive deals and faster checkout
          </p>
        </div>

        {/* ERROR MESSAGES */}
        {errors.length > 0 && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm">
            {errors.map((e, i) => (
              <p key={i}>• {e}</p>
            ))}
          </div>
        )}

        <div className="w-full">
          {/* NAME */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 mb-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* TOGGLE BUTTON */}
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

          {/* EMAIL FIELD */}
          {!usePhone && (
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 mb-3">
              <EmailIcon width={20} height={15} />
              <input
                type="email"
                placeholder="Email"
                className="w-full focus:outline-none"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
            </div>
          )}

          {/* PHONE FIELD */}
          {usePhone && (
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 mb-3">
              <PhoneIcon width={20} height={20} />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full focus:outline-none"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
            </div>
          )}
        </div>

        {/* PASSWORD */}
        <div className="password-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 mb-4">
          <LockIcon width={15} height={20} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer"
          >
            {!showPassword ? (
              <EyeOpen width={24} height={24} />
            ) : (
              <EyeClose width={24} height={24} />
            )}
          </span>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="password-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 mb-4">
          <LockIcon width={15} height={20} />
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full focus:outline-none"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            className="cursor-pointer"
          >
            {!showConfirm ? (
              <EyeOpen width={24} height={24} />
            ) : (
              <EyeClose width={24} height={24} />
            )}
          </span>
        </div>

        <button
          disabled={loading}
          onClick={handleRegister}
          className="w-full bg-main text-white py-3 rounded-xl cursor-pointer disabled:opacity-50"
        >
          {loading ? "Please wait..." : "Sign Up"}
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?
          <button className="text-main font-semibold" onClick={onSwitch}>
            <span className="text-red-500 px-2 cursor-pointer">Log In</span>
          </button>
        </p>

        {/* SOCIAL LOGIN */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-dashed border-gray-300"></div>

          <span className="px-3 text-gray-500 text-sm">Or Login with</span>

          <div className="flex-1 border-t border-dashed border-gray-300"></div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-300 rounded-2xl p-4 flex justify-center">
            <GoogleIcon width={24} height={24} />
          </div>
          <div className="bg-gray-300 rounded-2xl p-4 flex justify-center">
            <FacebookIcon width={24} height={24} />
          </div>
          <div className="bg-gray-300 rounded-2xl p-4 flex justify-center">
            <AppleIcon width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
