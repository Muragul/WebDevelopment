import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories: Category[];
  productsService: ProductsService;
  selectedCategory: Category;
  
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
     this.categoriesService.getCategories()
        .subscribe(categories => this.categories = categories);
  }

}
