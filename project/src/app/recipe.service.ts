import { Injectable } from '@angular/core';
import {List} from './list';
import {Recipe} from './recipe';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  list: Recipe[];

  constructor() { }

  chooseList(id: number): Recipe[] {
    this.list = List.filter(
      recipe => recipe.category.id === id
    );
    return this.list;
  }

}
