import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../recipe-model'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() selectedValue = new EventEmitter<void>()
  @Input() item: Recipe;
  constructor() { }

  ngOnInit() {
  }
  selectedItem(){
 this.selectedValue.emit()
  }
}
