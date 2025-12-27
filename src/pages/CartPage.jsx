import React from "react";
import useCartStore from "../store/cartStore";

const CartPage = () => {
  const cart = useCartStore((s) => s.cart);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);
  const clearCart = useCartStore((s) => s.clearCart);

  const items = Object.values(cart);
  const total = items.reduce((sum, it) => sum + it.qty * it.price, 0);

  if (items.length === 0)
    return <div className="p-4">Your cart is empty. Add some items!</div>;

  return (
    <div className="p-4">
      {items.map((it) => (
        <div
          key={it.id}
          className="flex items-center gap-4 mb-3 bg-white p-3 rounded shadow"
        >
          <img
            src={it.img}
            alt={it.name}
            className="w-16 h-16 object-cover rounded"
          />
          <div className="flex-1">
            <div className="font-semibold">{it.name}</div>
            <div className="text-sm text-gray-600">₹{it.price} each</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => removeItem(it.id)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              −
            </button>
            <div className="px-3">{it.qty}</div>
            <button
              onClick={() => addItem(it)}
              className="px-2 py-1 bg-green-600 text-white rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4 p-4 bg-white rounded shadow">
        <div className="flex justify-between font-semibold">
          Total <span>₹{total}</span>
        </div>
        <button className="mt-3 w-full bg-green-600 text-white py-2 rounded">
          Checkout (stub)
        </button>
        {/* <button
          onClick={clearCart}
          className="mt-2 w-full text-sm text-red-600"
        >
          Clear cart
        </button> */}
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to clear the cart?")) {
              clearCart();
            }
          }}
          className="mt-2 w-full text-sm text-red-600"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;
