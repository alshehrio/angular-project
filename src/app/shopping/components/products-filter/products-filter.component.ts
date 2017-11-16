import { CategoryService } from '../../../shared/services/category.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css'],
  providers: [CategoryService]
})
export class ProductsFilterComponent implements OnInit {
  categories$;

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.categoryService.list();
  }

}
