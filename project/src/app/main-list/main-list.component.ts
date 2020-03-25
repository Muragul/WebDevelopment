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
  constructor() { }

  ngOnInit() {
  }


  save() {
    alert('saved');
  }

}
