import { LoginService } from './login.service';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private productsUrl;

  constructor(private http: HttpService, private loginService: LoginService) {
    this.productsUrl = `https://fir-demo-524e3.firebaseio.com/products.json?auth=${loginService.token}`;
  }

  list() {
    return this.http.get(this.productsUrl)
      .map(products => Object.keys(products).map(key => ({ id: key, ...products[key] })));
  }

}
