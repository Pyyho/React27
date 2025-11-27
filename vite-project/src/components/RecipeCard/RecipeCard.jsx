import React from 'react'
import './RecipeCard.css'

const RecipeCard = ({ recipe, onSelect }) => {
  return (
    <div className="recipe-card" onClick={() => onSelect(recipe)}>
      <div className="card-image-container">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="card-image"
        />
        <div className="card-overlay">
          <span className="view-button">Посмотреть рецепт</span>
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{recipe.name}</h3>
        <p className="card-description">{recipe.shortDescription}</p>
        
        <div className="card-meta">
          <span className="cooking-time">⏱️ {recipe.cookingTime} мин</span>
          <span className="difficulty">📊 {recipe.difficulty}</span>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard