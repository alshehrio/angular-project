import { Injectable } from '@angular/core';

import { Product } from './../models/product.model';
import { FirebaseService } from './firebase.service';
import { HttpService } from './http.service';

@Injectable()
export class ProductService extends FirebaseService<Product> {

  constructor(public http: HttpService) {
    super('products', http);
  }

  toBussninsObejct({ id, title, price, category, imageUrl }): Product {
    const product: Product = Object.create(Product.prototype);
    product.constructor.apply(product, [id, title, price, category, imageUrl]);
    return product;
  }

  toBackendObject(product: Product) {
    return product;
  }
}
