import React, {useState} from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {Recipe} from './interface';

function App() {
  let recipe1: Recipe = {
    id: 1,
    name: "Grilled Cedar Plank Brie",
    ingredients: "1 brie cheese, vinegar, honey,salt,pepper",
    instructions: "some instructions",
    cookingTime: 70,
    publicationDate: new Date()
  };
  
  let recipe2: Recipe = {
    id: 2,
    name: "Easy Summer Vegetable Pizza",
    ingredients: "batter, toamto sauce, mozarella, ham, corn",
    instructions: "some instructions",
    cookingTime: 30,
    publicationDate: new Date()
  };

  let recipe3: Recipe = {
    id: 3,
    name: "Banitsa",
    ingredients: "layers, eggs, youghurt, feta, soda, butter",
    instructions: "some instructions",
    cookingTime: 50,
    publicationDate: new Date()
  };

  let recipeInitial = [recipe1, recipe2, recipe3];

  const [recipes, setRecipes] = useState(recipeInitial);
  const [selectedRecipe, setRecipe] = useState<Recipe>(recipe1);

  return (
    <div className="App">
     <header>
      <h1>Supichka 2.0</h1>
     </header> 
     <div className='content-list'>
      <ul>
        <li>neshto</li>
        <li>sdfd</li>
        <li>asdf</li>
      </ul>

     </div >
     <div className='content-details'>detail</div>
     <div className='footer'>© 2023 Recipe Management System. All rights reserved.</div>
    </div>
  );
}

export default App;
