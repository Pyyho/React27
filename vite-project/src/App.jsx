import React, { useState } from 'react'
import RecipeList from './components/RecipeList/RecipeList'
import RecipeDetail from './components/RecipeDetail/RecipeDetail'
import recipesData from './data/recipes.json'
import './App.css'

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe)
  }

  const handleBackToList = () => {
    setSelectedRecipe(null)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🍳 Каталог рецептов</h1>
        <p>Ваша коллекция вкусных блюд</p>
      </header>
      
      <main className="main">
        {selectedRecipe ? (
          <RecipeDetail 
            recipe={selectedRecipe} 
            onBack={handleBackToList}
          />
        ) : (
          <RecipeList 
            recipes={recipesData.recipes}
            onRecipeSelect={handleRecipeSelect}
          />
        )}
      </main>
      
      <footer className="footer">
        <p>© 2024 Каталог рецептов. Все права защищены.</p>
      </footer>
    </div>
  )
}

export default App