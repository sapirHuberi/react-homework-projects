import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function RecipeList() {
    const location = useLocation();
    const userName = location.state?.user || "אורח";
    const [recipes, setRecipes] = useState([]);
    const [minServings, setMinServings] = useState(0);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(data => {
                setRecipes(data.recipes); 
            });
    }, []); 

    return (
        <div style={{ padding: '20px' }}>
            <h1>ברוך הבא, {userName}</h1>
            <hr />
            <ul>
                <div>
                    <label>חפש מתכון לפי מינימום מנות: </label>
                    <input
                        type="number"
                        value={minServings}
                        onChange={(e) => setMinServings(e.target.value)}
                    />
                </div>
                {recipes
                    .filter(r => r.servings >= minServings) 
                    .map(recipe => (
                        <li key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default RecipeList;