import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Product } from './../../../shared/models/product.model';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent {
  @Input() products$: Observable<Product[]>;
}
