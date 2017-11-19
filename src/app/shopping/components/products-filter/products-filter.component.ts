import { Observable } from 'rxjs/Observable';
import { Category } from '../../../shared/models/category.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent {
  @Input() categories$: Observable<Category[]>;
}
