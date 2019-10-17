import { Component, OnInit } from '@angular/core';
import { Ing } from '../shared/ingre-model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingr: Ing[] = [
    new Ing('Apple', 20),
    new Ing('mango', 35)
  ];

  constructor() { }

  ngOnInit() {
  }

}
