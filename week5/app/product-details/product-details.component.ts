import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';
import { Product} from '../product';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Location } from '@angular/common';
import { Category } from '../category';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: Product[];
  product: Product;
  category: Category;

  constructor(private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private productService: ProductsService,  
    private location: Location) {
  }

  ngOnInit(): void {
    this.findProduct();
  }

  goBack(): void {
    this.location.back();
  }

  findProduct(){
    let id = this.route.snapshot.paramMap.get("productId");
    this.categoriesService.getCategory(id.substring(1,2))
      .subscribe(category => this.category = category);
    this.productService.getProduct(id.substring(1, id.length), this.category)
      .subscribe(product => this.product = product);
  }
}
