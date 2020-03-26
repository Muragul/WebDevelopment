import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }
  function(id: number) {
    this.categoryService.selectCategory(id);
  }

}
