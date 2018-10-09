import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('A test recipe',
                   'This is a test',
                   'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7b/Shoto_angry.png/revision/latest?cb=20170720022932',
                   [
                       new Ingredient('meat',1),
                       new Ingredient('pasta',300)
                   ]),
        new Recipe('Todoroki',
                   'This is not a test',
                   'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7b/Shoto_angry.png/revision/latest?cb=20170720022932',
                   [
                       new Ingredient('Burger Patty', 500),
                       new Ingredient('Buns', 1000)
                   ])
    ];

    getRecipes(){
        return this.recipes.slice(); //return an exact COPY of the array
    }
}