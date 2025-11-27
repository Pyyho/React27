import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeList.css'

const RecipeList = ({ recipes, onRecipeSelect }) => {
  return (
    <div className="recipe-list">
      <h2>Все рецепты ({recipes.length})</h2>
      <div className="recipe-grid">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onSelect={onRecipeSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default RecipeList