import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table/src';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
  providers: [ProductService]
})
export class ManageProductsComponent implements OnInit {
  itemsResource: DataTableResource<any>;
  items = [];
  itemCount: number;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.list().subscribe(items => {
      this.itemsResource = new DataTableResource(items);
      this.itemsResource.count().then(count => this.itemCount = count);
    });
  }

  reloadItems(params) {
    this.itemsResource.query(params).then(items => this.items = items);
  }

  search(text) {
    const filteredItems = this.items.filter(item => item.title === text);
    this.itemsResource = new DataTableResource(filteredItems);
  }

}
