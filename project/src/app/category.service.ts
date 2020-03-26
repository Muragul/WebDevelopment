import { Injectable } from '@angular/core';
import { CATEGORIES} from './mock-categories';
import {Category} from './category';
import {RecipeService} from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = CATEGORIES;
  selectedCategory: Category;
  constructor(
    private recipeService: RecipeService
  ) {
    this.selectedCategory = this.categories[0];
  }
  getCategories(): Category[] {
    return this.categories;
  }
  selectCategory(id: number) {
    this.selectedCategory = this.categories[id - 1];
    this.recipeService.chooseList(id);
    alert(this.selectedCategory.name);
  }

}
