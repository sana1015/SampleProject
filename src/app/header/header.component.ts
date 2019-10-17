import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(rec: string) {
    this.featureSelected.emit(rec);
  }

  constructor() { }

  ngOnInit() {
  }

}
