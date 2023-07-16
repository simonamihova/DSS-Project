import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Recipe } from '../interface';


interface Props {
    onSave: (recipe: Recipe) => void;
    onUpdate: (recipe: Recipe) => void;
    selectedRecipe: Recipe;
  }


  