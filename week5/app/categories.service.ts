import { Injectable } from '@angular/core';
import { Categories } from './categories';
import { Category } from './category';
import { ProductsService } from './products.service';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: Category[];
  productsService: ProductsService;


  constructor() {
    this.categories = Categories;
  }

  getCategories():  Observable<Category[]> {
    return of(Categories);
  }

  getCategory(id: string): Observable<Category> {
    return of(Categories.find(category => category.id == id));
  }
}
