import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Recipe } from '../interface';


interface Props {
    onSave: (recipe: Recipe) => void;
    onUpdate: (recipe: Recipe) => void;
    selectedRecipe: Recipe;
  }


  const RecipeDetails : React.FC<Props> = (props: Props) =>{
    let clearedRecipe : Recipe = {
      id: -1,
      name: "",
      ingredients: "",
      instructions: "",
      cookingTime: 0,
      publicationDate: new Date(),
      active: true,
    };

    const[selectedRecipe, setRecipe] = useState<Recipe>(clearedRecipe);

    useEffect(() => {
      if(props.selectedRecipe.active){
        setRecipe(props.selectedRecipe);
      }
      else{
        handleClear();
      }
    },[props.selectedRecipe])

    const handleClear = () =>{
      setRecipe(clearedRecipe);

    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
      const {name, value} = e.target;
      setRecipe(prevRecipe => ({...prevRecipe, [name] : value}));

    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setRecipe(prevRecipe => ({...prevRecipe, publicationDate : new Date(value)}));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(selectedRecipe.id !== -1){
        props.onUpdate(selectedRecipe);
    }
    else{
        props.onSave(selectedRecipe);
    }


  };

  return(
    <>
    <h2>Recipe Details:</h2>
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name">Name: 
        </label>
        <input
            className='field'
            type="text"
            id="field1"
            name="name"
            value={selectedRecipe.name}
            onChange={handleInputChange}
            required
        />
        </div>
        <div>
        <label htmlFor="ingredients">Ingredients: </label>
        <input
            className='field'
            type="text"
            id="field2"
            name="ingredients"
            value={selectedRecipe.ingredients}
            onChange={handleInputChange}
            required
        />
        </div>
        <div>
        <label htmlFor="instructions">Instructions: </label>
        <input
            className='field'
            type="text"
            id="field3"
            name="instructions"
            value={selectedRecipe.instructions}
            onChange={handleInputChange}
            required
        />
        </div>
        <div>
        <label htmlFor="cookingTime">Cooking Time: </label>
        <input
            className='field'
            type="number"
            id="field4"
            name="cookingTime"
            value={selectedRecipe.cookingTime}
            onChange={handleInputChange}
            required
        />
        </div>
        <div>
        <label htmlFor="publicationDate">Date: </label>
        <br></br>
        <input
            className='field'
            type="date"
            id="field5"
            name="publicationDate"
            value={selectedRecipe.publicationDate.toISOString().substring(0, 10)}
            onChange={handleDateChange}
            required
        />
        </div>
        <button className = 'button' id='saveButton' type='submit'>Save</button>
    </form>

    <button className = 'button' id='clearButton' onClick={handleClear}>Clear</button>

</>

  );

  };


  export default RecipeDetails;