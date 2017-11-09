import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from './../services/product.service';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers: [CategoryService, ProductService]
})
export class EditProductComponent implements OnInit {
  categories: any[];
  product = {};

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
    this.productService.update(this.product)
      .subscribe(() => this.router.navigateByUrl('/manage-products'));
  }

  delete() {
    this.productService.delete(this.product)
      .subscribe(() => this.router.navigateByUrl('/manage-products'));
  }

}
