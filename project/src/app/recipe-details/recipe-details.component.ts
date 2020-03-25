import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe';
import { List } from '../list';
import { RECIPES} from '../all-recipes';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  selectedItem = List[0];
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    alert('saved');
  }
}
