// LoadingScreen.jsx
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg- bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
