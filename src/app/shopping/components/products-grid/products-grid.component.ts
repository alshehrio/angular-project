import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css'],
  providers: [ProductService]
})
export class ProductsGridComponent implements OnInit {
  products: Observable<any[]>;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.products =
      this.route.queryParams
        .map(params => params['category'] ? { orderBy: '"category"', equalTo: `"${params['category']}"` } : {})
        .switchMap(filter => this.productService.list(filter));
  }
}
