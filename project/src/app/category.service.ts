import { Injectable } from '@angular/core';
import { CATEGORIES} from './mock-categories';
import {Category} from './category';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = CATEGORIES;
  constructor() {
  }
  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

}
