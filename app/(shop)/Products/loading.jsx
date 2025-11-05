import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>

      {/* Loading text */}
      <p className="mt-4 text-gray-700 text-lg font-medium">Loading...</p>
    </div>
  );
}