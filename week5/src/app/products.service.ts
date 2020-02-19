import { Injectable } from '@angular/core';
import { CategoriesService} from './categories.service';
import { Category } from './category';
import { Product } from './product';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[];
  selectedProduct: Product;
  category: Category;

  getProducts():  Observable<Product[]> {
    return of(this.products);
  }
  
  getProduct(id: string): Observable<Product> {
    return of(this.products.find(product => product.id = id));
  }
}
