import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto"></div>
        <p className="text-gray-600 text-lg font-semibold">Mohon tunggu sebentar...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
