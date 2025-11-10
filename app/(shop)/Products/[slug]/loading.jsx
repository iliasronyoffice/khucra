// export default function Loading() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white">
//       <div className="relative">
//         <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
//         <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-blue-300 opacity-50 animate-ping"></div>
//       </div>

//       <p className="mt-5 text-blue-700 text-lg font-medium">Please wait...</p>
//     </div>
//   );
// }

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Glowing Gradient Spinner */}
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-blue-500 animate-spin"></div>
        <div className="absolute inset-0 blur-xl bg-blue-400/30 rounded-full"></div>
      </div>

      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main"></div>
      </div>
    </div>
  );
}
