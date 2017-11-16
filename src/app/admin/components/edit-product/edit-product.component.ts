import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CategoryService } from '../../../shared/services/category.service';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from './../../../shared/models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers: [CategoryService, ProductService]
})
export class EditProductComponent implements OnInit {
  categories: any[];
  product: Product;

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => Observable.combineLatest(this.categoryService.list(), this.productService.get(params.get('id'))))
      .subscribe(([categories, product]) => {
        this.categories = categories;
        this.product = product;
      });
  }

  submit() {
    this.productService.update(this.product.id, this.product)
      .subscribe(() => this.router.navigateByUrl('/manage-products'));
  }

  delete() {
    this.productService.delete(this.product.id)
      .subscribe(() => this.router.navigateByUrl('/manage-products'));
  }

}
