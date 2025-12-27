import React, { useState } from "react";
import useCartStore from "../store/cartStore";
import { useParams } from "react-router-dom";
import { newProducts } from "../data/products";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const myproduct = newProducts.find((p) => p.id === parseInt(productId));

  if (!myproduct) return <div>Product not found</div>;

  const qtyInCart = useCartStore((s) => s.cart[myproduct.id]?.qty || 0);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);

  const handleQuantityChange = (amount) => {
    if (qtyInCart + amount < 0) return; // prevent negative
    if (qtyInCart === 0 && amount < 0) return;
    if (amount > 0) addItem(myproduct);
    else removeItem(myproduct.id);
  };

  const handleAddToCart = () => {
    addItem({ ...myproduct, qty: qtyInCart });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      {/* Left: Image Gallery */}
      <div className="flex-1">
        <img
          src={myproduct?.img}
          alt={myproduct.name}
          className="w-full h-96 object-cover rounded-lg shadow"
        />
        {/* Add to Cart / Quantity Selector (same spot & size) */}
        <div className="mt-6 w-full">
          {qtyInCart > 0 ? (
            <div className="flex items-center justify-between gap-4 border rounded-lg px-4 py-3 w-full">
              <button
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
                onClick={() => handleQuantityChange(-1)}
              >
                −
              </button>
              <span className="font-semibold text-lg">{qtyInCart}</span>
              <button
                className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="bg-green-500 text-white px-6 py-3 rounded w-full hover:bg-green-600 transition"
              onClick={() => addItem(myproduct)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="flex-1 flex flex-col justify-start">
        <h1 className="text-2xl font-bold">{myproduct.name}</h1>
        <p className="text-xl text-green-600 font-semibold mt-2">
          ₹{myproduct.price}
        </p>

        {/* Product Description */}
        {myproduct.description && (
          <div className="mt-6">
            <h2 className="font-semibold text-lg mb-2">Product Details</h2>
            <p className="text-gray-700">{myproduct.description}</p>
          </div>
        )}

        {/* Similar Products */}
        {myproduct.similarProducts?.length > 0 && (
          <div className="mt-8">
            <h2 className="font-semibold text-lg mb-2">You may also like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {myproduct.similarProducts.map((sp) => (
                <div
                  key={sp.id}
                  className="border rounded-lg p-2 flex flex-col items-center cursor-pointer hover:shadow-lg"
                >
                  <img
                    src={sp.img}
                    alt={sp.name}
                    className="w-full h-24 object-cover rounded"
                  />
                  <p className="mt-2 text-sm font-medium">{sp.name}</p>
                  <p className="text-green-600 font-semibold">₹{sp.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
