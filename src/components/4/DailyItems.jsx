import React from "react";
import ProductCard from "../ProductCard";
import { newProducts } from "../../data/products";

  
  const DailyItems = () => {
      return (
          <div className="px-3 py-4">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl font-bold mb-3">Daily Items</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-3">
        {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
        </div>
    )
    }
        export default DailyItems