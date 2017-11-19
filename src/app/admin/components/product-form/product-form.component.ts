import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from '../../../shared/models/product.model';
import { CategoryService } from '../../../shared/services/category.service';
import { ProductService } from '../../../shared/services/product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductFormComponent implements OnInit, OnDestroy {
  categories: any[];
  product: Product;
  subscription: Subscription;

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.paramMap
      .switchMap((params: ParamMap) => Observable.combineLatest(this.categoryService.list(), this.productService.get(params.get('id'))))
      .subscribe(([categories, product]) => {
        this.categories = categories;
        this.product = product;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submit() {
    this.productService.update(this.product.id, this.product)
      .take(1)
      .subscribe(() => this.router.navigateByUrl('/manage-products'));
  }

  delete() {
    this.productService.delete(this.product.id)
      .take(1)
      .subscribe(() => this.router.navigateByUrl('/manage-products'));
  }

}
