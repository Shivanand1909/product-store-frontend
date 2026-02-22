import React from "react";
import ProductCard from "../ProductCard/ProductCard";

/**
 * ProductGrid Component
 * Renders a responsive grid of ProductCard components.
 * 
 * Props:
 * @param {Array} products - Array of product objects to display
 * 
 * Mobile: 2 columns
 * Tablet: 3 columns
 * Desktop: 4 columns
 */
const ProductGrid = ({ products }) => {
    if (!products || products.length === 0) {
        return (
            <div className="flex items-center justify-center p-10 text-gray-500">
                <p className="text-lg">No products found</p>
            </div>
        );
    }

    return (
        <section className="py-8 bg-white min-h-[300px]">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
