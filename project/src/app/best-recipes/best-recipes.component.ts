import { Component, OnInit } from '@angular/core';
import { RECIPES } from '../mock-recipes';
import { List } from '../list';

@Component({
  selector: 'app-best-recipes',
  templateUrl: './best-recipes.component.html',
  styleUrls: ['./best-recipes.component.css']
})
export class BestRecipesComponent implements OnInit {

  recipes = RECIPES;

  constructor() { }

  ngOnInit(): void {
  }

}
