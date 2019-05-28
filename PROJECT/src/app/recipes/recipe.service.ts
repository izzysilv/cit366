import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://blog.bulletproof.com/wp-content/uploads/2019/01/54-of-the-Best-Whole30-Recipes-on-the-Internet-_header-662x353.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://blog.bulletproof.com/wp-content/uploads/2019/01/54-of-the-Best-Whole30-Recipes-on-the-Internet-_header-662x353.jpg')
      ];
    
      getRecipes() {
          return this.recipes.slice();
      }

}