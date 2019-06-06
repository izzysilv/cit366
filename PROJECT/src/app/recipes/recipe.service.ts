import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://blog.bulletproof.com/wp-content/uploads/2019/01/54-of-the-Best-Whole30-Recipes-on-the-Internet-_header-662x353.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 20)
            ]),
        new Recipe(
            'Another Test Recipe',
            'This is simply a test',
            'https://blog.bulletproof.com/wp-content/uploads/2019/01/54-of-the-Best-Whole30-Recipes-on-the-Internet-_header-662x353.jpg',
            [
                new Ingredient('Berries', 15),
                new Ingredient('Pickles', 3)
            ])
      ];
    
      constructor(private slService: ShoppingListService) {

      }

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}
