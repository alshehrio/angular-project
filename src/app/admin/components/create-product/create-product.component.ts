import { Router } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  providers: [CategoryService, ProductService]
})
export class CreateProductComponent implements OnInit {
  categories: any[];

  constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.categoryService.list()
      .subscribe(categories => this.categories = categories);
  }

  submit({ value }) {
    this.productService.create(value)
      .subscribe(() => this.router.navigateByUrl('/manage-products'));
  }

}
