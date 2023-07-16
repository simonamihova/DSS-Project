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
    
}