import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

@Input() recipe :Recipe;


  constructor(private recipeService:RecipeService) { }



  onRecipeSelected(){

    this.recipeService.recipeSelected.emit(this.recipe);
  
  }
  ngOnInit() {
  }

}
