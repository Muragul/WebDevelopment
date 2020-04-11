import { Component } from '@angular/core';
import { ProductsService} from '../products.service';
import { Product } from '../product';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Location } from '@angular/common';

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
    this.categoriesService.getCategory(id.substring(1, id.length))
      .subscribe(category => this.category = category);
    this.products = this.category.products;
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
