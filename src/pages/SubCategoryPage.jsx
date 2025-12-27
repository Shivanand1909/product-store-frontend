// SubCategoryPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { dairySubCategories } from "../data/categories";
import Sidebar from "../components/7/Sidebar";

// import axios from "axios";

function SubCategoryPage() {
  const { categorySlug } = useParams();

const dummyItems = [
  {
    id: 101,
    name: "Smartphone X1",
    price: 299.99,
    img: "https://via.placeholder.com/200x200?text=Smartphone+X1",
    isFeatured: true,
  },
  {
    id: 102,
    name: "Wireless Headphones",
    price: 99.99,
    img: "https://via.placeholder.com/200x200?text=Headphones",
    isFeatured: true,
  },
  {
    id: 103,
    name: "Gaming Mouse",
    price: 49.99,
    img: "https://via.placeholder.com/200x200?text=Gaming+Mouse",
    topSelling: true,
  },
  {
    id: 104,
    name: "Laptop Pro 15",
    price: 1299.99,
    img: "https://via.placeholder.com/200x200?text=Laptop+Pro+15",
    isFeatured: true,
  },
];
//   const [subCategory, setSubCategory] = useState(null);

//   useEffect(() => {
//     // Fetch subcategory details
//     axios.get(`/api/subcategories/${id}`).then(res => setSubCategory(res.data));

//     // Fetch items for this subcategory
//     axios.get(`/api/items?subCategoryId=${id}`).then(res => setItems(res.data));
//   }, [id]);

//   if (!subCategory) return <div>Loading...</div>;

  return (
    <div className="flex">
      <Sidebar subCategories={dairySubCategories} categorySlug={categorySlug} /> {/* Filters, other subcategories, etc. */}
      
      <div className="flex-1 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {dummyItems.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default SubCategoryPage;
