import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';
import { Product} from '../product';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Location } from '@angular/common';
import { Smartphones } from '../smartphones';
import { Cosmetics } from '../cosmetics';
import { Jewerly } from '../jewerly';
import { Bags } from '../bags';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: Product[];
  product: Product;
  productService: ProductsService;
  k: number;

  constructor(private route: ActivatedRoute,
    private categoriesService: CategoriesService,
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
    let cat = id.substring(1,2);
    let num = id.substring(2, id.length);
    switch (cat) {
      case "c":
        this.products = Cosmetics;
        break;
      case "s":
        this.products = Smartphones;
        break;
      case "b":
        this.products = Bags;
        break;
      case "j":
        this.products = Jewerly;
        break;
    }
    switch (num){
      case "1":
        this.k = 1;
        break;
      case "2":
        this.k = 2;
        break;
      case "3":
        this.k = 3;
        break;
      case "4":
        this.k = 4;
        break;
      case "5":
        this.k = 5;
        break;
      case "6":
        this.k = 6;
        break;
      case "7":
        this.k = 7;
        break;
      case "8":
        this.k = 8;
        break;
      case "9":
        this.k = 9;
        break;
      case "10":
        this.k = 10;
        break;
    }
    this.product = this.products[this.k-1];
  }
}
