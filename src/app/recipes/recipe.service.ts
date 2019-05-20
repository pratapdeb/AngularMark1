import { Recipe } from "./recipes.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingridient.modal';
import { ShoppingSrvice } from '../shopping-list/shoping.service';

@Injectable()

export class RecipeService{


recipeSelected=new EventEmitter<Recipe>();
   private recipes:Recipe[]=[

        new Recipe('testRecipe',
        'text description',
        'https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg'
        ,[new Ingridient('meat',5)])

        ,new Recipe('testRecipe2',
        'text description2',
        'https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg'
        ,[new Ingridient('salad',6)])
      ];




      getRecipes(){

        return this.recipes.slice();
      }


      constructor(private shoppingService:ShoppingSrvice){}

      onAddIngridientsToShoppingList(ingridient:Ingridient[]){

        console.log('recipe called');
        
        this.shoppingService.onAddFromShoppingList(ingridient);

      }
}