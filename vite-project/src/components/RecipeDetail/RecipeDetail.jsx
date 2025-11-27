import React from 'react'
import './RecipeDetail.css'

const RecipeDetail = ({ recipe, onBack }) => {
  return (
    <div className="recipe-detail">
      <button className="back-button" onClick={onBack}>
        ← Назад к списку
      </button>
      
      <div className="detail-header">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="detail-image"
        />
        <div className="detail-info">
          <h1>{recipe.name}</h1>
          <p className="detail-description">{recipe.shortDescription}</p>
          
          <div className="detail-meta">
            <div className="meta-item">
              <strong>Время приготовления:</strong>
              <span>{recipe.cookingTime} минут</span>
            </div>
            <div className="meta-item">
              <strong>Сложность:</strong>
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="detail-content">
        <div className="detail-section">
          <h2>Ингредиенты</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div className="detail-section">
          <h2>Инструкция приготовления</h2>
          <ol className="instructions-list">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail