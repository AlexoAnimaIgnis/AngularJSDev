import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";

export class RecipeService {
    private recipes : Recipe[] = [
        new Recipe('A test recipe','This is a test','https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7b/Shoto_angry.png/revision/latest?cb=20170720022932'),
        new Recipe('Todoroki','This is not a test','https://vignette.wikia.nocookie.net/bokunoheroacademia/images/7/7b/Shoto_angry.png/revision/latest?cb=20170720022932')
    ];

    getRecipes(){
        return this.recipes.slice(); //return an exact COPY of the array
    }
}