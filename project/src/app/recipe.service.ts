import { Injectable } from '@angular/core';
import {List} from './list';
import {Recipe} from './recipe';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  list: Recipe[];
  constructor() {
    this.chooseList(1);
  }
  getRecipes(id: number): Observable<Recipe[]> {
    this.list = List.filter(
      recipe => recipe.category.id === id
    );
    return of (this.list);
  }
  chooseList(id: number): void {
    this.getRecipes(id).subscribe(list => this.list = list);
  }

}
