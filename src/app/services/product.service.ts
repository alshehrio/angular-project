import { LoginService } from './login.service';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private productsUrl;
  private productUrl;

  constructor(private http: HttpService, private loginService: LoginService) {
    this.productsUrl = `https://fir-demo-524e3.firebaseio.com/products.json?auth=${loginService.token}`;
    this.productUrl = 'https://fir-demo-524e3.firebaseio.com/products/';
  }

  list() {
    return this.http.get(this.productsUrl)
      .map(products => Object.keys(products).map(key => ({ id: key, ...products[key] })));
  }

  create(prodcut) {
    return this.http.post(this.productsUrl, prodcut);
  }

  get(id) {
    return this.http.get(this.productUrl + id + `.json?auth=${this.loginService.token}`)
      .map(product => ({ id, ...product }));
  }

  update(product) {
    return this.http.update(this.productUrl + product.id + `.json?auth=${this.loginService.token}`, product);
  }

  delete(product) {
    return this.http.delete(this.productUrl + product.id + `.json?auth=${this.loginService.token}`);
  }

}
