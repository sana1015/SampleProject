import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-model'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply test', 'https://pixabay.com/illustrations/pizza-pizza-icon-pizza-slice-1428931/')
  ]
  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe : Recipe) {
    this.selected.emit(recipe)
  }
}
