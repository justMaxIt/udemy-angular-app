import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'This is a german dish - just awesome!',
      'https://media.istockphoto.com/photos/schnitzel-on-plate-top-view-picture-id895096318?k=20&m=895096318&s=612x612&w=0&h=wGFZTMUZfwJbYfNcVDsWKV_8v1IBo1sjVgBc2uA9Kwk=',
      [new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)]
    ),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://img.championat.com/c/1350x759/news/big/h/o/kak-prigotovit-pp-burger-doma-poshagovyj-recept_1647350044332638953.jpg',
      [new Ingredient('Buts', 2),
        new Ingredient('Meat', 1)]),
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
