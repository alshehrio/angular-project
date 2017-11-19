import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Category } from '../../../shared/models/category.model';
import { Product } from '../../../shared/models/product.model';
import { CategoryService } from './../../../shared/services/category.service';
import { ProductService } from './../../../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products$: Observable<Product[]>;
  categories$: Observable<Category[]>;

  constructor(private productService: ProductService, private route: ActivatedRoute, private categoryService: CategoryService) {
    this.products$ = this.route.queryParams
      .map(params => params['category'] ? { orderBy: '"category"', equalTo: `"${params['category']}"` } : {})
      .switchMap(filter => this.productService.list(filter));

    this.categories$ = this.categoryService.list();
  }
}
