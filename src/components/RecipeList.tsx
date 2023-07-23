import React from 'react';
import { Recipe } from '../interface';
import { useState } from 'react';

interface Props{
    recipes: Recipe[];
    onSelectedRecipe: (data: Recipe ) => void;
    onDeleteRecipe: (recipes: Recipe[] ) => void;
}

const RecipeList: React.FC<Props> = (props: Props) =>{
    const[isRecipeDeleted, setIsRecipeDeleted] = useState(false);
    const [selectedRecipe, setRecipe] = useState<Recipe>();

    const handleClick = (id: Number, ignoreItem: boolean) =>{
        let foundRecipe = props.recipes.find((item) => item.id === id) as Recipe;
        props.onSelectedRecipe(foundRecipe);

    };

    const handleDelete = (id: number) => {
        let deletedRecipe = props.recipes.find((item) => item.id === id) as Recipe;
        deletedRecipe.active = false;
        setRecipe(selectedRecipe);
        const updatedRecipes = props.recipes.filter((Recipe) => Recipe.id !== id);
        props.onDeleteRecipe(updatedRecipes);
    };
    return(
        <>
            <h2>Recipe List</h2>
            {props.recipes.length === 0 ? <h3>Empty list.... Share your ideas with us! Fill in the details section on the right
            </h3>: null }
            {props.recipes.map((item) => (
                <li key={item.id} onClick={(ev) => {handleClick(item.id, isRecipeDeleted) }}>
                    <p className="id">{item.id}</p>
                    <p className="field1">Name: {item.name}</p>
                    <p className="field2">Ingredients: {item.ingredients}</p>
                    <p className="field3">Instructions: {item.instructions}</p>
                    <p className="field4"> Cooking time: {item.cookingTime} min</p>
                    <p className="field5">{item.publicationDate.toDateString()}</p>

                    <button className="deleteButton" onClick={() => handleDelete(item.id)}>Delete Recipe</button>
                </li>
            ))}
        </>
    );
};

export default RecipeList;