// Sidebar.jsx
import { Link } from "react-router-dom";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

function Sidebar({ subCategories, categorySlug }) {
  return (
    <div className="w-64 p-4 border-r">
      <h2 className="font-bold text-lg mb-4">SubCategories</h2>
      <ul>
        {subCategories?.map(sc => (
          <li key={sc.id}>
            <Link to={`/cn/${slugify(categorySlug)}/${slugify(sc.name)}/cid/${sc.categoryId}/scid/${sc.id}`} className="block py-2 hover:text-blue-500">
              {sc.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
