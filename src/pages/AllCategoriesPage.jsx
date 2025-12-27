import React from "react";
import { Link } from "react-router-dom";
import { grocerySubCategories, dairySubCategories, studySubCategories, partySubCategories } from "../data/categories";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

const categories = [
  { id: "1", name: "Grocery", subCategories: grocerySubCategories },
  { id: "2", name: "Dairy", subCategories: dairySubCategories },
  { id: "3", name: "Study", subCategories: studySubCategories },
  { id: "4", name: "Party", subCategories: partySubCategories },
];

const AllCategoriesPage = () => {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">All Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-4">{cat.name}</h2>
            <ul className="flex flex-col gap-2">
              {cat.subCategories.map((sc) => (
                <li key={sc.id}>
                  <Link
                    to={`/cn/${slugify(cat.name)}/${slugify(sc.name)}/cid/${cat.id}/scid/${sc.id}`}
                    className="block py-2 px-3 rounded hover:bg-green-100 transition"
                  >
                    {sc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategoriesPage;
