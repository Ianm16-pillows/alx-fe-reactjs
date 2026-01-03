import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (item) => item.id === parseInt(id)
        );
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">
        {recipe.title}
      </h1>

      <h2 className="text-xl font-semibold mb-2">
        Ingredients
      </h2>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
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

