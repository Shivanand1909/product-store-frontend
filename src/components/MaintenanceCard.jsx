import React, { useState } from "react";

const MaintenanceCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-6 rounded-lg shadow-lg max-w-sm relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-yellow-700 font-bold hover:text-yellow-900"
        >
          ✕
        </button>
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl mb-2">🛠️</span>
          <p className="font-bold text-lg mb-1">Work in Progress</p>
          <p className="text-sm">
            You can still explore the site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCard;
