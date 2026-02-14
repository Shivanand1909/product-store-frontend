import React, { useState } from "react";
import useCartStore from "../store/cartStore";
import HeroBanner from "../components/HeroBanner";
import CategorySection from "../components/7/CategorySection";
import {
  dairySubCategories,
  electronicsSubCategories,
  grocerySubCategories,
  kidsSubCategories,
  partySubCategories,
  studySubCategories,
} from "../data/categories";
import DailyItems from "../components/4/DailyItems";
import Category from "../components/1/Category";
import Subcategory from "../components/2/Subcategory";
import NewInStore from "../components/3/NewInStore";
import Everything99 from "../components/5/Everything99";
import FeaturedProducts from "../components/6/FeaturedProducts";

const HomePage = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubCategory, setActiveSubCategory] = useState("");

  const categoryDataMap = {
    Grocery: grocerySubCategories,
    Dairy: dairySubCategories,
    Study: studySubCategories,
    Party: partySubCategories,
    Kids: kidsSubCategories,
    Electronics: electronicsSubCategories,
  };

  const currentSubItems = categoryDataMap[activeCategory] || [];

  const handleCategoryChange = (catName) => {
    setActiveCategory(catName);
    setActiveSubCategory("");
  };

  return (
    //bg-gray-50 base, min-h-screen, no overflow
    <div className="bg-gray-50 min-h-screen w-full overflow-x-hidden">

      {/*Mobile search bar — sticky, readable font size */}
      <div className="sm:hidden px-3 py-2 bg-white sticky top-14 z-10 shadow-sm">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-3 py-2 border border-gray-200 rounded-full
                     focus:outline-none focus:ring-2 focus:ring-green-500
                     text-sm bg-gray-50"
        />
      </div>

      {/* Category Bar */}
      <Category
        activeCat={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Subcategory Bar — only when a category with sub-items is selected */}
      {activeCategory !== "All" && currentSubItems.length > 0 && (
        <Subcategory
          items={currentSubItems}
          activeSub={activeSubCategory}
          onSubChange={setActiveSubCategory}
        />
      )}

      {/* ── "All" view ────────────────────────────────── */}
      {activeCategory === "All" ? (
        <>
          <HeroBanner />
          <NewInStore />
          <DailyItems />
          <Everything99 />

          {/*Product grid in max-width container */}
          <FeaturedProducts />

          {/* Category Sections */}
          <div className="w-full">
            <CategorySection title="Grocery & Kitchen"        subCategories={grocerySubCategories} />
            <CategorySection title="Dairy & Breakfast"        subCategories={dairySubCategories} />
            <CategorySection title="Study Essentials"         subCategories={studySubCategories} />
            <CategorySection title="Party Essentials"         subCategories={partySubCategories} />
            <CategorySection title="Kids Collection"          subCategories={kidsSubCategories} />
            <CategorySection title="Electronics and Appliances" subCategories={electronicsSubCategories} />
          </div>
        </>
      ) : (
        /* ── Category-Specific view ───────────────────── */
        // px-4 sm:px-6 for readable spacing on all screens
        <div className="px-4 sm:px-6 py-6 bg-white min-h-[400px]">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
            {activeCategory} Products
          </h2>
          <p className="text-sm text-gray-500 mb-6 italic">
            Showing items for {activeCategory}
            {activeSubCategory ? ` > ${activeSubCategory}` : ""}
          </p>

          {/* grid — 2 cols mobile, 4 cols desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {/* ProductCard components mapped here in future tasks */}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;