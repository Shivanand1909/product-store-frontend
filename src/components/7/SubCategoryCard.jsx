// SubCategoryCard.jsx
import { useNavigate } from "react-router-dom";

function SubCategoryCard({ subCategory }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/subcategory/${subCategory._id}`);
  };

  return (
    <div
      className="card cursor-pointer p-4 shadow rounded hover:shadow-lg"
      onClick={handleClick}
    >
      <h3 className="text-lg font-bold">{subCategory.name}</h3>
      <p>{subCategory.description}</p>
    </div>
  );
}

export default SubCategoryCard;
