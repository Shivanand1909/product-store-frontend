import React, { useState } from "react";

const subcategories = ["Apples", "Bananas", "Oranges", "Mangoes", "Grapes"];

const Subcategory = () => {
    const [activeSub, setActiveSub] = useState("Apples");

  return (
    <div className="flex gap-3 overflow-x-auto px-3 py-2 bg-gray-100 sticky top-[160px] sm:top-[112px] z-10 scroll-smooth snap-x">
      {subcategories.map((sub, idx) => (
        <button
          key={idx}
          onClick={() => setActiveSub(sub)}
          className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm border whitespace-nowrap transition ${
            activeSub === sub
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-gray-700 hover:bg-green-50"
          }`}
        >
          {sub}
        </button>
      ))}
    </div>
  );
};

export default Subcategory;
