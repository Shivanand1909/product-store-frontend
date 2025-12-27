import React from "react";
import { useNavigate } from "react-router-dom";

const subCategories = [
  {
    id: "e78a8422-5f20-4e4b-9a9f-22a0e53962e3",
    name: "Fresh Vegetables",
    img: "https://picsum.photos/200/200?random=201",
    categoryId: "64374cfe-d06f-4a01-898e-c07c46462c36",
    categoryName: "Fruits & Vegetables",
  },
  {
    id: "b4827798-fcb6-4520-ba5b-0f2bd9bd7208",
    name: "Fresh Fruits",
    img: "https://picsum.photos/200/200?random=202",
    categoryId: "64374cfe-d06f-4a01-898e-c07c46462c36",
    categoryName: "Fruits & Vegetables",
  },
];

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

const CategorySection = ({ title }) => {
  const navigate = useNavigate();

  const handleOpen = (sub) => {
    navigate(
      `/cn/${slugify(sub.categoryName)}/${slugify(sub.name)}/cid/${sub.categoryId}/scid/${sub.id}`
    );
  };

  return (
    <div className="px-3 py-4">
      <h2 className="text-lg sm:text-xl font-bold mb-3">{title}</h2>

      <div className="flex w-full flex-wrap gap-3">
        {subCategories.map((sub) => (
          <div
            key={sub.id}
            onClick={() => handleOpen(sub)}
            className="px-4 py-2 bg-gray-100 shadow-sm rounded-3xl text-sm cursor-pointer hover:bg-green-100"
          >
            <img
              src={sub.img}
              alt={sub.name}
              className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-sm"
            />
            <h1 className="text-lg sm:text-xl text-center font-bold mx-8 mb-3">
              {sub.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
