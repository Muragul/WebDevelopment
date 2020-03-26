import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  selectedItem = List[0];
  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findRecipe();
  }

  findRecipe() {
    let id = this.route.snapshot.paramMap.get('recipeId');
    id = id.substr(1);
    this.selectedItem = List.find(recipe => recipe.id.toString() === id);
  }

  back(): void {
    this.location.back();
  }

  save() {
    alert('saved');
  }
}
