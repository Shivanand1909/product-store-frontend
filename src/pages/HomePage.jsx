import React, { useState } from "react";
import useCartStore from "../store/cartStore";
import HeroBanner from "../components/HeroBanner";
import CategorySection from "../components/7/CategorySection";
import { 
  dairySubCategories, electronicsSubCategories, grocerySubCategories, 
  kidsSubCategories, partySubCategories, studySubCategories 
} from "../data/categories";
import DailyItems from "../components/4/DailyItems";
import Category from "../components/1/Category";
import Subcategory from "../components/2/Subcategory";
import NewInStore from "../components/3/NewInStore";
import Everything99 from "../components/5/Everything99";
import FeaturedProducts from "../components/6/FeaturedProducts";

const HomePage = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  // New State for Category and Subcategory
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubCategory, setActiveSubCategory] = useState("Apples");

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

      {/* Passing State and Setters as Props */}
      <Category 
        activeCat={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {/* Only show Subcategory bar if a category like Fruits or Vegetables is picked */}
      {(activeCategory === "Fruits" || activeCategory === "Vegetables" || activeCategory === "All") && (
        <Subcategory 
          activeSub={activeSubCategory} 
          onSubChange={setActiveSubCategory} 
        />
      )}

      {/* Logic: If 'All' is selected, show the default landing page */}
      {activeCategory === "All" ? (
        <>
          <HeroBanner />
          <NewInStore />
          <DailyItems />
          <Everything99 />
          <FeaturedProducts />

          <div>
            <CategorySection
              title="Grocery & Kitchen"
              subCategories={grocerySubCategories}
            />
            <CategorySection
              title="Dairy & Breakfast"
              subCategories={dairySubCategories}
            />
            <CategorySection
              title="Study Essentials"
              subCategories={studySubCategories}
            />
            <CategorySection
              title="Party Essentials"
              subCategories={partySubCategories}
            />
            <CategorySection
              title="Kids Collection"
              subCategories={kidsSubCategories}
            />
            <CategorySection
              title="Electronics and Appliances"
              subCategories={electronicsSubCategories}
            />
          </div>
        </>
      ) : (
        /* Logic: If a specific category is picked, show the Category-Specific View */
        <div className="p-6 bg-white min-h-[400px]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {activeCategory} Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Here you would map your filtered products based on activeCategory */}
            <p className="col-span-full text-gray-500 italic">
              Showing products for {activeCategory} {activeCategory === "Fruits" ? `> ${activeSubCategory}` : ""}...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;