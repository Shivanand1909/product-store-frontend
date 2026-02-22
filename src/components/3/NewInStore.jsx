import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { newProducts } from "../../data/products";

const NewInStore = () => {
  return (
    <div className="px-3 py-4">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl font-bold mb-3">🆕 New in Store</h2>

      {/* Horizontal Scroll */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {newProducts.map((p) => (
          <div key={p.id} className="min-w-[150px] sm:min-w-[180px]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewInStore;
