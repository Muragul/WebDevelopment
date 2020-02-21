import { Injectable } from '@angular/core';
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
  
  getProduct(id: string, c: Category): Observable<Product> {
    return of(c.products.find(product => product.id == id));
  }
}
