import React from "react";
import {Link} from "react-router-dom";
import { ShoppingCart, Person } from "@mui/icons-material";
import useCartStore from "../store/cartStore";

const Navbar = () => {
  const totalCount = useCartStore((s) =>
    Object.values(s.cart).reduce((a, i) => a + i.qty, 0)
  );

  return (
    <nav className="bg-white shadow-md px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between sticky top-0 z-20">
      {/* Logo */}
      <h1 className="text-lg sm:text-2xl font-bold text-green-600 app-title">Sethji</h1>

      {/* Search (hidden on mobile, visible on sm+) */}
      <input
        type="text"
        placeholder="Search for products..."
        className="hidden sm:block w-1/2 lg:w-1/3 px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Icons */}
      <div className="flex items-center gap-3 sm:gap-4">
      <div className="flex items-center gap-3 sm:gap-4 relative">
        <Link to="/cart">
          <ShoppingCart className="cursor-pointer text-gray-600 hover:text-green-600" />
          {totalCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </Link>
      </div>
        <Person className="cursor-pointer text-gray-600 hover:text-green-600" />
      </div>
    </nav>
  );
};

export default Navbar;
