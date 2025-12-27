import React, { useEffect, useState } from "react";
import useCartStore from "../store/cartStore";
import HeroBanner from "../components/HeroBanner";
import CategorySection from "../components/7/CategorySection";
import { dairySubCategories, electronicsSubCategories, grocerySubCategories, kidsSubCategories, partySubCategories, studySubCategories } from "../data/categories";
import DailyItems from "../components/4/DailyItems";
import Category from "../components/1/Category";
import Subcategory from "../components/2/Subcategory";
import NewInStore from "../components/3/NewInStore"
import Everything99 from "../components/5/Everything99";
import FeaturedProducts from "../components/6/FeaturedProducts";

const HomePage = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile Search */}
      <div className="sm:hidden px-3 py-2 bg-white sticky top-[56px] z-10 shadow-sm">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
        />
      </div>

      <Category />

      <Subcategory />

      <HeroBanner />

      <NewInStore />

      <DailyItems />

      <Everything99 />

      <FeaturedProducts />

      <div>
        {/* ... other sections ... */}
        <CategorySection
          title="Grocery & Kitchen"
          subCategories={grocerySubCategories}
        />
        <CategorySection
          title="Dairy & Breakfast"
          subCategories={dairySubCategories}
        />
        <CategorySection
          title="Dairy & Breakfast"
          subCategories={studySubCategories}
        />
        <CategorySection
          title="Dairy & Breakfast"
          subCategories={partySubCategories}
        />
        <CategorySection
          title="Dairy & Breakfast"
          subCategories={kidsSubCategories}
        />
        <CategorySection
          title="Dairy & Breakfast"
          subCategories={electronicsSubCategories}
        />
      </div>
    </div>
  );
};

export default HomePage;
