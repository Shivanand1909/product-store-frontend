import React from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

const ProductCard = ({ product }) => {
  const qty = useCartStore((s) => s.cart[product.id]?.qty || 0);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pn/${slugify(product.name)}/pvid/${product.id}`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow hover:shadow-lg transition transform hover:scale-[1.02] flex flex-col p-3 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-lg"
        />

        {qty === 0 ? (
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent navigation
              addItem(product);
            }}
            className="absolute bottom-2 right-2 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow hover:bg-green-700 transition"
          >
            +
          </button>
        ) : (
          <div
            className="absolute bottom-2 right-2 bg-white shadow rounded-full flex items-center gap-2 px-2 py-1"
            onClick={(e) => e.stopPropagation()} // prevent whole card click
          >
            <button
              onClick={() => removeItem(product.id)}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
            >
              −
            </button>
            <span className="text-sm font-semibold">{qty}</span>
            <button
              onClick={() => addItem(product)}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700"
            >
              +
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <h3 className="mt-2 text-xs sm:text-sm font-semibold truncate">
        {product.name}
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
