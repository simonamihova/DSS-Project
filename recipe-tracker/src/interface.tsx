export interface Recipe{
    id: number;
    name: string;
    ingredients: string;
    instructions: string;
    cookingTime: number;
    publicationDate: Date;
    active: boolean,
}