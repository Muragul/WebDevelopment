import { Component } from '@angular/core';
import { ProductsService} from '../products.service';
import { Product } from '../product';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Location } from '@angular/common';
import { Jewerly } from '../jewerly';
import { Cosmetics } from '../cosmetics';
import { Smartphones } from '../smartphones';
import { Bags } from '../bags';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  category: Category;
  products: Product[];
  categoryID: number;
  productService: ProductsService;

  constructor(private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private location: Location) {

    }
  
  ngOnInit(): void {
        this.getCategory();
      }

  getCategory(): void {
    let id = this.route.snapshot.paramMap.get("categoryId");
    switch (id){
      case ":1":
        this.products = Cosmetics;
        break;
      case ":2":
        this.products = Smartphones;
        break;
      case ":3":
        this.products = Jewerly;
        break;
      case ":4":
        this.products = Bags;
        break;
    }
    this.categoriesService.getCategory(id)
      .subscribe(category => this.category = category);
  }
  
  goBack(): void {
    this.location.back();
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
