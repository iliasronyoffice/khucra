export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Glowing Gradient Spinner */}
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-5 border-t-transparent border-main animate-spin"></div>
        <div className="absolute inset-0 blur-xl bg-blue-400/30 rounded-full"></div>
      </div>

      <p className="mt-6 text-gray-700 text-lg font-semibold tracking-wide">
        Loading...
      </p>
    </div>
  );
}