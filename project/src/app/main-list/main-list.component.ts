import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  list = RECIPES;
  selectedItem: Recipe;
  constructor() { }

  ngOnInit() {
  }

  show(recipe: Recipe){
    this.selectedItem = recipe;
    document.getElementById("modal1").classList.toggle("modal2");
  }

  save(){
    alert("saved");
  }

}
