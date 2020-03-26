import { Component, OnInit } from '@angular/core';
import {List} from '../list';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  list: Recipe[];
  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.list = this.recipeService.chooseList(1);
  }

  save() {
    alert('saved');
  }

}
