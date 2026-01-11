import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        setRecipe(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <h2>טוען מתכון...</h2>;

  if (!recipe || recipe.message) {
    return <h2>מתכון לא קיים</h2>; 
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} style={{ width: '200px' }} />
      <h3>מצרכים:</h3>
      <ul>
        {recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
      </ul>
      <h3>הוראות הכנה:</h3>
      <p>{recipe.instructions}</p>
      <p><strong>מספר מנות:</strong> {recipe.servings}</p>
    </div>
  );
}

export default RecipeDetails;