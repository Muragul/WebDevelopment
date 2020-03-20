import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  list = List
  selectedItem: Recipe;
  constructor() { }

  ngOnInit() {
  }

  show(recipe: Recipe){
    this.selectedItem = recipe;
    document.getElementById("modal1").classList.toggle("modal2");
  }

}
