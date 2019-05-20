import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

@Input() recipe:Recipe;

isOpen =false;

dropdownToggle(){
     
    this.isOpen=!this.isOpen;

}


  constructor(private recipeService:RecipeService) { }


  onAddToShoppingList(){
    //console.log('on ADD');
    
    
    this.recipeService.onAddIngridientsToShoppingList(this.recipe.ingridients);
  
  }
  

  ngOnInit() {
  }

}
