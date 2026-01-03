import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (item) => item.id === parseInt(id)
        );
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">
        {recipe.title}
      </h1>

      <h2 className="text-xl font-semibold mb-2">
        Ingredients
      </h2>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        Instructions
      </h2>
      <p className="text-gray-700">
        {recipe.instructions}
      </p>
    </div>
  );
}

export default RecipeDetail;
