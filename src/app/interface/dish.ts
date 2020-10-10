export interface Ingredient{
    name: string;
    qty: string;
}

export interface Dish{
    name:string;
    ingredients: Ingredient[];
}


