"use client";

export default function RegisterModal({ open, onClose, onSwitch }) {
  if (!open) return null;

  return (
   <div className="fixed inset-0 bg-black/60  flex items-center justify-center z-[999]">
      <div className="bg-white w-80 md:w-96 rounded-lg p-6 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-xl"
        >
          ✖
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-md px-3 py-2 mb-4"
        />

        <button className="w-full bg-[#131921] text-white py-2 rounded-md">
          Create Account
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <button
            className="text-blue-600 font-semibold"
            onClick={onSwitch} // Switch to Login
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
