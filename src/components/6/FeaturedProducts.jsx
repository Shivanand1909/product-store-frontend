import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { newProducts } from "../../data/products";


const FeaturedProducts = () => {
  // const [featured, setFeatured] = useState([]);

  // useEffect(() => {
  //   // Filter featured/top-selling products
  //   const topProducts = dummyFeatured.filter(
  //     (p) => p.isFeatured || p.topSelling
  //   );
  //   setFeatured(topProducts);
  // }, []);

  // if (featured.length === 0) return null;

  return (
    <section className="px-3 py-4">
      <h2 className="text-lg sm:text-xl font-bold mb-3">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {newProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              img: product.img,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
