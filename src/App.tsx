import React, {useState, useEffect} from 'react';
import './styles/App.css';
import {Recipe} from './interface';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';

function App() {

  

  let recipe1: Recipe = {
    id: 1,
    name: "Grilled Cedar Plank Brie",
    ingredients: "1 brie cheese, vinegar, honey,salt,pepper",
    instructions: "some instructions",
    cookingTime: 70,
    publicationDate: new Date(),
    active: true
  };
  
  let recipe2: Recipe = {
    id: 2,
    name: "Easy Summer Vegetable Pizza",
    ingredients: "batter, toamto sauce, mozarella, ham, corn",
    instructions: "some instructions",
    cookingTime: 30,
    publicationDate: new Date(),
    active: true
  };

  let recipe3: Recipe = {
    id: 3,
    name: "Banitsa",
    ingredients: "layers, eggs, youghurt, feta, soda, butter",
    instructions: "some instructions",
    cookingTime: 50,
    publicationDate: new Date(),
    active: true
  };

  let recipeInitial = [recipe1, recipe2, recipe3];

  const [recipes, setRecipes] = useState(recipeInitial);
  const [selectedRecipe, setRecipe] = useState<Recipe>(recipe1);

    const handleSaveRecipe = (Recipe : Recipe) => {
    let RecipeLenght = recipes.length + 1;
    Recipe.id = RecipeLenght;
    let RecipesArray = [...recipes, Recipe] as Recipe[];
    setRecipes(RecipesArray);
  }

    const handleRecipeUpdate = (Recipe : Recipe) => {
    let RecipeIndex = recipes.findIndex((item) => item.id === Recipe.id);
    let RecipesArray = [...recipes];
    let updatedRecipe = {...recipes[RecipeIndex]};
    updatedRecipe = Recipe;
    RecipesArray[RecipeIndex] = updatedRecipe;
    setRecipes(RecipesArray);
  }

  const handleRecipeSelection = (Recipe : Recipe) => {
    setRecipe(Recipe);
  }

  const handleRecipeDelete = (RecipeArray : Recipe[]) => {
    let idIndex = 1;
    for (let i = 0; i < RecipeArray.length; i++) RecipeArray[i].id = idIndex++;

    return RecipeArray;
  }

  return (
    <div className="App">
     <div className = 'navbar'>
      <h1>Supichka 2.0 </h1>
     </div>
     <div className='content-list'>
     <RecipeList recipes = {recipes} onSelectedRecipe={handleRecipeSelection} onDeleteRecipe={(newRecipes) => setRecipes(handleRecipeDelete(newRecipes))} />
     </div >
     <div className='content-details'>
     <RecipeDetails onSave={handleSaveRecipe} onUpdate={handleRecipeUpdate} selectedRecipe={selectedRecipe} />
     </div>
     <div className='footer'>© 2023 Recipe Management System. All rights reserved.</div>
    </div>
  );
}

export default App;
