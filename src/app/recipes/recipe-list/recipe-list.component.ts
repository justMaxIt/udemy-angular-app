import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is a test', 'https://www.freeiconspng.com/thumbs/recipes-icon-png/recipe-book-png-file-3.png'),
  new Recipe('A Test Recipe', 'This is a test', 'https://www.freeiconspng.com/thumbs/recipes-icon-png/recipe-book-png-file-3.png'),
];

  constructor() { }

  ngOnInit(): void {
  }

}
